// --- Timeless Application Logic ---
let articles = [];
let fuse;
let activeCategory = 'all';

async function init() {
  // Set current year in footer
  document.getElementById('currentYear').innerText = new Date().getFullYear();
  
  try {
    const response = await fetch('articles.json');
    if (!response.ok) throw new Error('Could not fetch articles.json');
    articles = await response.json();

    // Fuse.js Fuzzy Search Configuration
    // We prioritize title and tags for 10-year durability
    fuse = new Fuse(articles, {
      keys: [
        { name: 'title', weight: 0.5 },
        { name: 'tags', weight: 0.3 },
        { name: 'summary', weight: 0.2 }
      ],
      threshold: 0.4
    });

    renderArticlesList(articles);
    bindUIEvents();
  } catch (err) {
    document.getElementById('resultsCount').innerText = 'ERROR: Documentation database could not be loaded.';
    console.error(err);
  }
}

// Filters articles by category *and* search query simultaneously
function updateResults() {
  const query = document.getElementById('searchInput').value.trim();
  let results = articles;

  // 1. Category Filter
  if (activeCategory !== 'all') {
    results = results.filter(a => a.category.toLowerCase() === activeCategory.toLowerCase());
  }

  // 2. Search Query (if present)
  if (query) {
    results = fuse.search(query).map(r => r.item);
  }

  // UI Updates
  const countSpan = document.getElementById('resultsCount');
  if (query) {
    countSpan.innerText = `Found ${results.length} result${results.length === 1 ? '' : 's'} for "${query}"`;
  } else {
    countSpan.innerText = `${activeCategory === 'all' ? 'All' : activeCategory} Documentation (${results.length})`;
  }

  renderArticlesList(results);
}

// Builds the list of article cards
function renderArticlesList(list) {
  const container = document.getElementById('resultsList');
  container.innerHTML = '';

  if (list.length === 0) {
    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #64748b; padding: 3rem;">No documentation matching your filter and search criteria.</p>';
    return;
  }

  list.forEach(article => {
    const card = document.createElement('div');
    card.className = 'result-card';
    card.innerHTML = `
      <div class="result-category">${article.category}</div>
      <h3 class="result-title">${article.title}</h3>
      <p class="result-summary">${article.summary}</p>
    `;
    card.onclick = () => openArticle(article);
    container.appendChild(card);
  });
}

// Renders Markdown into the centered viewer
async function openArticle(article) {
  try {
    const response = await fetch(article.path);
    if (!response.ok) throw new Error('Markdown file not found');
    const mdContent = await response.text();

    // Inject content
    document.getElementById('articleCategoryTag').innerText = article.category;
    document.getElementById('articleMetaDate').innerText = `Last updated: ${article.updated}`;
    document.getElementById('markdownBody').innerHTML = marked.parse(mdContent);

    // Switch Views
    document.getElementById('resultsSection').className = 'results-area view-hidden';
    document.getElementById('articleReader').className = 'reader-area view-active';
    document.getElementById('searchInput').parentElement.style.opacity = 0.2; // Dim search when reading
    document.getElementById('articleReader').scrollTo(0, 0); // Reset scroll to top

  } catch (err) {
    console.error(err);
    alert('Error loading the article content.');
  }
}

// Navigation back to search
function closeArticle() {
  document.getElementById('articleReader').className = 'reader-area view-hidden';
  document.getElementById('resultsSection').className = 'results-area view-active';
  document.getElementById('searchInput').parentElement.style.opacity = 1; // Restore search
}

// Binds all DOM click/input events
function bindUIEvents() {
  // Real-time Search Input
  document.getElementById('searchInput').addEventListener('input', updateResults);

  // Side Nav Category Filtering
  document.getElementById('categoryList').addEventListener('click', (e) => {
    if (e.target.tagName !== 'LI') return;

    // Update active nav state
    document.querySelectorAll('#categoryList li').forEach(li => li.classList.remove('active'));
    e.target.classList.add('active');

    activeCategory = e.target.dataset.cat;
    
    // Clear search and switch to results view
    document.getElementById('searchInput').value = '';
    closeArticle(); 
    updateResults();
  });

  // Back Button
  document.getElementById('backToResults').addEventListener('click', closeArticle);
}

// Entry point
window.onload = init;
