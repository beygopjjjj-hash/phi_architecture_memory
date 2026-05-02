<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>د. أشرف عبد الجواد | ذاكرة العمارة - PHI Class of 2026</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        /* كامل الـ CSS سيبقى كما هو، مع إضافة القليل لأنماط الإدارة */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Cairo', sans-serif;
            transition: background-color 0.3s ease, color 0.2s ease;
            overflow-x: hidden;
            scroll-behavior: smooth;
        }

        /* متغيرات عالية التباين للوضع الداكن */
        :root {
            --bg-primary: #0a0f1a;
            --bg-secondary: #0f1a24;
            --text-primary: #f0f4fa;
            --text-secondary: #cfdfea;
            --text-dark: #eef4ff;
            --accent-gold: #e2bd6e;
            --accent-gold-dark: #c9a345;
            --card-bg: rgba(20, 30, 45, 0.75);
            --card-border: rgba(226, 189, 110, 0.3);
            --shadow-color: rgba(0,0,0,0.6);
            --footer-bg: #0b111c;
            --tribute-bg: rgba(226, 189, 110, 0.12);
            --input-bg: rgba(255,255,255,0.1);
            --message-bg: rgba(20,30,45,0.5);
        }

        /* الوضع الفاتح - تباين عالٍ */
        @media (prefers-color-scheme: light) {
            :root {
                --bg-primary: #ffffff;
                --bg-secondary: #f8f5f0;
                --text-primary: #1a2c38;
                --text-secondary: #2c4a5e;
                --text-dark: #111;
                --accent-gold: #b87c2e;
                --accent-gold-dark: #9b641f;
                --card-bg: rgba(255, 255, 250, 0.95);
                --card-border: rgba(184, 124, 46, 0.25);
                --shadow-color: rgba(0,0,0,0.08);
                --footer-bg: #f0ebe2;
                --tribute-bg: rgba(184, 124, 46, 0.08);
                --input-bg: rgba(0,0,0,0.04);
                --message-bg: #fefaf5;
            }
            body {
                background-color: var(--bg-primary);
                color: var(--text-primary);
            }
            .bg-aura {
                background: radial-gradient(circle at 20% 30%, rgba(220, 195, 140, 0.15), #fff6ed);
            }
            .bg-aura::after {
                background: repeating-linear-gradient(45deg, rgba(184,124,46,0.04) 0px, rgba(184,124,46,0.04) 1px, transparent 1px, transparent 12px);
            }
            .splash {
                background: #fffaf5;
            }
            .info-pills span, .faculty-gold {
                background: #fef7e8;
                color: #5a3e1f;
                border-color: rgba(184,124,46,0.4);
            }
            .gallery-item {
                background: #ffffff;
                backdrop-filter: none;
                box-shadow: 0 8px 20px rgba(0,0,0,0.05);
            }
            footer, .messages-section {
                background: #fefaf2;
                border-top-color: #e2d5c0;
            }
            .quote, .hero .tribute p {
                color: #2b4b60;
            }
            .lb-btn, .lb-close {
                background: #ffffffcc;
                color: #7a5a2e;
                backdrop-filter: blur(4px);
            }
            .hero h1 {
                color: #1a2c38;
            }
            .hero .sub {
                color: #b87c2e;
            }
            .splash-title {
                color: #1a2c38;
            }
            .splash-title span {
                color: #b87c2e;
            }
            .message-card {
                background: #ffffff;
                border: 1px solid #eee5d8;
            }
        }

        .bg-aura {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
            transition: background 0.3s;
        }
        .bg-aura::after {
            content: '';
            position: absolute;
            width: 150%;
            height: 150%;
            top: -25%;
            left: -25%;
            pointer-events: none;
            animation: slowDrift 40s linear infinite;
        }

        @keyframes slowDrift {
            0% { transform: translate(0, 0); }
            100% { transform: translate(60px, 60px); }
        }

        /* Splash Screen */
        .splash {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 20000;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            transition: opacity 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1), visibility 0.8s;
        }
        .splash.hide {
            opacity: 0;
            visibility: hidden;
        }
        .splash-content {
            text-align: center;
            animation: goldGlow 1s ease;
            max-width: 85%;
        }
        @keyframes goldGlow {
            0% { opacity: 0; transform: scale(0.92); filter: blur(8px); }
            100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }
        .splash-content img {
            max-width: 100%;
            max-height: 65vh;
            border-radius: 48px;
            box-shadow: 0 25px 45px var(--shadow-color);
            border: 1px solid var(--accent-gold);
        }
        .splash-title {
            font-size: 2rem;
            font-weight: 700;
            color: var(--text-primary);
            margin-top: 25px;
        }
        .splash-title span {
            display: block;
            font-size: 1.2rem;
            font-weight: normal;
            color: var(--accent-gold);
            margin-top: 8px;
        }

        /* Header */
        .hero {
            text-align: center;
            padding: 100px 20px 70px;
            position: relative;
            z-index: 2;
        }
        .hero h1 {
            font-size: 2.8rem;
            font-weight: 700;
            color: var(--text-primary);
            letter-spacing: -0.5px;
            line-height: 1.3;
        }
        .hero .sub {
            font-size: 1.2rem;
            font-weight: 500;
            color: var(--accent-gold);
            margin-top: 15px;
        }
        .hero .tribute {
            max-width: 750px;
            margin: 25px auto 0;
            padding: 24px 28px;
            background: var(--tribute-bg);
            border-radius: 32px;
            backdrop-filter: blur(4px);
            border-right: 4px solid var(--accent-gold);
            text-align: right;
        }
        .hero .tribute p {
            font-size: 1rem;
            line-height: 1.8;
            color: var(--text-secondary);
            font-weight: 500;
        }
        .hero .tribute .small-line {
            font-size: 0.9rem;
            color: var(--accent-gold);
            margin-top: 12px;
            font-weight: 600;
        }

        .info-pills {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 40px;
            flex-wrap: wrap;
        }
        .info-pills span {
            backdrop-filter: blur(12px);
            padding: 8px 28px;
            border-radius: 60px;
            font-weight: 600;
            font-size: 0.85rem;
            border: 1px solid var(--card-border);
            transition: 0.2s;
        }
        .gold-divider {
            width: 100px;
            height: 3px;
            background: linear-gradient(90deg, var(--accent-gold), var(--accent-gold-dark));
            margin: 40px auto 0;
            border-radius: 3px;
        }

        /* Gallery Header */
        .gallery-header {
            text-align: center;
            margin: 30px 0 50px;
        }
        .gallery-header h2 {
            font-size: 2.3rem;
            font-weight: 600;
            color: var(--text-primary);
        }
        .gallery-header p {
            color: var(--text-secondary);
            margin-top: 12px;
            font-weight: 500;
        }
        .gallery-header:after {
            content: '';
            display: block;
            width: 70px;
            height: 2px;
            background: var(--accent-gold);
            margin: 18px auto 0;
        }

        /* Gallery Grid */
        .gallery {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px 80px;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 28px;
        }
        .gallery-item {
            position: relative;
            border-radius: 32px;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1);
            background: var(--card-bg);
            backdrop-filter: blur(4px);
            border: 1px solid var(--card-border);
            transform: translateY(0);
            opacity: 0;
            animation: cardRise 0.7s forwards;
            animation-delay: calc(var(--i) * 0.02s);
        }
        @keyframes cardRise {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .gallery-item:hover {
            transform: translateY(-12px);
            border-color: var(--accent-gold);
            box-shadow: 0 30px 50px -15px var(--shadow-color);
        }
        .gallery-item img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            display: block;
            transition: transform 0.7s ease, filter 0.4s;
        }
        .gallery-item:hover img {
            transform: scale(1.04);
            filter: brightness(1.02);
        }
        .glass-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 30%;
            background: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
            opacity: 0;
            transition: 0.3s;
        }
        .gallery-item:hover .glass-overlay {
            opacity: 1;
        }

        /* قسم الرسائل */
        .messages-section {
            max-width: 900px;
            margin: 20px auto 60px;
            padding: 30px 25px;
            background: var(--footer-bg);
            border-radius: 48px;
            box-shadow: 0 15px 35px var(--shadow-color);
            border: 1px solid var(--card-border);
        }
        .messages-title {
            text-align: center;
            margin-bottom: 30px;
        }
        .messages-title h3 {
            font-size: 1.8rem;
            color: var(--accent-gold);
            display: inline-flex;
            align-items: center;
            gap: 12px;
        }
        .message-input-area {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 40px;
        }
        .message-input-area input, .message-input-area textarea {
            background: var(--input-bg);
            border: 1px solid var(--card-border);
            border-radius: 28px;
            padding: 14px 22px;
            font-family: 'Cairo', sans-serif;
            font-size: 1rem;
            color: var(--text-primary);
            resize: vertical;
            transition: 0.2s;
        }
        .message-input-area input:focus, .message-input-area textarea:focus {
            outline: none;
            border-color: var(--accent-gold);
            box-shadow: 0 0 0 2px rgba(226,189,110,0.3);
        }
        .message-input-area input::placeholder, .message-input-area textarea::placeholder {
            color: var(--text-secondary);
            opacity: 0.6;
        }
        .send-btn {
            background: var(--accent-gold);
            border: none;
            border-radius: 60px;
            padding: 12px 24px;
            font-size: 1rem;
            font-weight: 700;
            color: #1a2c38;
            cursor: pointer;
            transition: 0.2s;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 180px;
            margin: 0 auto;
        }
        .send-btn:hover {
            background: var(--accent-gold-dark);
            transform: scale(1.02);
        }
        .messages-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
            max-height: 500px;
            overflow-y: auto;
            padding: 5px;
        }
        .message-card {
            background: var(--message-bg);
            border-radius: 28px;
            padding: 18px 22px;
            border-right: 4px solid var(--accent-gold);
            transition: 0.2s;
        }
        .message-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
        }
        .message-header i {
            font-size: 1.8rem;
            color: var(--accent-gold);
        }
        .message-name {
            font-weight: 700;
            font-size: 1.1rem;
            color: var(--accent-gold);
        }
        .message-date {
            font-size: 0.7rem;
            color: var(--text-secondary);
            margin-right: auto;
        }
        .message-text {
            line-height: 1.6;
            font-size: 0.95rem;
            color: var(--text-primary);
            word-break: break-word;
        }
        .empty-messages {
            text-align: center;
            padding: 40px;
            color: var(--text-secondary);
            font-style: italic;
        }
        @media (max-width: 750px) {
            .hero h1 { font-size: 2rem; }
            .gallery { gap: 18px; grid-template-columns: repeat(auto-fill, minmax(260px,1fr)); }
            .gallery-item img { height: 240px; }
            .messages-section { margin: 20px 15px 50px; padding: 20px; }
        }

        /* Lightbox */
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(5, 8, 15, 0.98);
            backdrop-filter: blur(25px);
            z-index: 30000;
            display: flex;
            justify-content: center;
            align-items: center;
            visibility: hidden;
            opacity: 0;
            transition: visibility 0.2s, opacity 0.4s ease;
        }
        .lightbox.active {
            visibility: visible;
            opacity: 1;
        }
        .lb-inner {
            position: relative;
            width: 90%;
            height: 90%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .lb-img {
            max-width: 90vw;
            max-height: 85vh;
            object-fit: contain;
            border-radius: 28px;
            box-shadow: 0 25px 45px rgba(0,0,0,0.6);
            transition: opacity 0.2s, transform 0.3s;
            transform: scale(0.96);
            border: 1px solid var(--accent-gold);
        }
        .lightbox.active .lb-img {
            transform: scale(1);
        }
        .lb-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            backdrop-filter: blur(12px);
            width: 56px;
            height: 56px;
            border-radius: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            cursor: pointer;
            transition: 0.2s;
            border: 1px solid var(--accent-gold);
            background: var(--card-bg);
            color: var(--accent-gold);
        }
        .lb-btn:hover {
            background: var(--accent-gold);
            color: #0a0f1a;
            transform: translateY(-50%) scale(1.08);
        }
        .lb-prev { left: 25px; }
        .lb-next { right: 25px; }
        .lb-close {
            position: absolute;
            top: 30px;
            right: 40px;
            backdrop-filter: blur(8px);
            width: 48px;
            height: 48px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 1.8rem;
            transition: 0.2s;
            border: 1px solid var(--accent-gold);
            background: var(--card-bg);
            color: var(--accent-gold);
        }
        .lb-close:hover {
            background: var(--accent-gold);
            color: #0a0f1a;
        }
        .lb-counter {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.7);
            backdrop-filter: blur(8px);
            padding: 8px 24px;
            border-radius: 60px;
            color: #f5e6c4;
            font-weight: 600;
            font-size: 0.9rem;
        }

        /* بداية أنماط لوحة الإدارة */
        .admin-bar {
            display: flex;
            justify-content: flex-end;
            padding: 15px 25px;
            gap: 15px;
            align-items: center;
            position: relative;
            z-index: 100;
        }
        .admin-btn {
            background: var(--accent-gold);
            border: none;
            padding: 8px 20px;
            border-radius: 40px;
            font-weight: bold;
            cursor: pointer;
            color: #1a2c38;
            transition: 0.2s;
        }
        .admin-btn:hover {
            background: var(--accent-gold-dark);
            transform: scale(1.02);
        }
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            backdrop-filter: blur(12px);
            z-index: 40000;
            display: flex;
            justify-content: center;
            align-items: center;
            visibility: hidden;
            opacity: 0;
            transition: 0.2s;
        }
        .modal.active {
            visibility: visible;
            opacity: 1;
        }
        .modal-box {
            background: var(--bg-secondary);
            border-radius: 40px;
            padding: 30px;
            width: 90%;
            max-width: 500px;
            text-align: center;
            border: 1px solid var(--accent-gold);
            color: var(--text-primary);
        }
        .admin-panel {
            max-width: 900px;
            width: 95%;
            max-height: 85vh;
            overflow-y: auto;
        }
        .image-grid-admin {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(100px,1fr));
            gap: 12px;
            margin: 20px 0;
        }
        .img-admin-item {
            background: var(--card-bg);
            border-radius: 16px;
            padding: 8px;
        }
        .img-admin-item img {
            width: 100%;
            height: 80px;
            object-fit: cover;
            border-radius: 12px;
        }
        .delete-btn {
            background: #a03c2c;
            border: none;
            color: white;
            border-radius: 20px;
            padding: 4px 8px;
            font-size: 0.7rem;
            margin-top: 6px;
            cursor: pointer;
        }
        .message-admin-item {
            background: var(--card-bg);
            border-radius: 24px;
            padding: 12px;
            margin-bottom: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }
        /* نهاية أنماط الإدارة */

        /* Footer */
        footer {
            padding: 60px 20px 50px;
            text-align: center;
            border-top: 1px solid var(--card-border);
            background: var(--footer-bg);
            transition: background 0.3s;
        }
        .quote {
            max-width: 750px;
            margin: 0 auto;
            font-size: 1rem;
            line-height: 1.9;
            color: var(--text-secondary);
            font-weight: 500;
        }
        .faculty-gold {
            display: inline-block;
            padding: 10px 32px;
            border-radius: 60px;
            margin-top: 25px;
            font-weight: 600;
            border: 1px solid var(--accent-gold);
            background: var(--card-bg);
            color: var(--accent-gold);
        }
        small {
            display: block;
            margin-top: 35px;
            opacity: 0.7;
            font-size: 0.7rem;
            color: var(--text-secondary);
        }
    </style>
