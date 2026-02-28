// تهيئة تطبيق تليجرام
const tg = window.Telegram.WebApp;
tg.expand();

// الحصول على معرف المستخدم الحقيقي من تليجرام
const userId = tg.initDataUnsafe.user?.id || 123456789; // احتياطي
const username = tg.initDataUnsafe.user?.username || "User";

// عنوان خادم Flask (يجب تغيير IP حسب هاتفك)
const API_BASE = "http://10.238.248.37:5000/api";  // 👈 غيّر x إلى الرقم الصحيح

// عناصر الصفحة
const balanceEl = document.getElementById('balance');
const usernameEl = document.getElementById('username');
const mineBtn = document.getElementById('mineBtn');

// عرض اسم المستخدم
usernameEl.innerText = username;

// دالة لجلب بيانات المستخدم من الخادم
async function fetchUserData() {
    try {
        const response = await fetch(`${API_BASE}/user/${userId}`);
        if (!response.ok) throw new Error('فشل في جلب البيانات');
        const data = await response.json();
        balanceEl.innerText = data.balance.toFixed(4);
    } catch (error) {
        console.error(error);
        balanceEl.innerText = "خطأ في التحميل";
    }
}

// دالة لبدء التعدين
async function startMining() {
    try {
        const response = await fetch(`${API_BASE}/mine`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: userId })
        });
        if (!response.ok) throw new Error('فشل التعدين');
        const data = await response.json();
        balanceEl.innerText = data.balance.toFixed(4);
    } catch (error) {
        console.error(error);
        alert("حدث خطأ في التعدين، تأكد من اتصال السيرفر");
    }
}

// ربط الأحداث
mineBtn.addEventListener('click', startMining);

// جلب البيانات عند تحميل الصفحة
fetchUserData();

// التنقل بين الصفحات (إذا أردت تفعيله)
const navItems = document.querySelectorAll('.nav-item');
const pages = document.querySelectorAll('.page');

navItems.forEach((item, index) => {
    item.onclick = () => {
        navItems.forEach(i => i.classList.remove('active'));
        pages.forEach(p => p.style.display = 'none');
        pages[index].style.display = 'block';
        item.classList.add('active');
    };
});