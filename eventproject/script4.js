document.addEventListener('DOMContentLoaded', function() {
    // Function to navigate to different pages
    function navigateTo(page) {
        window.location.href = page;
    }

    // Event listeners for buttons
    var buttons = document.querySelectorAll('.dashboard-button');
    buttons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            // Example: Each button takes you to a different page
            var pages = ['3rdpage.html', '4thpage.html', '5thpage.html', '6thpage.html', '8thpage.html'];
            navigateTo(pages[index]);
        });
    });

    document.querySelector('.preview-button').addEventListener('click', function() {
        // Navigate to '1stpage.html' when the "Preview" button is clicked
        navigateTo('4thpage.html');
    });
     // Example: If you have a "Next" button
     document.querySelector('.next-button').addEventListener('click', function() {
        // Add functionality for the next button if needed
        navigateTo('6thpage.html')
    });


    // Example: If you have a "Previous" button
    document.querySelector('.prev-button').addEventListener('click', function() {
        // Add functionality for the previous button if needed
    });
});
