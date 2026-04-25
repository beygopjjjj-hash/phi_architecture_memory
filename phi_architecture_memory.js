<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=yes">
    <title>معرض ذكريات الدفعة | PHI - قسم العمارة</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Cairo', sans-serif;
            background: #fefcf8;
            color: #1e3e4a;
            line-height: 1.5;
            scroll-behavior: smooth;
            overflow-x: hidden;
        }

        body::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 10% 20%, rgba(180, 224, 255, 0.15) 0%, rgba(255, 245, 225, 0.1) 90%);
            pointer-events: none;
            z-index: -2;
        }

        body::after {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(200, 225, 245, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(200, 225, 245, 0.2) 1px, transparent 1px);
            background-size: 45px 45px;
            pointer-events: none;
            z-index: -1;
        }

        /* شاشة الترحيب */
        .splash-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #fefbf5, #eef4fc);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            transition: opacity 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1), visibility 0.8s ease;
            backdrop-filter: blur(2px);
            padding: 20px;
            box-sizing: border-box;
        }

        .splash-content {
            text-align: center;
            animation: fadeInUp 0.9s ease;
            max-width: 90%;
            width: auto;
            padding: 15px;
        }

        .splash-content img {
            max-width: 100%;
            max-height: 60vh;
            width: auto;
            height: auto;
            border-radius: 28px;
            box-shadow: 0 20px 35px rgba(0, 0, 0, 0.2);
            border: 3px solid white;
            margin-bottom: 20px;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }

        .welcome-message {
            font-size: 1.8rem;
            font-weight: 800;
            background: linear-gradient(125deg, #1e5975, #e09d6b);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            margin-bottom: 12px;
        }

        .sub-message {
            font-size: 1rem;
            color: #4f7d8f;
            font-weight: 500;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(25px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .hero {
            text-align: center;
            padding: 50px 15px 40px;
            margin-bottom: 20px;
        }

        .hero h1 {
            font-size: 2rem;
            font-weight: 800;
            background: linear-gradient(125deg, #1e5975, #4b8da2, #e09d6b);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }

        .hero .sub {
            font-size: 1rem;
            font-weight: 600;
            color: #2c6a7e;
            border-bottom: 2px solid #e09d6b;
            display: inline-block;
            padding-bottom: 6px;
            margin-top: 10px;
        }

        .arch-badge {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-top: 20px;
            flex-wrap: wrap;
        }

        .arch-badge span {
            background: rgba(255, 250, 240, 0.85);
            backdrop-filter: blur(4px);
            padding: 6px 16px;
            border-radius: 40px;
            font-weight: 600;
            color: #2a5f74;
            font-size: 0.75rem;
            border: 1px solid rgba(224, 157, 107, 0.3);
        }

        .arch-divider {
            width: 70px;
            height: 3px;
            background: #e09d6b;
            margin: 25px auto 0;
            border-radius: 4px;
        }

        .section-title {
            text-align: center;
            margin: 30px 0 30px;
        }
        .section-title h2 {
            font-size: 1.8rem;
            font-weight: 700;
            color: #1c5a70;
        }
        .section-title span {
            font-size: 0.85rem;
            color: #7e9aa8;
            display: block;
            margin-top: 8px;
        }
        .section-title:after {
            content: '';
            display: block;
            width: 60px;
            height: 2px;
            background: #b4e0ff;
            margin: 12px auto 0;
            border-radius: 2px;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
            gap: 20px;
            margin-bottom: 60px;
        }

        .gallery-card {
            background: white;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
            cursor: pointer;
            border: 1px solid #eef4fa;
        }

        .gallery-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
        }

        .gallery-card img {
            width: 100%;
            height: 260px;
            object-fit: cover;
            display: block;
            transition: transform 0.4s ease;
        }

        .gallery-card:hover img {
            transform: scale(1.02);
        }

        /* Lightbox */
        .fullscreen-lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(8, 15, 20, 0.97);
            backdrop-filter: blur(20px);
            z-index: 5000;
            display: flex;
            justify-content: center;
            align-items: center;
            visibility: hidden;
            opacity: 0;
            transition: visibility 0.2s, opacity 0.35s ease;
        }

        .fullscreen-lightbox.active {
            visibility: visible;
            opacity: 1;
        }

        .fs-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 15px;
        }

        .fs-image {
            max-width: 95%;
            max-height: 85%;
            width: auto;
            height: auto;
            object-fit: contain;
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.4);
            transition: opacity 0.25s ease;
            background: #0a1217;
        }

        .fs-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(255, 242, 225, 0.9);
            backdrop-filter: blur(12px);
            border: none;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            font-size: 1.5rem;
            cursor: pointer;
            color: #2c5f72;
            transition: 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 5100;
            box-shadow: 0 3px 12px rgba(0,0,0,0.2);
        }

        .fs-nav:hover {
            background: #e09d6b;
            color: white;
        }

        .fs-prev { left: 10px; }
        .fs-next { right: 10px; }

        .fs-close {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(0,0,0,0.6);
            backdrop-filter: blur(8px);
            width: 44px;
            height: 44px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 1.6rem;
            color: white;
            transition: 0.2s;
            z-index: 5100;
            border: none;
        }

        .fs-close:hover {
            background: #e09d6b;
        }

        .fs-counter {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0,0,0,0.6);
            backdrop-filter: blur(8px);
            padding: 6px 16px;
            border-radius: 40px;
            color: white;
            font-weight: 500;
            font-size: 0.8rem;
            z-index: 5100;
            white-space: nowrap;
        }

        @media (min-width: 768px) {
            .fs-nav { width: 56px; height: 56px; font-size: 2rem; }
            .fs-prev { left: 25px; }
            .fs-next { right: 25px; }
            .fs-close { top: 28px; right: 35px; width: 50px; height: 50px; font-size: 1.8rem; }
            .fs-counter { bottom: 30px; padding: 8px 20px; font-size: 0.9rem; }
            .hero h1 { font-size: 2.8rem; }
            .hero .sub { font-size: 1.2rem; }
            .welcome-message { font-size: 2.2rem; }
        }

        @media (max-width: 480px) {
            .gallery-grid {
                grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
                gap: 16px;
            }
            .gallery-card img {
                height: 220px;
            }
            .hero h1 {
                font-size: 1.7rem;
            }
        }

        footer {
            background: linear-gradient(110deg, #eef4fc, #fff6ec);
            padding: 40px 20px 40px;
            text-align: center;
            border-radius: 40px 40px 0 0;
            margin-top: 30px;
            border-top: 2px solid #ffe0bc;
        }

        .footer-content p {
            color: #2b5b6e;
            margin: 12px 0;
            font-weight: 500;
            line-height: 1.6;
            font-size: 0.95rem;
        }

        .thankyou-text {
            font-size: 1rem;
            max-width: 90%;
            margin: 0 auto 20px;
        }

        .faculty-thanks {
            background: #fff3e6;
            display: inline-block;
            padding: 10px 20px;
            border-radius: 50px;
            color: #b45a2e;
            font-weight: 600;
            margin-top: 12px;
            font-size: 0.85rem;
        }

        .loading-placeholder {
            text-align: center;
            padding: 40px;
            font-size: 1rem;
            color: #7ca0ae;
        }
    </style>
</head>
<body>

<!-- شاشة الترحيب -->
<div id="splashScreen" class="splash-screen">
    <div class="splash-content">
        <img src="https://i.postimg.cc/nc5YKPkQ/image.png" alt="Welcome Class of 2026" loading="eager">
        <div class="welcome-message">🎓 Welcome, Class of 2026! 🎓</div>
        <div class="sub-message">Memories that will last forever — PHI Architecture Department</div>
    </div>
</div>

<div class="hero">
    <div class="container">
        <h1>🧱 ذاكرة العمارة الخالدة 🧱</h1>
        <div class="sub">دفعة معهد الأهرامات العالي للهندسة والتكنولوجيا | PHI - قسم العمارة</div>
        <div class="arch-badge">
            <span><i class="fas fa-drafting-compass"></i> Architectural Soul</span>
            <span><i class="fas fa-landmark"></i> Egyptian Identity</span>
            <span><i class="fas fa-images"></i> ذكريات متجددة</span>
        </div>
        <div class="arch-divider"></div>
        <p style="margin-top: 20px; max-width: 85%; margin-inline: auto; color: #4f7d8f; font-size: 0.9rem;">انقر على أي صورة لتغمر شاشتك بالذاكرة</p>
    </div>
</div>

<div class="container">
    <div class="section-title">
        <h2><i class="fas fa-camera-retro" style="margin-left: 8px; color: #e09d6b;"></i> معرض الذكريات</h2>
        <span>تنقل سلس — صور تملأ الشاشة — مرتبة من الأحدث للأقدم</span>
    </div>
    <div id="galleryGrid" class="gallery-grid">
        <div class="loading-placeholder"><i class="fas fa-spinner fa-pulse"></i> جاري تحميل الذكريات...</div>
    </div>
</div>

<!-- Lightbox -->
<div id="fullscreenLightbox" class="fullscreen-lightbox">
    <div class="fs-wrapper">
        <button class="fs-close" id="fsCloseBtn"><i class="fas fa-times"></i></button>
        <div class="fs-counter" id="fsCounter">1 / 0</div>
        <img id="fsImage" class="fs-image" src="" alt="ذكرى">
        <button class="fs-nav fs-prev" id="fsPrevBtn"><i class="fas fa-chevron-right"></i></button>
        <button class="fs-nav fs-next" id="fsNextBtn"><i class="fas fa-chevron-left"></i></button>
    </div>
</div>

<footer>
    <div class="container footer-content">
        <div class="thankyou-text">
            <p><i class="fas fa-heart" style="color: #e09d6b;"></i>  إلى كل روح سكنت هذه القاعات، وإلى كل ضحكة جمعتنا، وإلى الأيام التي علمتنا معنى العمارة ليس مجرد حجر بل حب وإخاء  <i class="fas fa-heart" style="color: #e09d6b;"></i></p>
            <p>شكراً لكل لحظة عشناها سوياً، لكل حلم رسمنا خطوطه الأولى، وللذكرى التي ستظل تنبض بيننا.</p>
        </div>
        <div class="faculty-thanks">
            <i class="fas fa-chalkboard-user"></i> كل التقدير والاحترام لأساتذتنا الأفاضل والمعيدين المخلصين في قسم العمارة — أنتم نور دربنا
        </div>
        <p style="margin-top: 25px; font-size: 0.7rem;">دفعة 2026 - معهد الأهرامات العالي للهندسة والتكنولوجيا | PHI</p>
    </div>
</footer>

<script>
    // القائمة الجديدة مرتبة يدوياً من الأحدث (2026-04-26) إلى الأقدم
    const imagesList = [
        // صورة الترحيب تظل الأولى
        "https://i.postimg.cc/nc5YKPkQ/image.png",
        // الأحدث: 2026-04-26
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
        // ثم 2026-04-25
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
        // باقي الصور بدون تاريخ واضح في الاسم (نعتبرها أقدم)
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

    let currentImages = [...imagesList];
    let currentIndex = 0;
    let isTransitioning = false;
    const galleryDiv = document.getElementById('galleryGrid');
    const lightbox = document.getElementById('fullscreenLightbox');
    const fsImage = document.getElementById('fsImage');
    const fsCounter = document.getElementById('fsCounter');
    const fsPrev = document.getElementById('fsPrevBtn');
    const fsNext = document.getElementById('fsNextBtn');
    const fsClose = document.getElementById('fsCloseBtn');

    function buildGallery() {
        if (!currentImages.length) {
            galleryDiv.innerHTML = '<div class="loading-placeholder">✨ لا توجد صور ✨</div>';
            return;
        }
        let html = '';
        currentImages.forEach((src, idx) => {
            html += `
                <div class="gallery-card" data-index="${idx}">
                    <img src="${src}" alt="ذكرى ${idx+1}" loading="lazy">
                </div>
            `;
        });
        galleryDiv.innerHTML = html;
        document.querySelectorAll('.gallery-card').forEach(card => {
            card.addEventListener('click', () => {
                const idx = parseInt(card.getAttribute('data-index'));
                if (!isNaN(idx)) openLightbox(idx);
            });
        });
    }

    function openLightbox(index) {
        if (isTransitioning) return;
        currentIndex = index;
        updateLightboxContent(true);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function updateLightboxContent(initial = false) {
        const imgSrc = currentImages[currentIndex];
        if (!imgSrc) return;
        const total = currentImages.length;
        if (initial) {
            fsImage.style.transition = 'none';
            fsImage.src = imgSrc;
            fsCounter.innerText = `${currentIndex+1} / ${total}`;
            fsImage.style.opacity = '1';
            fsImage.offsetHeight;
            fsImage.style.transition = 'opacity 0.25s ease';
        } else {
            fsImage.style.opacity = '0';
            setTimeout(() => {
                fsImage.src = imgSrc;
                fsCounter.innerText = `${currentIndex+1} / ${total}`;
                setTimeout(() => { fsImage.style.opacity = '1'; }, 30);
            }, 150);
        }
        fsCounter.innerText = `${currentIndex+1} / ${total}`;
    }

    function nextImage() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex = (currentIndex + 1) % currentImages.length;
        updateLightboxContent();
        setTimeout(() => { isTransitioning = false; }, 280);
    }

    function prevImage() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        updateLightboxContent();
        setTimeout(() => { isTransitioning = false; }, 280);
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        fsImage.style.opacity = '1';
    }

    fsClose.addEventListener('click', closeLightbox);
    fsPrev.addEventListener('click', prevImage);
    fsNext.addEventListener('click', nextImage);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
    window.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'ArrowRight') prevImage();
        else if (e.key === 'ArrowLeft') nextImage();
        else if (e.key === 'Escape') closeLightbox();
    });

    const splash = document.getElementById('splashScreen');
    function hideSplash() {
        splash.style.opacity = '0';
        splash.style.visibility = 'hidden';
        setTimeout(() => { splash.style.display = 'none'; }, 800);
    }
    setTimeout(hideSplash, 3000);
    splash.addEventListener('click', hideSplash);
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (splash.style.display !== 'none') hideSplash();
        }, 4000);
    });

    buildGallery();
</script>
</body>
</html>