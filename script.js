// 1. تعريف واجهة تليجرام
const tg = window.Telegram.WebApp;
tg.expand(); // توسيع الواجهة لتملأ الشاشة

// 2. أخذ اسم المستخدم الحقيقي
const username = tg.initDataUnsafe.user.username || "User";
document.getElementById('username').innerText = username;

// 3. الرصيد (سنبدأ بصفر حالياً حتى نربط السيرفر)
let balance = 0.0000;


navItems.forEach((item, index) => {
    item.onclick = () => {
        // إخفاء كل الصفحات (home, leaderboard, shop, referral, wallet)
        pages.forEach(p => p.style.display = 'none');
        // إزالة اللون الذهبي من كل الأزرار
        navItems.forEach(i => i.classList.remove('active'));
        
        // إظهار الصفحة المختارة فقط
        pages[index].style.display = 'block';
        item.classList.add('active');
    };
});
let balance = 0.0000;
const miningRate = 0.0001; // سرعة التعدين في الثانية

setInterval(() => {
    balance += miningRate;
    document.getElementById('balance').innerText = balance.toFixed(4);
}, 1000); // تحديث كل ثانية
