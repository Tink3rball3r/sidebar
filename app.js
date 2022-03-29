// target elements
const sidebarToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');
// click event to toggle sidebar
sidebarToggle.addEventListener('click', function () {
	sidebar.classList.toggle('show-sidebar');
});
// click event to close sidebar
closeBtn.addEventListener('click', function () {
	sidebar.classList.remove('show-sidebar');
});
