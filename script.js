function showPage(pageId) {
    // إخفاء كل الصفحات
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    // إظهار الصفحة المطلوبة
    document.getElementById(pageId).style.display = 'block';
}

// إضافة مستمع للأحداث للأزرار
document.querySelectorAll('.nav-item').forEach((item, index) => {
    item.addEventListener('click', () => {
        const pages = ['home', 'leaderboard', 'shop', 'referral', 'wallet'];
        showPage(pages[index]);
        
        // تغيير الزر النشط
        document.querySelector('.nav-item.active').classList.remove('active');
        item.classList.add('active');
    });
});
