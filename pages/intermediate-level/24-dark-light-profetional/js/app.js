const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
   const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
   const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
   document.body.classList.replace(currentTheme, newTheme);
   localStorage.setItem('theme', newTheme);
});

// بارگذاری تم ذخیره‌شده
window.onload = () => {
   const savedTheme = localStorage.getItem('theme') || 'light';
   document.body.classList.add(savedTheme);
};
