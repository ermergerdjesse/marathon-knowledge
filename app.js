let allArticles = [];
let fuse;
let selectedCategory = 'all';

async function init() {
  try {
    const res = await fetch('articles.json');
    allArticles = await res.json();

    // Fuse.js fuzzy search setup
    fuse = new Fuse(allArticles, {
      keys: [
        { name: 'title', weight: 0.5 },
        { name: 'tags', weight: 0.3 },
        { name: 'summary', weight: 0.15 },
        { name: 'category', weight: 0.05 }
      ],
      threshold: 0.3, // Lower threshold = stricter search accuracy
      ignoreLocation: true
    });

    renderCards(allArticles);
    setupEvents();
  } catch (err) {
    console.error('Error loading articles.json:', err);
  }
}

function filterAndSearch() {
  const query = document.getElementById('searchInput').value.trim();
  let filtered = allArticles;

  // 1. Text Search (if typed)
  if (query) {
    filtered = fuse.search(query).map(r => r.item);
  }

  // 2. Category Filter (if not 'all')
  if (selectedCategory !== 'all') {
    filtered = filtered.filter(a => a.category.toLowerCase() === selectedCategory.toLowerCase());
  }

  // Update UI count
  const countLabel = document.getElementById('resultsCount');
  if (query || selectedCategory !== 'all') {
    countLabel.innerText = `Found ${filtered.length} matching item${filtered.length === 1 ? '' : 's'}`;
  } else {
    countLabel.innerText = 'All Documentation';
  }

  renderCards(filtered);
}

function renderCards(list) {
  const container = document.getElementById('resultsGrid');
  container.innerHTML = '';

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 0; color: #64748b;">
        <p>No documentation found matching your search.</p>
      </div>
    `;
    return;
  }

  list.forEach(article => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div>
        <div class="card-category">${article.category}</div>
        <h3>${article.title}</h3>
        <p>${article.summary}</p>
      </div>
      <div class="card-footer">Updated: ${article.updated}</div>
    `;
    card.onclick = () => showArticle(article);
    container.appendChild(card);
  });
}

async function showArticle(article) {
  try {
    const res = await fetch(article.path);
    const md = await res.text();

    document.getElementById('articleCategoryTag').innerText = article.category;
    document.getElementById('articleDateTag').innerText = `Last updated: ${article.updated}`;
    document.getElementById('articleMarkdownContent').innerHTML = marked.parse(md);

    // Switch views
    document.getElementById('searchHomeView').className = 'view-hidden';
    document.getElementById('articleReaderView').className = 'view-active';
    window.scrollTo(0, 0);
  } catch (err) {
    console.error('Failed reading markdown:', err);
  }
}

function showHome() {
  document.getElementById('articleReaderView').className = 'view-hidden';
  document.getElementById('searchHomeView').className = 'view-active';
}

function setupEvents() {
  // Real-time input search
  document.getElementById('searchInput').addEventListener('input', filterAndSearch);

  // Category selection pills
  document.getElementById('categoryPills').addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    document.querySelectorAll('.pill').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');

    selectedCategory = e.target.dataset.cat;
    filterAndSearch();
  });

  // Navigation back buttons
  document.getElementById('backToSearchBtn').addEventListener('click', showHome);
  document.getElementById('brandHome').addEventListener('click', showHome);
}

window.onload = init;
