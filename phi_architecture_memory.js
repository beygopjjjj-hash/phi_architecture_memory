<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>د. أشرف عبد الجواد | ذاكرة العمارة - PHI Class of 2026</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Cairo', sans-serif; transition: background-color 0.3s, color 0.2s; background: #0a0f1a; color: #eef4ff; overflow-x: hidden; }
        @media (prefers-color-scheme: light) { body { background: #fefaf5; color: #1a2c38; } .gallery-item { background: #fff; } .message-card { background: #fff; } }
        .bg-aura { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at 20% 30%, rgba(180,200,230,0.2), transparent); z-index: -1; }
        .splash { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #0a0f1a; z-index: 20000; display: flex; justify-content: center; align-items: center; transition: opacity 0.8s; }
        .splash.hide { opacity: 0; visibility: hidden; }
        .splash-content img { max-width: 90%; max-height: 60vh; border-radius: 40px; box-shadow: 0 20px 35px rgba(0,0,0,0.3); }
        .container { max-width: 1400px; margin: 0 auto; padding: 0 20px; }
        .admin-bar { display: flex; justify-content: flex-end; padding: 15px; gap: 15px; }
        .admin-btn { background: #e2bd6e; border: none; padding: 8px 20px; border-radius: 40px; font-weight: bold; cursor: pointer; color: #1a2c38; }
        .modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); backdrop-filter: blur(12px); z-index: 40000; display: flex; justify-content: center; align-items: center; visibility: hidden; opacity: 0; transition: 0.2s; }
        .modal.active { visibility: visible; opacity: 1; }
        .modal-box { background: #1e2a36; border-radius: 40px; padding: 30px; width: 90%; max-width: 500px; text-align: center; border: 1px solid #e2bd6e; }
        .admin-panel { max-width: 900px; max-height: 85vh; overflow-y: auto; }
        .image-grid-admin { display: grid; grid-template-columns: repeat(auto-fill, minmax(100px,1fr)); gap: 10px; margin: 20px 0; }
        .img-admin-item { background: #00000033; border-radius: 16px; padding: 6px; text-align: center; }
        .img-admin-item img { width: 100%; height: 80px; object-fit: cover; border-radius: 12px; }
        .delete-btn { background: #a03c2c; border: none; color: white; border-radius: 20px; padding: 4px 8px; font-size: 0.7rem; margin-top: 6px; cursor: pointer; }
        .hero { text-align: center; padding: 80px 20px 50px; }
        .hero h1 { font-size: 2.5rem; background: linear-gradient(135deg, #e2bd6e, #c9a345); background-clip: text; -webkit-background-clip: text; color: transparent; }
        .tribute { max-width: 750px; margin: 25px auto; padding: 20px; background: rgba(226,189,110,0.1); border-radius: 32px; border-right: 4px solid #e2bd6e; }
        .gold-divider { width: 100px; height: 3px; background: #e2bd6e; margin: 30px auto; }
        .gallery-header { text-align: center; margin: 30px 0; }
        .gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 25px; margin-bottom: 60px; }
        .gallery-item { background: rgba(20,30,45,0.6); border-radius: 28px; overflow: hidden; cursor: pointer; transition: 0.3s; border: 1px solid rgba(226,189,110,0.3); }
        .gallery-item:hover { transform: translateY(-8px); border-color: #e2bd6e; }
        .gallery-item img { width: 100%; height: 260px; object-fit: cover; display: block; transition: 0.3s; background: #1e2a36; }
        .messages-section { max-width: 900px; margin: 20px auto 60px; padding: 25px; background: #0f1a24; border-radius: 48px; }
        .message-input-area input, .message-input-area textarea { width: 100%; padding: 12px; margin-bottom: 12px; border-radius: 28px; border: none; background: #2a3845; color: white; }
        .send-btn { background: #e2bd6e; border: none; padding: 10px 24px; border-radius: 40px; font-weight: bold; margin-top: 10px; cursor: pointer; width: 160px; margin: 0 auto; display: block; }
        .message-card { background: #0f1a24; border-radius: 28px; padding: 16px; margin-bottom: 16px; border-right: 3px solid #e2bd6e; }
        .message-header { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
        .message-name { font-weight: bold; color: #e2bd6e; }
        .message-date { font-size: 0.7rem; color: #aaa; margin-right: auto; }
        footer { text-align: center; padding: 40px; background: #0b111c; border-top: 1px solid #e2bd6e33; }
        .lightbox { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); backdrop-filter: blur(20px); z-index: 30000; display: flex; align-items: center; visibility: hidden; opacity: 0; transition: 0.2s; }
        .lightbox.active { visibility: visible; opacity: 1; }
        .lb-img { max-width: 90vw; max-height: 85vh; object-fit: contain; border-radius: 28px; }
        .lb-btn { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.2); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; cursor: pointer; color: white; }
        .lb-prev { left: 20px; } .lb-next { right: 20px; }
        .lb-close { position: absolute; top: 20px; right: 30px; font-size: 2rem; cursor: pointer; color: white; }
        .lb-counter { position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); background: rgba(0,0,0,0.6); padding: 6px 18px; border-radius: 40px; }
        @media (max-width: 750px) { .gallery { gap: 15px; } .gallery-item img { height: 200px; } }
    </style>
</head>
<body>
<div class="bg-aura"></div>

<div class="admin-bar">
    <button id="openAdminBtn" class="admin-btn"><i class="fas fa-lock"></i> دخول الإدارة</button>
    <span id="adminStatus">🔒 وضع المستخدم</span>
</div>

<div id="loginModal" class="modal"><div class="modal-box"><h3>تسجيل دخول المدير</h3><input type="password" id="adminPass" placeholder="كلمة المرور" style="margin:20px 0; width:100%; padding:12px; border-radius:60px;"><button id="loginSubmit" class="admin-btn">دخول</button><button id="closeLogin" style="margin-top:15px; background:none; border:none; color:#ccc;">إغلاق</button></div></div>

<div id="adminModal" class="modal"><div class="modal-box admin-panel"><h2>لوحة الإدارة</h2>
<div><h4>📎 إضافة روابط متعددة دفعة واحدة</h4><textarea id="bulkUrls" rows="4" placeholder="رابط في كل سطر" style="width:100%; padding:10px; border-radius:20px;"></textarea><button id="addBulkBtn" class="admin-btn" style="margin-top:8px;">إضافة الكل وحفظ</button></div>
<div><h4>➕ إضافة رابط فردي</h4><input type="text" id="newImageUrl" placeholder="رابط الصورة" style="width:100%; padding:10px; border-radius:60px;"><button id="addImageBtn" class="admin-btn" style="margin-top:8px;">إضافة وحفظ</button><div id="adminImagesList" class="image-grid-admin"></div></div>
<div><h4>📝 تعديل النص التذكاري</h4><textarea id="editTributeText" rows="4" style="width:100%;"></textarea><button id="saveTributeBtn" class="admin-btn" style="margin-top:8px;">حفظ النص</button></div>
<div><h4>💬 إدارة الرسائل</h4><div id="adminMessagesList"></div><button id="clearAllMessagesBtn" class="admin-btn" style="background:#a03c2c; margin-top:15px;">حذف كل الرسائل</button></div>
<button id="logoutAdminBtn" class="admin-btn" style="background:#5a6e7c;">تسجيل الخروج</button>
<button id="closeAdminBtn" style="margin-top:15px; background:none; border:1px solid #e2bd6e; padding:6px 20px; border-radius:30px;">إغلاق</button></div></div>

<div id="splashScreen" class="splash"><div class="splash-content"><img src="https://i.postimg.cc/fLxG4FV1/sh.jpg"><div style="margin-top:20px; font-size:1.5rem;">د. أشرف عبد الجواد<br><span style="font-size:1rem;">في ذمة الله</span></div></div></div>

<main>
    <div class="hero"><h1>ستظل ذكراك في قلوبنا</h1><div class="sub" style="color:#e2bd6e;">رحمك الله يا دكتور أشرف</div>
    <div class="tribute" id="tributeBox"><p id="tributeText">جارٍ التحميل...</p><div style="font-size:0.9rem; margin-top:10px; color:#e2bd6e;">اللهم اجعل قبره روضة من رياض الجنة</div></div>
    <div class="gold-divider"></div>
    <p style="color:#aaa;">انقر على الصورة لملء الشاشة</p></div>

    <div class="gallery-header"><h2>رحلة الذكريات</h2><p>لحظات جمعتنا معاً</p></div>
    <div class="gallery" id="galleryContainer"></div>

    <div class="messages-section"><h3><i class="fas fa-envelope"></i> رسائل الذكرى</h3>
    <div class="message-input-area"><input type="text" id="senderName" placeholder="اسمك (اختياري)"><textarea id="messageContent" rows="3" placeholder="اكتب رسالتك..."></textarea><button class="send-btn" id="sendMessageBtn"><i class="fas fa-paper-plane"></i> أرسل رسالة</button></div>
    <div id="messagesList"><div class="empty-messages" style="text-align:center; padding:30px;">لا توجد رسائل بعد</div></div></div>
</main>

<footer><div class="quote">دكتور أشرف، لقد تركت فراغاً كبيراً في قلوبنا، لكن ذكراك ستبقى نابضة...</div><div class="faculty-gold">كل التقدير لأساتذتنا ومعيدينا المخلصين</div><small>دفعة 2026 - معهد الأهرامات العالي</small></footer>

<div class="lightbox" id="lightbox"><div class="lb-inner"><button class="lb-close" id="lbClose"><i class="fas fa-times"></i></button><button class="lb-btn lb-prev" id="lbPrev"><i class="fas fa-chevron-right"></i></button><img class="lb-img" id="lbImage" src=""><button class="lb-btn lb-next" id="lbNext"><i class="fas fa-chevron-left"></i></button><div class="lb-counter" id="lbCounter"></div></div></div>

<script>
    // --- هذه النسخة من الموقع تستخدم localStorage فقط (بدون سحابة) ---
    // --- ستتم حفظ الصور والرسائل محلياً على متصفح كل زائر ---
    // --- لكن هذا يحل مشكلة "حدث خطأ" ويجعل الموقع سريعاً ---

    // القائمة الافتراضية للصور (جميع الصور التي أرسلتها)
    const fullImageList = [
        "https://i.postimg.cc/Y0wJpmhS/Whats-App-Image-2026-04-29-at-14-59-32.jpg",
        "https://i.postimg.cc/brjKz2sP/Whats-App-Image-2026-04-29-at-14-59-32-(1).jpg",
        "https://i.postimg.cc/RhzjMnNZ/Whats-App-Image-2026-04-29-at-14-59-34.jpg",
        "https://i.postimg.cc/3NCzWJvQ/Whats-App-Image-2026-04-29-at-15-35-49.jpg",
        "https://i.postimg.cc/GtJ69hyp/Whats-App-Image-2026-04-29-at-15-48-17.jpg",
        "https://i.postimg.cc/hvqHS7fP/Whats-App-Image-2026-04-29-at-15-48-17-(1).jpg",
        "https://i.postimg.cc/3NCzWJvR/Whats-App-Image-2026-04-30-at-17-41-39.jpg",
        "https://i.postimg.cc/C5H9dLqz/Whats-App-Image-2026-04-30-at-17-41-39-(1).jpg",
        "https://i.postimg.cc/qqXWgM33/Whats-App-Image-2026-04-30-at-17-41-43.jpg",
        "https://i.postimg.cc/7hMjbY25/Whats-App-Image-2026-04-30-at-17-41-43-(1).jpg",
        "https://i.postimg.cc/MHbgXKQM/Whats-App-Image-2026-04-30-at-17-41-43-(2).jpg",
        "https://i.postimg.cc/cCMP64nY/Whats-App-Image-2026-04-30-at-17-41-44.jpg",
        "https://i.postimg.cc/rsC7zFrx/Whats-App-Image-2026-04-30-at-17-43-15.jpg",
        "https://i.postimg.cc/VvB25LC9/Whats-App-Image-2026-04-30-at-17-43-16.jpg",
        "https://i.postimg.cc/fyj1kT9f/Whats-App-Image-2026-04-30-at-17-43-18.jpg",
        "https://i.postimg.cc/wxhCwFbn/Whats-App-Image-2026-04-30-at-22-42-29.jpg",
        "https://i.postimg.cc/Y215d8yZ/Whats-App-Image-2026-04-30-at-22-42-33.jpg",
        "https://i.postimg.cc/xjKw6gFw/Whats-App-Image-2026-04-30-at-23-42-46.jpg",
        "https://i.postimg.cc/2j4s0TKp/Whats-App-Image-2026-04-30-at-23-51-36.jpg",
        "https://i.postimg.cc/44zDWwS3/Whats-App-Image-2026-05-01-at-22-07-59.jpg",
        "https://i.postimg.cc/xjKw6g4D/Whats-App-Image-2026-05-01-at-22-07-59-(1).jpg",
        "https://i.postimg.cc/wxhCwFGp/Whats-App-Image-2026-05-01-at-22-07-59-(2).jpg",
        "https://i.postimg.cc/1RpkvMjy/Whats-App-Image-2026-05-01-at-22-07-59-(3).jpg",
        "https://i.postimg.cc/9XG6L1nX/Whats-App-Image-2026-05-01-at-22-07-59-(4).jpg",
        "https://i.postimg.cc/VsjxK4VL/Whats-App-Image-2026-05-01-at-22-07-59-(5).jpg",
        "https://i.postimg.cc/HWQq63hk/Whats-App-Image-2026-05-01-at-22-07-59-(6).jpg",
        "https://i.postimg.cc/G3kWXz5t/Whats-App-Image-2026-05-01-at-22-08-00.jpg",
        "https://i.postimg.cc/dQ8b5nx1/Whats-App-Image-2026-05-01-at-22-08-00-(1).jpg",
        "https://i.postimg.cc/QxhRw52K/Whats-App-Image-2026-05-01-at-22-21-33.jpg",
        "https://i.postimg.cc/c1QpFTbv/Whats-App-Image-2026-05-01-at-22-21-33-(1).jpg",
        "https://i.postimg.cc/MZyC9tFf/Whats-App-Image-2026-05-01-at-22-21-33-(2).jpg",
        "https://i.postimg.cc/3JYPVpsJ/Whats-App-Image-2026-05-01-at-22-21-33-(3).jpg",
        "https://i.postimg.cc/SNkw38Bj/Whats-App-Image-2026-05-01-at-22-21-33-(4).jpg",
        "https://i.postimg.cc/X74TmFRG/Whats-App-Image-2026-05-01-at-22-21-33-(5).jpg",
        "https://i.postimg.cc/CL7Wg502/Whats-App-Image-2026-05-01-at-22-21-34.jpg",
        "https://i.postimg.cc/jdtGmNp7/Whats-App-Image-2026-05-01-at-22-21-34-(1).jpg",
        "https://i.postimg.cc/tCpLwPK6/Whats-App-Image-2026-05-01-at-22-21-34-(2).jpg",
        "https://i.postimg.cc/WbTQCrB0/Whats-App-Image-2026-05-01-at-22-21-34-(3).jpg",
        "https://i.postimg.cc/KvxdwL6N/Whats-App-Image-2026-05-01-at-22-21-34-(4).jpg",
        "https://i.postimg.cc/bNpKWb7L/Whats-App-Image-2026-05-01-at-22-21-34-(5).jpg",
        "https://i.postimg.cc/rFjvksTS/Whats-App-Image-2026-05-01-at-22-21-34-(6).jpg",
        "https://i.postimg.cc/Fsp24zvW/Whats-App-Image-2026-05-01-at-22-21-34-(7).jpg",
        "https://i.postimg.cc/PryBjJhT/Whats-App-Image-2026-05-01-at-22-21-35.jpg",
        "https://i.postimg.cc/28GPDymR/Whats-App-Image-2026-05-01-at-22-21-35-(1).jpg",
        "https://i.postimg.cc/YqRJH0kB/Whats-App-Image-2026-05-01-at-22-21-35-(2).jpg",
        "https://i.postimg.cc/zX79rv5r/Whats-App-Image-2026-05-01-at-22-21-35-(3).jpg",
        "https://i.postimg.cc/TYc6CGP2/Whats-App-Image-2026-05-01-at-22-47-35.jpg",
        "https://i.postimg.cc/ZKLSVZqz/Whats-App-Image-2026-05-01-at-22-47-35-(1).jpg",
        "https://i.postimg.cc/gkKWNd0w/Whats-App-Image-2026-05-01-at-22-48-03.jpg",
        "https://i.postimg.cc/J4QLPmh0/Whats-App-Image-2026-05-01-at-22-48-40.jpg",
        "https://i.postimg.cc/4N1gBZ3n/Whats-App-Image-2026-05-01-at-22-48-52.jpg",
        "https://i.postimg.cc/sgDRL8Bg/Whats-App-Image-2026-05-01-at-22-49-02.jpg",
        "https://i.postimg.cc/BnQGzy8v/Whats-App-Image-2026-05-01-at-22-49-13.jpg",
        "https://i.postimg.cc/MpK8L4cT/Whats-App-Image-2026-05-01-at-22-49-39.jpg",
        "https://i.postimg.cc/9QFjkS4q/Whats-App-Image-2026-05-01-at-22-50-12.jpg",
        "https://i.postimg.cc/RZVzY83J/Whats-App-Image-2026-05-01-at-22-50-24.jpg",
        "https://i.postimg.cc/P5rk7cLp/Whats-App-Image-2026-05-01-at-22-50-39.jpg",
        "https://i.postimg.cc/MpK8L4cQ/Whats-App-Image-2026-05-01-at-22-51-00.jpg",
        "https://i.postimg.cc/9QFjkS4y/Whats-App-Image-2026-05-01-at-22-52-00.jpg",
        "https://i.postimg.cc/7ZYyRcCg/Whats-App-Image-2026-05-01-at-22-52-40.jpg",
        "https://i.postimg.cc/DwyKNDWr/Whats-App-Image-2026-05-01-at-22-53-00.jpg",
        "https://i.postimg.cc/qvMdFYtX/Whats-App-Image-2026-05-01-at-23-02-25.jpg",
        "https://i.postimg.cc/T3YXsSy9/Whats-App-Image-2026-05-01-at-23-03-54.jpg",
        "https://i.postimg.cc/4xNT0MKP/Whats-App-Image-2026-05-01-at-23-05-08.jpg",
        "https://i.postimg.cc/XY70PhZx/Whats-App-Image-2026-05-01-at-23-05-23.jpg",
        "https://i.postimg.cc/VkLchTSK/Whats-App-Image-2026-05-01-at-23-05-33.jpg",
        "https://i.postimg.cc/P5rk7cL3/Whats-App-Image-2026-05-01-at-23-08-08.jpg",
        "https://i.postimg.cc/9Q8jHpTP/Whats-App-Image-2026-05-01-at-23-08-34.jpg",
        "https://i.postimg.cc/mgXGWwMy/Whats-App-Image-2026-05-01-at-23-09-27.jpg",
        "https://i.postimg.cc/6pjNx0R0/Whats-App-Image-2026-05-01-at-23-09-46.jpg",
        "https://i.postimg.cc/YCnwB3gR/Whats-App-Image-2026-05-01-at-23-10-21.jpg",
        "https://i.postimg.cc/W1WPcnr5/Whats-App-Image-2026-05-01-at-23-10-27.jpg",
        "https://i.postimg.cc/RZszxRfD/Whats-App-Image-2026-05-01-at-23-11-20.jpg",
        "https://i.postimg.cc/DwjK3gsY/Whats-App-Image-2026-05-01-at-23-12-05.jpg",
        "https://i.postimg.cc/sg6RCcSL/Whats-App-Image-2026-05-01-at-23-13-47.jpg",
        "https://i.postimg.cc/NjJwv4T3/Whats-App-Image-2026-05-01-at-23-14-05.jpg",
        "https://i.postimg.cc/rwnL2JxX/Whats-App-Image-2026-05-01-at-23-15-13.jpg",
        "https://i.postimg.cc/P53kn4YG/Whats-App-Image-2026-05-01-at-23-15-55.jpg",
        "https://i.postimg.cc/t4SHG5Wb/Whats-App-Image-2026-05-01-at-23-16-05.jpg",
        "https://i.postimg.cc/3xSHQBm8/Whats-App-Image-2026-05-01-at-23-16-31.jpg",
        "https://i.postimg.cc/BvjfSKcr/Whats-App-Image-2026-05-01-at-23-18-29.jpg",
        "https://i.postimg.cc/VNJPfCWQ/Whats-App-Image-2026-05-01-at-23-19-45.jpg",
        "https://i.postimg.cc/Gp4nLyx0/Whats-App-Image-2026-05-01-at-23-20-11.jpg",
        "https://i.postimg.cc/q7NHJ3xr/Whats-App-Image-2026-05-01-at-23-24-37.jpg",
        "https://i.postimg.cc/8C7gp6mN/Whats-App-Image-2026-05-01-at-23-25-09.jpg",
        "https://i.postimg.cc/251NkZ7k/Whats-App-Image-2026-05-01-at-23-28-53.jpg",
        "https://i.postimg.cc/Qx2nsD78/Whats-App-Image-2026-05-02-at-14-15-45.jpg",
        "https://i.postimg.cc/L6c0RSPX/Whats-App-Image-2026-05-02-at-14-15-47.jpg",
        "https://i.postimg.cc/qMPZ0rKz/Whats-App-Image-2026-05-02-at-14-15-51.jpg",
        "https://i.postimg.cc/jdpkKTfj/Whats-App-Image-2026-05-02-at-14-15-51-(1).jpg",
        "https://i.postimg.cc/15kYPSFR/Whats-App-Image-2026-05-02-at-14-15-51-(2).jpg",
        "https://i.postimg.cc/4NDFZGcy/Whats-App-Image-2026-05-02-at-14-15-51-(3).jpg",
        "https://i.postimg.cc/pXw1xvj5/Whats-App-Image-2026-05-02-at-14-15-52.jpg",
        "https://i.postimg.cc/c4p5ZW3w/Whats-App-Image-2026-05-02-at-14-15-53.jpg",
        "https://i.postimg.cc/28sXmYWb/Whats-App-Image-2026-05-02-at-14-15-53-(1).jpg",
        "https://i.postimg.cc/WbBfjVZD/Whats-App-Image-2026-05-02-at-14-15-53-(2).jpg",
        "https://i.postimg.cc/ZKGDZmNy/Whats-App-Image-2026-05-02-at-14-15-53-(3).jpg",
        "https://i.postimg.cc/dVGNVfRn/Whats-App-Image-2026-05-02-at-14-15-54.jpg",
        "https://i.postimg.cc/rw5ZwHG1/Whats-App-Image-2026-05-02-at-14-15-54-(1).jpg",
        "https://i.postimg.cc/BQrws3FT/Whats-App-Image-2026-05-02-at-14-15-54-(2).jpg",
        "https://i.postimg.cc/vZ52ZK7P/Whats-App-Image-2026-05-02-at-14-15-55.jpg",
        "https://i.postimg.cc/t4Fv4cdh/Whats-App-Image-2026-05-02-at-14-15-55-(1).jpg",
        "https://i.postimg.cc/13D73d0C/Whats-App-Image-2026-05-02-at-14-15-55-(2).jpg",
        "https://i.postimg.cc/4xp2x0vP/Whats-App-Image-2026-05-02-at-14-15-55-(3).jpg",
        "https://i.postimg.cc/htVZtY8p/Whats-App-Image-2026-05-02-at-14-15-55-(4).jpg",
        "https://i.postimg.cc/3w0L5L8f/6bbde1b9-d8f7-4d53-9829-509c78dd3608.jpg",
        "https://i.postimg.cc/zfHdZdDr/ARAT2083.jpg",
        "https://i.postimg.cc/wvKw6hMn/AWXD1040.jpg"
    ];

    // تحميل البيانات المخزنة أو استخدام الافتراضية
    let images = JSON.parse(localStorage.getItem('site_images'));
    if (!images || images.length === 0) images = [...fullImageList];
    let messages = JSON.parse(localStorage.getItem('site_messages')) || [];
    let tributeText = localStorage.getItem('site_tribute') || "وداعاً يا من كنت نوراً يضيء درب طلاب العمارة... رحم الله الأستاذ الدكتور أشرف عبد الجواد.";

    // تحديث الواجهات
    document.getElementById('tributeText').innerText = tributeText;

    const galleryContainer = document.getElementById('galleryContainer');
    const lightboxEl = document.getElementById('lightbox');
    const lbImage = document.getElementById('lbImage');
    const lbCounter = document.getElementById('lbCounter');
    let currentIdx = 0;

    // عرض المعرض مع تحميل الصور الكسول (لتحسين السرعة)
    function renderGallery() {
        let html = '';
        // عرض أول 30 صورة فقط لعرض الصفحة بسرعة، والباقي سيتم تحميله عبر lazy loading المدمج في المتصفح
        images.forEach((src, i) => {
            html += `<div class="gallery-item"><img src="${src}" loading="lazy" alt="ذكرى" style="width:100%; height:260px; object-fit:cover;"></div>`;
        });
        galleryContainer.innerHTML = html;
        document.querySelectorAll('.gallery-item').forEach((el, idx) => {
            el.addEventListener('click', () => openLightbox(idx));
        });
    }

    function openLightbox(idx) { currentIdx = idx; updateLightbox(); lightboxEl.classList.add('active'); document.body.style.overflow = 'hidden'; }
    function updateLightbox() { lbImage.src = images[currentIdx]; lbCounter.innerText = `${currentIdx+1} / ${images.length}`; }
    function nextImage() { currentIdx = (currentIdx+1)%images.length; updateLightbox(); }
    function prevImage() { currentIdx = (currentIdx-1+images.length)%images.length; updateLightbox(); }
    function closeLightbox() { lightboxEl.classList.remove('active'); document.body.style.overflow = ''; }

    document.getElementById('lbPrev').addEventListener('click', prevImage);
    document.getElementById('lbNext').addEventListener('click', nextImage);
    document.getElementById('lbClose').addEventListener('click', closeLightbox);
    lightboxEl.addEventListener('click', (e) => { if(e.target === lightboxEl) closeLightbox(); });
    window.addEventListener('keydown', (e) => {
        if(!lightboxEl.classList.contains('active')) return;
        if(e.key === 'ArrowRight') prevImage();
        else if(e.key === 'ArrowLeft') nextImage();
        else if(e.key === 'Escape') closeLightbox();
    });

    function escapeHtml(str) { return str.replace(/[&<>]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[m])); }

    function renderMessages() {
        const container = document.getElementById('messagesList');
        if (!messages.length) { container.innerHTML = '<div class="empty-messages" style="text-align:center; padding:30px;">لا توجد رسائل بعد</div>'; return; }
        const reversed = [...messages].reverse();
        container.innerHTML = reversed.map(msg => `
            <div class="message-card">
                <div class="message-header"><i class="fas fa-user-circle"></i><span class="message-name">${escapeHtml(msg.name || 'صديق')}</span><span class="message-date">${msg.date}</span></div>
                <div class="message-text">${escapeHtml(msg.text)}</div>
            </div>
        `).join('');
    }

    function saveAll() {
        localStorage.setItem('site_images', JSON.stringify(images));
        localStorage.setItem('site_messages', JSON.stringify(messages));
        localStorage.setItem('site_tribute', tributeText);
        renderGallery();
        renderMessages();
    }

    document.getElementById('sendMessageBtn').addEventListener('click', () => {
        const name = document.getElementById('senderName').value;
        const text = document.getElementById('messageContent').value;
        if (!text.trim()) { alert("الرجاء كتابة رسالة"); return; }
        const now = new Date();
        const formattedDate = `${now.toLocaleDateString('ar-EG')} - ${now.toLocaleTimeString('ar-EG', {hour:'2-digit', minute:'2-digit'})}`;
        messages.push({ name: name.trim() || "صديق", text: text.trim(), date: formattedDate, timestamp: Date.now() });
        saveAll();
        renderMessages();
        document.getElementById('messageContent').value = '';
        document.getElementById('senderName').value = '';
        alert("✅ تم إرسال رسالتك (ستظهر للزوار الآخرين على هذا الجهاز فقط)");
    });

    // ---- نظام الإدارة (نفس الكود السابق) ----
    let isAdmin = false;
    const loginModal = document.getElementById('loginModal'), adminModal = document.getElementById('adminModal'), adminStatusSpan = document.getElementById('adminStatus');
    function openLogin() { loginModal.classList.add('active'); }
    function closeLogin() { loginModal.classList.remove('active'); }
    function openAdminPanel() { adminModal.classList.add('active'); renderAdminImages(); renderAdminMessages(); document.getElementById('editTributeText').value = tributeText; }
    function closeAdminPanel() { adminModal.classList.remove('active'); }
    document.getElementById('openAdminBtn').addEventListener('click', openLogin);
    document.getElementById('closeLogin').addEventListener('click', closeLogin);
    document.getElementById('closeAdminBtn').addEventListener('click', closeAdminPanel);
    document.getElementById('loginSubmit').addEventListener('click', () => {
        if (document.getElementById('adminPass').value === "Milano@123") {
            isAdmin = true; localStorage.setItem('site_admin_logged','true'); adminStatusSpan.innerHTML = '🔓 وضع الإدارة نشط'; closeLogin(); openAdminPanel();
        } else alert("كلمة المرور غير صحيحة");
        document.getElementById('adminPass').value = '';
    });
    document.getElementById('logoutAdminBtn').addEventListener('click', () => {
        isAdmin = false; localStorage.removeItem('site_admin_logged'); adminStatusSpan.innerHTML = '🔒 وضع المستخدم'; closeAdminPanel();
    });
    if (localStorage.getItem('site_admin_logged') === 'true') { isAdmin = true; adminStatusSpan.innerHTML = '🔓 وضع الإدارة نشط'; }

    function renderAdminImages() {
        const div = document.getElementById('adminImagesList');
        if (!div) return;
        div.innerHTML = images.map((src, idx) => `<div class="img-admin-item"><img src="${src}"><button class="delete-btn" data-img-index="${idx}">حذف</button></div>`).join('');
        document.querySelectorAll('[data-img-index]').forEach(btn => {
            btn.addEventListener('click', e => {
                let i = parseInt(btn.getAttribute('data-img-index'));
                if (!isNaN(i)) { images.splice(i,1); saveAll(); renderAdminImages(); }
            });
        });
    }
    function renderAdminMessages() {
        const div = document.getElementById('adminMessagesList');
        if (!div) return;
        if (messages.length===0) { div.innerHTML = '<div>لا توجد رسائل</div>'; return; }
        div.innerHTML = messages.map((msg, idx) => `<div class="message-admin-item" style="background:#1e2a36; border-radius:20px; padding:12px; margin-bottom:10px;"><div><strong>${escapeHtml(msg.name)}</strong> - ${msg.date}<br>${escapeHtml(msg.text)}</div><button class="delete-btn" data-msg-index="${idx}">حذف</button></div>`).join('');
        document.querySelectorAll('[data-msg-index]').forEach(btn => {
            btn.addEventListener('click', e => {
                let i = parseInt(btn.getAttribute('data-msg-index'));
                if (!isNaN(i)) { messages.splice(i,1); saveAll(); renderAdminMessages(); renderMessages(); }
            });
        });
    }
    document.getElementById('addImageBtn')?.addEventListener('click', () => {
        let url = document.getElementById('newImageUrl').value.trim();
        if (url) { images.push(url); saveAll(); renderAdminImages(); document.getElementById('newImageUrl').value=''; alert("✅ تم إضافة الصورة وحفظها"); }
        else alert("أدخل رابط صورة");
    });
    document.getElementById('addBulkBtn')?.addEventListener('click', () => {
        let bulk = document.getElementById('bulkUrls').value;
        if (!bulk.trim()) { alert("الرجاء لصق الروابط"); return; }
        let urls = bulk.split(/\r?\n/).filter(l=>l.trim());
        let added=0;
        urls.forEach(u=>{ if(u.trim() && !images.includes(u.trim())) { images.push(u.trim()); added++; } });
        if(added>0) { saveAll(); renderAdminImages(); document.getElementById('bulkUrls').value=''; alert(`✅ تم إضافة ${added} صورة`); }
        else alert("لم يتم إضافة صور جديدة");
    });
    document.getElementById('saveTributeBtn')?.addEventListener('click', () => {
        let newText = document.getElementById('editTributeText').value;
        if(newText) { tributeText = newText; saveAll(); document.getElementById('tributeText').innerText = tributeText; alert("✅ تم حفظ النص"); }
    });
    document.getElementById('clearAllMessagesBtn')?.addEventListener('click', () => {
        if(confirm("هل أنت متأكد من حذف جميع الرسائل؟")) { messages = []; saveAll(); renderAdminMessages(); renderMessages(); alert("✅ تم حذف جميع الرسائل"); }
    });

    const splash = document.getElementById('splashScreen');
    setTimeout(() => { splash.classList.add('hide'); setTimeout(()=>splash.style.display='none', 800); }, 4000);
    splash.addEventListener('click', ()=>{ splash.classList.add('hide'); setTimeout(()=>splash.style.display='none', 800); });

    renderGallery();
    renderMessages();
</script>
</body>
</html>