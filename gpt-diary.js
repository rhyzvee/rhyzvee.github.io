function toggleContent() {
    var fullContent = event.target.closest('.blog-post').querySelector('.post-full-content');
    var link = event.target;

    // Toggle the open class
    fullContent.classList.toggle('open');

    // Change the text of the "Read more" button
    if (fullContent.classList.contains('open')) {
        link.innerHTML = 'Read less';
    } else {
        link.innerHTML = 'Read more';
    }
}