</head>
<body>
<div class="bg-aura"></div>

<!-- شريط الإدارة (يظهر دائماً) -->
<div class="admin-bar">
    <button id="openAdminBtn" class="admin-btn"><i class="fas fa-lock"></i> دخول الإدارة</button>
    <span id="adminStatus">🔒 وضع المستخدم</span>
</div>

<!-- مودال تسجيل الدخول -->
<div id="loginModal" class="modal">
    <div class="modal-box">
        <h3><i class="fas fa-crown"></i> تسجيل دخول المدير</h3>
        <input type="password" id="adminPass" placeholder="كلمة المرور" style="margin: 20px 0; width: 100%; padding: 12px; border-radius: 60px; border: none;">
        <button id="loginSubmit" class="admin-btn">دخول</button>
        <button id="closeLogin" style="background: none; border: none; color: var(--text-secondary); margin-top: 15px;">إغلاق</button>
    </div>
</div>

<!-- مودال لوحة الإدارة المعدلة -->
<div id="adminModal" class="modal">
    <div class="modal-box admin-panel">
        <h2><i class="fas fa-sliders-h"></i> لوحة الإدارة</h2>
        
        <!-- إضافة روابط متعددة دفعة واحدة -->
        <div style="margin: 20px 0;">
            <h4>📎 إضافة روابط متعددة دفعة واحدة</h4>
            <textarea id="bulkUrls" rows="5" placeholder="ضع كل رابط في سطر منفصل&#10;https://example.com/image1.jpg&#10;https://example.com/image2.png" style="width:100%; padding:12px; border-radius:24px; background:var(--input-bg); border:1px solid var(--card-border); color:var(--text-primary); direction:ltr; font-family:monospace;"></textarea>
            <button id="addBulkBtn" class="admin-btn" style="margin-top:8px;"><i class="fas fa-layer-group"></i> ➕ إضافة الكل وحفظ</button>
        </div>
        
        <div style="margin: 20px 0;">
            <h4>➕ إضافة صورة جديدة (فردي)</h4>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <input type="text" id="newImageUrl" placeholder="رابط الصورة (Direct URL)" style="flex:1; padding: 10px; border-radius: 60px;">
                <button id="addImageBtn" class="admin-btn">إضافة وحفظ</button>
            </div>
            <div id="adminImagesList" class="image-grid-admin"></div>
        </div>
        
        <div style="margin: 20px 0;">
            <h4>📝 تعديل النص التذكاري</h4>
            <textarea id="editTributeText" rows="5" style="width:100%; padding: 12px; border-radius: 24px;"></textarea>
            <button id="saveTributeBtn" class="admin-btn" style="margin-top: 10px;">حفظ النص</button>
        </div>
        
        <div style="margin: 20px 0;">
            <h4>💬 إدارة الرسائل</h4>
            <div id="adminMessagesList"></div>
            <button id="clearAllMessagesBtn" class="admin-btn" style="background:#a03c2c; margin-top: 15px;">حذف كل الرسائل</button>
        </div>
        
        <!-- زر حفظ جميع التغييرات -->
        <div style="margin: 20px 0;">
            <button id="saveAllChangesBtn" class="admin-btn" style="background: #2c6e4e;"><i class="fas fa-save"></i> 💾 حفظ جميع التغييرات</button>
        </div>
        
        <button id="logoutAdminBtn" class="admin-btn" style="background:#5a6e7c;">تسجيل الخروج</button>
        <button id="closeAdminBtn" style="margin-top: 15px; background: none; border:1px solid var(--accent-gold); padding: 6px 20px; border-radius: 30px;">إغلاق</button>
    </div>
