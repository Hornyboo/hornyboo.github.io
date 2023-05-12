window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    // Calculate blur value based on scroll position
    var blurValue = Math.min(scrollPosition / 30, 20); // Adjust the divisor and max blur value as needed

    // Apply blur to the image
    document.getElementById('blur-image').style.filter = 'blur(' + blurValue + 'px)';
});
