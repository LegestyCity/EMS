
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const closeMenu = document.getElementById('closeMenu');

menuToggle.addEventListener('click', () => navMenu.classList.add('active'));
closeMenu.addEventListener('click', () => navMenu.classList.remove('active'));

// زر إداري (مثال على فتح نافذة تحكم)
const adminBtn = document.getElementById('adminBtn');
adminBtn.addEventListener('click', () => {
    alert("تم الضغط على الزر الإداري");
});