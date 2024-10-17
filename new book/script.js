let currentPage = 0;
const pages = document.querySelectorAll('.page');

// Function to flip to the next page
function flipPage() {
    if (currentPage < pages.length - 1) {
        pages[currentPage].classList.add('turn-right');
        pages[currentPage + 1].classList.remove('hidden');
        currentPage++;
    } else {
        pages[currentPage].classList.add('turn-right');
        currentPage = 0;
        pages[currentPage].classList.remove('hidden');
    }
}

// Function for next button
function nextPage() {
    flipPage();
}

// Function for previous button
function prevPage() {
    if (currentPage > 0) {
        pages[currentPage].classList.add('turn-left');
        pages[currentPage - 1].classList.remove('hidden');
        currentPage--;
    }
}
document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('click', event => {
        const targetPage = event.target.getAttribute('data-target');
        navigateToPage(targetPage);
    });
});

function navigateToPage(targetId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.add('hidden'); // Hide all pages
    });
    document.getElementById(targetId).classList.remove('hidden'); // Show the selected page
}


