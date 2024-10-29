document.addEventListener("DOMContentLoaded", function() {

    const dropBtn = document.querySelector('.dropbtn');
    const dropdown = document.querySelector('.dropdown');

    // Dropdown menu toggle
    dropBtn.addEventListener('click', function() {
        dropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        }
    }

    const items = document.querySelectorAll('.slider .list .item');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const thumbnails = document.querySelectorAll('.thumbnails .thumb');

    let currentIndex = 0;
    let isAnimating = false;
    const totalItems = items.length;

    // Update slider function to set active class
    function updateSlider(index) {
        // Remove active class from all items and thumbnails
        items.forEach(item => item.classList.remove('active'));
        thumbnails.forEach(thumb => thumb.classList.remove('active'));

        // Add active class to the current item and thumbnail
        items[index].classList.add('active');
        thumbnails[index].classList.add('active');
    }

    // Next button click event
    nextBtn.addEventListener('click', () => {
        if (!isAnimating) {
            currentIndex = (currentIndex + 1) % totalItems;
            updateSlider(currentIndex);
        }
    });

    // Previous button click event
    prevBtn.addEventListener('click', () => {
        if (!isAnimating) {
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            updateSlider(currentIndex);
        }
    });

    // Thumbnail click event
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            if (!isAnimating) {
                currentIndex = index;
                updateSlider(currentIndex);
            }
        });
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        nextBtn.click();
    }, 5000);

    // Initial update
    updateSlider(currentIndex);
});