</div>

<!-- بقية محتوى الموقع الأصلي -->
<!-- Splash Screen -->
<div id="splashScreen" class="splash">
    <div class="splash-content">
        <img src="https://i.postimg.cc/fLxG4FV1/sh.jpg" alt="دكتور أشرف عبد الجواد">
        <div class="splash-title">
            د. أشرف عبد الجواد
            <span>في ذمة الله</span>
        </div>
    </div>
</div>

<main>
    <div class="hero">
        <h1>ستظل ذكراك في قلوبنا</h1>
        <div class="sub">رحمك الله يا دكتور أشرف</div>
        
        <div class="tribute" id="tributeBox">
            <p id="tributeText">
                وداعاً يا من كنت نوراً يضيء درب طلاب العمارة، كنت معلماً حكيماً وأباً روحياً للجميع. 
                علمتنا أن العمارة ليست مجرد حجر ومادة، بل هي رسالة وحياة وروح. 
                سيبقى أثرك خالداً في كل زاوية صممتها وفي كل عقل أنارته حكمتك. 
                رحم الله الأستاذ الدكتور أشرف عبد الجواد، المدرس الجليل بقسم الهندسة المعمارية، 
                الذي انتقل إلى رحاب الله صباح 26 ديسمبر 2025، إنا لله وإنا إليه راجعون.
            </p>
            <div class="small-line">اللهم اجعل قبره روضة من رياض الجنة</div>
        </div>

        <div class="info-pills">
            <span><i class="fas fa-drafting-compass"></i> روح معمارية</span>
            <span><i class="fas fa-landmark"></i> هوية خالدة</span>
            <span><i class="fas fa-images"></i> 240+ ذكرى</span>
        </div>
        <div class="gold-divider"></div>
        <p style="margin-top: 35px; color: var(--text-secondary); font-weight: 500;">انقر على الصورة لاستعادة الذكرى بملء الشاشة</p>
    </div>

    <div class="gallery-header">
        <h2><i class="fas fa-camera-retro"></i> رحلة الذكريات</h2>
        <p>لحظات جمعتنا معاً، نستعيدها بحب</p>
    </div>

    <div class="gallery" id="galleryContainer"></div>

    <!-- قسم الرسائل -->
    <div class="messages-section">
        <div class="messages-title">
            <h3><i class="fas fa-envelope-open-text"></i> رسائل الذكرى</h3>
            <p style="color: var(--text-secondary); margin-top: 8px;">اكتب رسالة لزملائك وستظهر هنا للجميع</p>
        </div>
        <div class="message-input-area">
            <input type="text" id="senderName" placeholder="اسمك (اختياري)" maxlength="50">
            <textarea id="messageContent" rows="3" placeholder="اكتب رسالتك هنا... بكلمات من القلب" maxlength="500"></textarea>
            <button class="send-btn" id="sendMessageBtn"><i class="fas fa-paper-plane"></i> أرسل رسالة</button>
        </div>
        <div class="messages-list" id="messagesList">
            <div class="empty-messages">لا توجد رسائل بعد، كن أول من يكتب رسالة تذكارية</div>
        </div>
    </div>
