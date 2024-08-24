
// Project Modals
document.querySelectorAll('.view-project').forEach(button => {
    button.addEventListener('click', function () {
        const projectId = this.getAttribute('data-project');
        document.getElementById(projectId).style.display = 'flex';
    });
});

document.querySelectorAll('.close-modal').forEach(span => {
    span.addEventListener('click', function () {
        this.parentElement.parentElement.style.display = 'none';
    });
});

window.addEventListener('click', function (event) {
    document.querySelectorAll('.project-modal').forEach(modal => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
