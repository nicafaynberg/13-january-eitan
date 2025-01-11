document.querySelectorAll('.family-member-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', function() {
        // Toggle the active class to show or hide description
        wrapper.classList.toggle('active');
    });
});