</main>

<footer>
    <div class="quote">
        <i class="fas fa-heart" style="color: var(--accent-gold);"></i>  
        دكتور أشرف، لقد تركت فراغاً كبيراً في قلوبنا، لكن ذكراك ستبقى نابضة في كل تفصيلة من تفاصيل هذه الكلية، وفي كل عمارة تحمل بصمتك. شكراً لكل لحظة علمتنا فيها معنى العطاء والإخلاص.
    </div>
    <div class="faculty-gold">
        <i class="fas fa-chalkboard-user"></i> كل التقدير لأساتذتنا ومعيدينا المخلصين
    </div>
    <small>دفعة 2026 - معهد الأهرامات العالي للهندسة والتكنولوجيا | PHI</small>
</footer>

<div class="lightbox" id="lightbox">
    <div class="lb-inner">
        <button class="lb-close" id="lbClose"><i class="fas fa-times"></i></button>
        <button class="lb-btn lb-prev" id="lbPrev"><i class="fas fa-chevron-right"></i></button>
        <img class="lb-img" id="lbImage" src="" alt="Memory">
        <button class="lb-btn lb-next" id="lbNext"><i class="fas fa-chevron-left"></i></button>
        <div class="lb-counter" id="lbCounter"></div>
    </div>
</div>

