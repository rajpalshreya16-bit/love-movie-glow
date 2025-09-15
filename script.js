// Global state
let selectedDecade = 'all';
let likedMovies = new Set();
let showFavorites = false;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeFloatingHearts();
    renderMovies();
    setupEventListeners();
    updateFavoritesButton();
});

// Event listeners
function setupEventListeners() {
    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update selected decade
            selectedDecade = this.dataset.decade;
            renderMovies();
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Floating hearts animation
function initializeFloatingHearts() {
    const container = document.getElementById('floating-hearts');
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '♥';
        heart.className = 'floating-heart';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = (i * 0.7) + 's';
        heart.style.fontSize = (Math.random() * 24 + 12) + 'px';
        heart.style.animationDuration = (3 + Math.random() * 2) + 's';
        container.appendChild(heart);
    }
}

// Filter movies based on current state
function getFilteredMovies() {
    let filtered = selectedDecade === 'all' 
        ? window.moviesData 
        : window.moviesData.filter(movie => movie.decade === selectedDecade);
    
    if (showFavorites) {
        filtered = filtered.filter(movie => likedMovies.has(movie.id));
    }
    
    return filtered;
}

// Render movies grid
function renderMovies() {
    const moviesGrid = document.getElementById('movies-grid');
    const emptyState = document.getElementById('empty-state');
    const moviesTitle = document.getElementById('movies-title');
    const moviesDescription = document.getElementById('movies-description');
    
    const filteredMovies = getFilteredMovies();
    
    // Update section title and description
    if (showFavorites) {
        moviesTitle.textContent = 'Your Favorite Movies';
        moviesDescription.textContent = 'All the romantic movies you\'ve fallen in love with, collected in one beautiful place.';
    } else {
        moviesTitle.textContent = 'Curated Love Stories';
        moviesDescription.textContent = 'From epic romances that defined generations to intimate love stories that capture the heart. Every film is carefully selected to showcase the beauty of love in all its forms.';
    }
    
    if (filteredMovies.length === 0) {
        moviesGrid.style.display = 'none';
        emptyState.style.display = 'block';
        
        const emptyTitle = document.getElementById('empty-title');
        const emptyDescription = document.getElementById('empty-description');
        const emptyAction = document.getElementById('empty-action');
        
        if (showFavorites) {
            emptyTitle.textContent = 'No favorite movies yet.';
            emptyDescription.textContent = 'Start liking movies to build your personal collection!';
            emptyAction.style.display = 'block';
        } else {
            emptyTitle.textContent = 'No movies found for this decade.';
            emptyDescription.textContent = 'Try selecting a different time period to discover more love stories!';
            emptyAction.style.display = 'none';
        }
    } else {
        moviesGrid.style.display = 'grid';
        emptyState.style.display = 'none';
        
        moviesGrid.innerHTML = filteredMovies.map(movie => createMovieCard(movie)).join('');
        
        // Add event listeners to movie cards
        addMovieCardListeners();
    }
}

// Create movie card HTML
function createMovieCard(movie) {
    const isLiked = likedMovies.has(movie.id);
    const heartFill = isLiked ? 'currentColor' : 'none';
    const likedClass = isLiked ? 'liked' : '';
    
    return `
        <div class="movie-card" data-movie-id="${movie.id}">
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
                <div class="movie-actions">
                    <button class="movie-action-btn ${likedClass}" onclick="toggleLike(${movie.id})" title="Add to favorites">
                        <svg viewBox="0 0 24 24" fill="${heartFill}" stroke="currentColor">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    <button class="movie-action-btn" onclick="shareMovie(${movie.id})" title="Share movie">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                            <polyline points="16,6 12,2 8,6"></polyline>
                            <line x1="12" y1="2" x2="12" y2="15"></line>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-year">${movie.year}</div>
                <div class="movie-rating">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
                    </svg>
                    <span class="movie-rating-text">${movie.rating}</span>
                </div>
                <div class="movie-genre">${movie.genre}</div>
                <p class="movie-description">${movie.description}</p>
            </div>
        </div>
    `;
}

// Add event listeners to movie cards
function addMovieCardListeners() {
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking on action buttons
            if (e.target.closest('.movie-action-btn')) {
                return;
            }
            
            const movieId = this.dataset.movieId;
            window.location.href = `movie-detail.html?id=${movieId}`;
        });
    });
}

// Toggle like status
function toggleLike(movieId) {
    if (likedMovies.has(movieId)) {
        likedMovies.delete(movieId);
        showToast("Removed from favorites", "Movie removed from your list");
    } else {
        likedMovies.add(movieId);
        showToast("Added to favorites ♡", "Movie saved to your collection");
    }
    
    updateFavoritesButton();
    renderMovies();
}

// Share movie
function shareMovie(movieId) {
    const movie = window.moviesData.find(m => m.id === movieId);
    if (!movie) return;
    
    const shareText = `Check out ${movie.title} (${movie.year}) on Lovify - ${movie.description}`;
    
    if (navigator.share) {
        navigator.share({
            title: `Check out ${movie.title}!`,
            text: `I found this amazing romantic movie on Lovify: ${movie.title} (${movie.year}). ${movie.description}`,
            url: window.location.href,
        });
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            showToast("Link copied! ✨", "Share this movie with your friends");
        });
    }
}

// Update favorites button
function updateFavoritesButton() {
    const favoritesBtn = document.getElementById('favorites-btn-text');
    const heartIcon = document.querySelector('#favorites-btn-text').previousElementSibling;
    
    favoritesBtn.textContent = `My Favorites (${likedMovies.size})`;
    
    // Update heart fill
    if (showFavorites) {
        heartIcon.setAttribute('fill', 'currentColor');
    } else {
        heartIcon.setAttribute('fill', 'none');
    }
}

// Toggle favorites view
function toggleFavorites() {
    showFavorites = !showFavorites;
    updateFavoritesButton();
    renderMovies();
}

// Show all movies (from empty state)
function showAllMovies() {
    showFavorites = false;
    updateFavoritesButton();
    renderMovies();
}

// Scroll to movies section
function scrollToMovies() {
    document.getElementById('movies').scrollIntoView({ behavior: 'smooth' });
}

// Toast notification system
function showToast(title, description) {
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toast-title');
    const toastDescription = document.getElementById('toast-description');
    
    toastTitle.textContent = title;
    toastDescription.textContent = description;
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Handle URL routing (simple implementation)
function handleRouting() {
    const path = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);
    
    if (path.endsWith('movie-detail.html')) {
        const movieId = parseInt(searchParams.get('id'));
        if (movieId) {
            loadMovieDetail(movieId);
        } else {
            window.location.href = '404.html';
        }
    }
}

// Load movie detail (for movie-detail.html)
function loadMovieDetail(movieId) {
    const movie = window.moviesData.find(m => m.id === movieId);
    if (!movie) {
        window.location.href = '404.html';
        return;
    }
    
    // Update page title
    document.title = `${movie.title} - Lovify`;
    
    // This would be implemented in movie-detail.html
    console.log('Loading movie detail for:', movie);
}