<script>
    // ------------------------------------------------
    // 1. جميع الصور (كما هي من قبل - تم الحفاظ عليها)
    // ------------------------------------------------
    const allImages = [
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
        "https://i.postimg.cc/Y0wJpmhS/Whats-App-Image-2026-04-29-at-14-59-32.jpg",
        "https://i.postimg.cc/brjKz2sP/Whats-App-Image-2026-04-29-at-14-59-32-(1).jpg",
        "https://i.postimg.cc/RhzjMnNZ/Whats-App-Image-2026-04-29-at-14-59-34.jpg",
        "https://i.postimg.cc/3NCzWJvQ/Whats-App-Image-2026-04-29-at-15-35-49.jpg",
        "https://i.postimg.cc/GtJ69hyp/Whats-App-Image-2026-04-29-at-15-48-17.jpg",
        "https://i.postimg.cc/hvqHS7fP/Whats-App-Image-2026-04-29-at-15-48-17-(1).jpg",
        "https://i.postimg.cc/LX2gddTx/Whats-App-Image-2026-04-26-at-00-09-09.jpg",
        "https://i.postimg.cc/V6m0yyRg/Whats-App-Image-2026-04-26-at-00-09-09-(1).jpg",
        "https://i.postimg.cc/0QPKggfZ/Whats-App-Image-2026-04-26-at-00-09-09-(2).jpg",
        "https://i.postimg.cc/FRNkttZ8/Whats-App-Image-2026-04-26-at-00-09-10.jpg",
        "https://i.postimg.cc/bJpSXXT6/Whats-App-Image-2026-04-26-at-00-09-10-(1).jpg",
        "https://i.postimg.cc/85Nf88HK/Whats-App-Image-2026-04-26-at-00-09-10-(2).jpg",
        "https://i.postimg.cc/XJ4BMM8T/Whats-App-Image-2026-04-26-at-00-09-11.jpg",
        "https://i.postimg.cc/Hxd8GG2v/Whats-App-Image-2026-04-26-at-00-09-11-(1).jpg",
        "https://i.postimg.cc/sXsGFFc0/Whats-App-Image-2026-04-26-at-00-09-11-(2).jpg",
        "https://i.postimg.cc/B64PWWgy/Whats-App-Image-2026-04-26-at-00-09-11-(3).jpg",
        "https://i.postimg.cc/rmMR66J7/Whats-App-Image-2026-04-26-at-00-09-11-(4).jpg",
        "https://i.postimg.cc/Jht8wtJV/Whats-App-Image-2026-04-25-at-15-10-06.jpg",
        "https://i.postimg.cc/Jht8wtJw/Whats-App-Image-2026-04-25-at-15-10-06-(2).jpg",
        "https://i.postimg.cc/KYV2mF7C/Whats-App-Image-2026-04-25-at-15-10-07.jpg",
        "https://i.postimg.cc/R08Bv91p/Whats-App-Image-2026-04-25-at-15-10-07-(2).jpg",
        "https://i.postimg.cc/DzmhVmsT/Whats-App-Image-2026-04-25-at-15-10-07-(3).jpg",
        "https://i.postimg.cc/5tGVf15R/Whats-App-Image-2026-04-25-at-15-10-07-(5).jpg",
        "https://i.postimg.cc/9fShcVtW/Whats-App-Image-2026-04-25-at-15-10-08.jpg",
        "https://i.postimg.cc/fbFNMZjn/Whats-App-Image-2026-04-25-at-15-10-08-(3).jpg",
        "https://i.postimg.cc/N0VcQY7v/Whats-App-Image-2026-04-25-at-15-10-08-(4).jpg",
        "https://i.postimg.cc/jj9bRKQr/Whats-App-Image-2026-04-25-at-15-10-08-(5).jpg",
        "https://i.postimg.cc/yN5H7BXK/Whats-App-Image-2026-04-25-at-15-10-08-(6).jpg",
        "https://i.postimg.cc/JhgLRmcm/Whats-App-Image-2026-04-25-at-15-10-08-(8).jpg",
        "https://i.postimg.cc/xd729Yy8/Whats-App-Image-2026-04-25-at-15-10-09.jpg",
        "https://i.postimg.cc/g05WGdqc/Whats-App-Image-2026-04-25-at-15-10-09-(1).jpg",
        "https://i.postimg.cc/Bvy0Jscn/Whats-App-Image-2026-04-25-at-15-10-09-(2).jpg",
        "https://i.postimg.cc/YSVHtkf9/Whats-App-Image-2026-04-25-at-15-10-09-(3).jpg",
        "https://i.postimg.cc/jjVJXnJK/Whats-App-Image-2026-04-25-at-18-58-44.jpg",
        "https://i.postimg.cc/DzVbg44H/Whats-App-Image-2026-04-25-at-18-58-44-(1).jpg",
        "https://i.postimg.cc/W4RJnqJL/Whats-App-Image-2026-04-25-at-18-58-44-(2).jpg",
        "https://i.postimg.cc/KYXgN3gy/Whats-App-Image-2026-04-25-at-18-58-44-(3).jpg",
        "https://i.postimg.cc/5twQk9wb/Whats-App-Image-2026-04-25-at-18-58-45.jpg",
        "https://i.postimg.cc/SK0zrYzm/Whats-App-Image-2026-04-25-at-18-58-45-(1).jpg",
        "https://i.postimg.cc/k5rtcRtX/Whats-App-Image-2026-04-25-at-18-58-45-(2).jpg",
        "https://i.postimg.cc/7LvTVJTL/Whats-App-Image-2026-04-25-at-18-58-45-(3).jpg",
        "https://i.postimg.cc/6Qd416dp/Whats-App-Image-2026-04-25-at-18-58-50.jpg",
        "https://i.postimg.cc/1zpVYRp9/Whats-App-Image-2026-04-25-at-18-58-50-(1).jpg",
        "https://i.postimg.cc/xdKNFjKX/Whats-App-Image-2026-04-25-at-18-59-37.jpg",
        "https://i.postimg.cc/bvQSFYQr/Whats-App-Image-2026-04-25-at-18-59-37-(1).jpg",
        "https://i.postimg.cc/3wg0brgW/Whats-App-Image-2026-04-25-at-18-59-37-(2).jpg",
        "https://i.postimg.cc/KYn3scnM/Whats-App-Image-2026-04-25-at-18-59-38.jpg",
        "https://i.postimg.cc/KYn3scnk/Whats-App-Image-2026-04-25-at-18-59-38-(1).jpg",
        "https://i.postimg.cc/DZn4VVgb/Whats-App-Image-2026-04-25-at-19-01-03-(9).jpg",
        "https://i.postimg.cc/vBbxRRzt/Whats-App-Image-2026-04-25-at-19-06-43.jpg",
        "https://i.postimg.cc/RF4JrrRc/Whats-App-Image-2026-04-25-at-19-06-43-(1).jpg",
        "https://i.postimg.cc/ZR4vkkc8/Whats-App-Image-2026-04-25-at-19-06-43-(2).jpg",
        "https://i.postimg.cc/63t4ss0V/Whats-App-Image-2026-04-25-at-19-06-43-(3).jpg",
        "https://i.postimg.cc/0QPKggff/Whats-App-Image-2026-04-25-at-19-06-44.jpg",
        "https://i.postimg.cc/0QPKggfC/Whats-App-Image-2026-04-25-at-19-06-44-(1).jpg",
        "https://i.postimg.cc/8PB3DLNy/6bbde1b9-d8f7-4d53-9829-509c78dd3608.jpg",
        "https://i.postimg.cc/RVQ89wvr/ARAT2083.jpg",
        "https://i.postimg.cc/GmLfp9m5/AWXD1040.jpg",
        "https://i.postimg.cc/FHr6K1HW/bbdb4381-fd4f-4f31-945c-4171bc0e1995.jpg",
        "https://i.postimg.cc/fRzPbkRq/CAMJ0168.jpg",
        "https://i.postimg.cc/BnSzvtnk/CUCD4601.jpg",
        "https://i.postimg.cc/1tqCdqv3/IMG-0045.avif",
        "https://i.postimg.cc/FF0Cg0f8/IMG-0903.avif",
        "https://i.postimg.cc/ZnPfbhtZ/IMG-1009.avif",
        "https://i.postimg.cc/CMbrHbZQ/IMG-1013.avif",
        "https://i.postimg.cc/L6RCyhLZ/IMG-1034-Copy.avif",
        "https://i.postimg.cc/137v5HTW/IMG-1074.avif",
        "https://i.postimg.cc/LsqNqPKC/IMG-1136.avif",
        "https://i.postimg.cc/JhyPyXV2/IMG-2012.avif",
        "https://i.postimg.cc/sX7mmRXd/IMG-2022.avif",
        "https://i.postimg.cc/hvnr33zG/IMG-2467.avif",
        "https://i.postimg.cc/RhTRrQKw/IMG-2702.avif",
        "https://i.postimg.cc/ZnLckFpp/IMG-3164.avif",
        "https://i.postimg.cc/8PtHt41P/IMG-3185-Copy.avif",
        "https://i.postimg.cc/WbXnX82c/IMG-3188.avif",
        "https://i.postimg.cc/BnbCyF6G/IMG-3215-Copy.avif",
        "https://i.postimg.cc/GmtjND2L/IMG-3218-Copy.avif",
        "https://i.postimg.cc/pLSBtdhz/IMG-3258.avif",
        "https://i.postimg.cc/L8WVMsYG/IMG-3264.avif",
        "https://i.postimg.cc/TPWJ2XgH/IMG-3558.avif",
        "https://i.postimg.cc/rmXCKY9d/IMG-4432.avif",
        "https://i.postimg.cc/TwVjmqkV/IMG-4433.avif",
        "https://i.postimg.cc/rm1GWChf/IMG-4655.avif",
        "https://i.postimg.cc/mDY3MNdv/IMG-4757.avif",
        "https://i.postimg.cc/4d6vtbLZ/IMG-4871.avif",
        "https://i.postimg.cc/PJdWMp9X/IMG-4920.avif",
        "https://i.postimg.cc/Vv4jZsPJ/IMG-4945.avif",
        "https://i.postimg.cc/XNgcYLBC/IMG-4991.avif",
        "https://i.postimg.cc/NFb1CGvN/IMG-5793.avif",
        "https://i.postimg.cc/d3J29kpD/IMG-6479.jpg",
        "https://i.postimg.cc/3N9gfrQd/IMG-6495.jpg",
        "https://i.postimg.cc/XNgcYLBZ/IMG-6856.avif",
        "https://i.postimg.cc/8cwhXkgH/IMG-6993.jpg",
        "https://i.postimg.cc/wMFh4xYb/IMG-7110.jpg",
        "https://i.postimg.cc/9F8dGfph/IMG-7208.avif",
        "https://i.postimg.cc/wj1hFdfL/IMG-7244-Copy.avif",
        "https://i.postimg.cc/qMbs87Lv/IMG-7291.jpg",
        "https://i.postimg.cc/qvW25ZSZ/IMG-7771-Copy.avif",
        "https://i.postimg.cc/mgK756JJ/IMG-7871.avif",
        "https://i.postimg.cc/N0TRqkwv/IMG-7964.avif",
        "https://i.postimg.cc/XJbdVBVc/IMG-8112.avif",
        "https://i.postimg.cc/vBt9D8Bz/IMG-9001.avif",
        "https://i.postimg.cc/L54PPdgF/IMG-9085.avif",
        "https://i.postimg.cc/prVjjN5d/IMG-9092.avif",
        "https://i.postimg.cc/cC133qtn/IMG-9122.avif",
        "https://i.postimg.cc/RCGKB02P/IMG-9129.avif",
        "https://i.postimg.cc/PrxZrjkK/IMG-9210.avif",
        "https://i.postimg.cc/pXT8XHts/IMG-9468.avif",
        "https://i.postimg.cc/9FMTFhjN/IMG-9806.avif",
        "https://i.postimg.cc/Qxy7Fy8N/IMG-9807.avif",
        "https://i.postimg.cc/yYbRDb19/IMG-E2467.avif",
        "https://i.postimg.cc/sgGh74x1/IMG-E3185-Copy.avif",
        "https://i.postimg.cc/mg1HCykk/IMG-E4379.avif",
        "https://i.postimg.cc/Gp0sQTT5/IMG-E4433.avif",
        "https://i.postimg.cc/T35DgJ14/IMG-E7244.avif",
        "https://i.postimg.cc/T35DgJ1C/IMG-E9210.avif",
        "https://i.postimg.cc/Dzq4Yfqc/IMG-E9474.avif",
        "https://i.postimg.cc/fLDS44KX/IMG-E9514.avif",
        "https://i.postimg.cc/L8g1L35w/JZPU2818.jpg",
        "https://i.postimg.cc/R0rnRJJP/MGNP0942.jpg",
        "https://i.postimg.cc/nL8Qk99w/MPGY7367.jpg"
    ];

    let images = [...allImages];
    let messages = JSON.parse(localStorage.getItem('arch_messages')) || [];
    let tributeText = document.getElementById('tributeText').innerText;

    const galleryContainer = document.getElementById('galleryContainer');
    const lightboxEl = document.getElementById('lightbox');
    const lbImage = document.getElementById('lbImage');
    const lbCounter = document.getElementById('lbCounter');
    let currentIdx = 0;

    function buildGallery() {
        let html = '';
        images.forEach((src, i) => {
            html += `<div class="gallery-item" style="--i: ${i}"><img src="${src}" loading="lazy" alt="Memory"><div class="glass-overlay"></div></div>`;
        });
        galleryContainer.innerHTML = html;
        document.querySelectorAll('.gallery-item').forEach((el, idx) => {
            el.addEventListener('click', () => openLightbox(idx));
        });
    }

    function openLightbox(idx) {
        currentIdx = idx;
        updateLightbox();
        lightboxEl.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function updateLightbox() {
        lbImage.src = images[currentIdx];
        lbCounter.innerText = `${currentIdx+1} / ${images.length}`;
    }

    function nextImage() {
        currentIdx = (currentIdx + 1) % images.length;
        updateLightbox();
    }

    function prevImage() {
        currentIdx = (currentIdx - 1 + images.length) % images.length;
        updateLightbox();
    }

    function closeLightbox() {
        lightboxEl.classList.remove('active');
        document.body.style.overflow = '';
    }

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

    const splash = document.getElementById('splashScreen');
    const hideSplash = () => {
        splash.classList.add('hide');
        setTimeout(() => { splash.style.display = 'none'; }, 1000);
    };
    setTimeout(hideSplash, 4000);
    splash.addEventListener('click', hideSplash);

    buildGallery();

    // --------------------- نظام الرسائل العام ---------------------
    function renderMessages() {
        const container = document.getElementById('messagesList');
        if (!messages.length) {
            container.innerHTML = '<div class="empty-messages">لا توجد رسائل بعد، كن أول من يكتب رسالة تذكارية</div>';
            return;
        }
        const reversed = [...messages].reverse();
        container.innerHTML = reversed.map(msg => `
            <div class="message-card">
                <div class="message-header">
                    <i class="fas fa-user-circle"></i>
                    <span class="message-name">${escapeHtml(msg.name || 'صديق')}</span>
                    <span class="message-date">${msg.date}</span>
                </div>
                <div class="message-text">${escapeHtml(msg.text)}</div>
            </div>
        `).join('');
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }

    function addMessage(name, text) {
        if (!text.trim()) {
            alert("الرجاء كتابة رسالة");
            return false;
        }
        const now = new Date();
        const formattedDate = `${now.toLocaleDateString('ar-EG')} - ${now.toLocaleTimeString('ar-EG', {hour:'2-digit', minute:'2-digit'})}`;
        messages.push({
            name: name.trim() || "صديق",
            text: text.trim(),
            date: formattedDate,
            timestamp: Date.now()
        });
        localStorage.setItem('arch_messages', JSON.stringify(messages));
        renderMessages();
        if (typeof renderAdminMessages === 'function') renderAdminMessages();
        return true;
    }

    document.getElementById('sendMessageBtn').addEventListener('click', () => {
        const nameInput = document.getElementById('senderName');
        const msgInput = document.getElementById('messageContent');
        if (addMessage(nameInput.value, msgInput.value)) {
            msgInput.value = '';
            nameInput.value = '';
        }
    });

    renderMessages();

    // --------------------- نظام الداش بورد والإدارة ---------------------
    let isAdmin = false;

    function saveImages() {
        localStorage.setItem('site_images', JSON.stringify(images));
        buildGallery();
        if(isAdmin) renderAdminImages();
    }
    function saveMessagesAdmin() {
        localStorage.setItem('arch_messages', JSON.stringify(messages));
        renderMessages();
        if(isAdmin) renderAdminMessages();
    }
    function saveTributeAdmin() {
        localStorage.setItem('site_tribute', tributeText);
        document.getElementById('tributeText').innerText = tributeText;
    }
    
    // دالة حفظ كل شيء دفعة واحدة
    function saveAllNow() {
        saveImages();
        saveMessagesAdmin();
        saveTributeAdmin();
        alert("✅ تم حفظ جميع التغييرات (الصور، النص التذكاري، الرسائل) بنجاح.");
    }
    
    // إضافة روابط متعددة دفعة واحدة
    function addMultipleImages(urlsArray) {
        let addedCount = 0;
        for (let url of urlsArray) {
            url = url.trim();
            if (url && !images.includes(url)) {
                images.push(url);
                addedCount++;
            }
        }
        if (addedCount > 0) {
            saveImages();
            renderAdminImages();
            buildGallery();
            alert(`✅ تم إضافة ${addedCount} صورة جديدة بنجاح.`);
        } else {
            alert("⚠️ لم يتم إضافة أي روابط جديدة (الروابط مكررة أو غير صالحة).");
        }
    }

    function renderAdminImages() {
        const div = document.getElementById('adminImagesList');
        if (!div) return;
        div.innerHTML = images.map((src, idx) => `
            <div class="img-admin-item">
                <img src="${src}">
                <button class="delete-btn" data-img-index="${idx}">حذف</button>
            </div>
        `).join('');
        document.querySelectorAll('[data-img-index]').forEach(btn => {
            btn.addEventListener('click', e => {
                let i = parseInt(btn.getAttribute('data-img-index'));
                if (!isNaN(i)) { images.splice(i, 1); saveImages(); renderAdminImages(); buildGallery(); }
            });
        });
    }

    function renderAdminMessages() {
        const div = document.getElementById('adminMessagesList');
        if (!div) return;
        if (messages.length === 0) { div.innerHTML = '<div>لا توجد رسائل</div>'; return; }
        div.innerHTML = messages.map((msg, idx) => `
            <div class="message-admin-item">
                <div><strong>${escapeHtml(msg.name)}</strong> - ${msg.date}<br>${escapeHtml(msg.text)}</div>
                <button class="delete-btn" data-msg-index="${idx}">حذف</button>
            </div>
        `).join('');
        document.querySelectorAll('[data-msg-index]').forEach(btn => {
            btn.addEventListener('click', e => {
                let i = parseInt(btn.getAttribute('data-msg-index'));
                if (!isNaN(i)) { messages.splice(i, 1); saveMessagesAdmin(); renderAdminMessages(); renderMessages(); }
            });
        });
    }

    const loginModal = document.getElementById('loginModal');
    const adminModal = document.getElementById('adminModal');
    const adminStatusSpan = document.getElementById('adminStatus');
    function openLogin() { loginModal.classList.add('active'); }
    function closeLogin() { loginModal.classList.remove('active'); }
    function openAdminPanel() { adminModal.classList.add('active'); renderAdminImages(); renderAdminMessages(); document.getElementById('editTributeText').value = tributeText; }
    function closeAdminPanel() { adminModal.classList.remove('active'); }

    document.getElementById('openAdminBtn').addEventListener('click', openLogin);
    document.getElementById('closeLogin').addEventListener('click', closeLogin);
    document.getElementById('closeAdminBtn').addEventListener('click', closeAdminPanel);
    document.getElementById('loginSubmit').addEventListener('click', () => {
        let pass = document.getElementById('adminPass').value;
        if (pass === "Milano@123") {   // يمكنك تغيير كلمة المرور هنا
            isAdmin = true;
            localStorage.setItem('site_admin_logged', 'true');
            adminStatusSpan.innerHTML = '🔓 وضع الإدارة نشط';
            closeLogin();
            openAdminPanel();
        } else { alert("كلمة المرور غير صحيحة"); }
        document.getElementById('adminPass').value = '';
    });
    document.getElementById('logoutAdminBtn').addEventListener('click', () => {
        isAdmin = false;
        localStorage.removeItem('site_admin_logged');
        adminStatusSpan.innerHTML = '🔒 وضع المستخدم';
        closeAdminPanel();
    });
    if (localStorage.getItem('site_admin_logged') === 'true') { isAdmin = true; adminStatusSpan.innerHTML = '🔓 وضع الإدارة نشط'; }

    document.getElementById('saveTributeBtn')?.addEventListener('click', () => {
        let newText = document.getElementById('editTributeText').value;
        if (newText) { tributeText = newText; saveTributeAdmin(); }
    });
    document.getElementById('clearAllMessagesBtn')?.addEventListener('click', () => {
        if (confirm("هل أنت متأكد من حذف جميع الرسائل؟")) { messages = []; saveMessagesAdmin(); renderAdminMessages(); renderMessages(); }
    });
    document.getElementById('addImageBtn')?.addEventListener('click', () => {
        let url = document.getElementById('newImageUrl').value.trim();
        if (url) { images.push(url); saveImages(); renderAdminImages(); buildGallery(); document.getElementById('newImageUrl').value = ''; }
        else alert("أدخل رابط صورة صحيح");
    });
    
    // ربط الأزرار الجديدة
    document.getElementById('addBulkBtn')?.addEventListener('click', () => {
        const bulkText = document.getElementById('bulkUrls').value;
        if (!bulkText.trim()) {
            alert("الرجاء لصق الروابط أولاً (كل رابط في سطر).");
            return;
        }
        const urls = bulkText.split(/\r?\n/).filter(line => line.trim().length > 0);
        if (urls.length === 0) {
            alert("لم يتم العثور على روابط صالحة.");
            return;
        }
        addMultipleImages(urls);
        document.getElementById('bulkUrls').value = ''; // مسح الحقل
    });
    
    document.getElementById('saveAllChangesBtn')?.addEventListener('click', () => {
        saveAllNow();
    });
</script>
</body>
</html>