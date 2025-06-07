

<script>
const slider = document.querySelector('.categories-style-1');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('pointerdown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('pointerleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('pointerup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('pointermove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Adjust the speed as needed

  // Use requestAnimationFrame for smooth scrolling
  requestAnimationFrame(() => {
    slider.scrollLeft = scrollLeft - walk;
  });
});


</script>


 
<script>
$(document).ready(function(){
  // إزالة slick إذا كان مهيأ مسبقاً (احتياطاً)
  if ($('.products-slider').hasClass('slick-initialized')) {
    $('.products-slider').slick('unslick');
  }

  // تهيئة السلايدر بشكل صحيح
  $('.products-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
    infinite: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
});
</script>




    
    
    
    
   <script>

// GSAP Animation
const marqueeText = document.querySelector(".marquee-text");

// Clone the marquee text to create a continuous effect
const clonedText = marqueeText.cloneNode(true);
marqueeText.parentNode.appendChild(clonedText);

gsap.to(".marquee-text", {
    xPercent: -100,
    duration: 10,
    ease: "none",
    repeat: -1
});


</script>
 <script>

// GSAP Animation
const marqueeText = document.querySelector(".marquee-text2");

// Clone the marquee text to create a continuous effect
const clonedText = marqueeText.cloneNode(true);
marqueeText.parentNode.appendChild(clonedText);

gsap.to(".marquee-text2", {
    xPercent: -100,
    duration: 10,
    ease: "none",
    repeat: -1
});


</script>


    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">


<script>
  (() => {
    const d=document,s=d.createElement("script");s.type="module";
    s.src="https://w.behold.so/widget.js";d.head.append(s);
  })();
</script>




<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>

<script>
document.addEventListener("DOMContentLoaded", () => {
  if (
    window.location.pathname !== "/" &&
    window.location.pathname !== "/home" &&
    !window.location.pathname.startsWith("/collections") &&
    !window.location.pathname.startsWith("/search")
  ) {
    const infoItems = [
      {
        type: 'packaging',
        title: 'خيارات التغليف',
        packagingItems: [
          {
            img: 'https://cdn.youcan.shop/stores/3fbd47c9135769531c04ee09c1e75a67/products/lvceKw1lItfU23lPSPEh9SrXnP4t8eZtpj2xHFjP_lg.jpg',
            title: 'تغليف فاخر',
          },
          {
            img: 'https://cdn.youcan.shop/stores/3fbd47c9135769531c04ee09c1e75a67/products/WpUO5S9sax8JDQCmVbZ8PouNuu8f4HbGOTjf9X3k_md.jpg',
            title: 'تغليف وردي',
          },
          {
            img: 'https://cdn.youcan.shop/stores/3fbd47c9135769531c04ee09c1e75a67/products/6EalYyFdFoHbtBBB2DvbEBA9BfMwukgTr8gXiPJn_md.jpg',
            title: 'تغليف العشاق',
          },
          {
            img: 'https://cdn.youcan.shop/stores/3fbd47c9135769531c04ee09c1e75a67/products/i8mh6WlDOfIixwW5aOtMx681PIsNiqRvpOl33x1Z_md.jpg',
            title: 'تغليف كريمي',
          },
          {
            img: 'https://cdn.youcan.shop/stores/3fbd47c9135769531c04ee09c1e75a67/products/g9VZJHotK0X5ZDFfH9q3s8RHTCkMwdMq27mftOgU_md.jpg',
            title: 'عرض المزيد',
            link: '/collections/tghlyf'
          }
        ]
      },
      { icon: 'fa-gem', title: 'جودة مضمونة', desc: 'شهادات جودة معتمدة لكل قطعة.' },
      { icon: 'fa-truck', title: 'توصيل سريع', desc: 'خلال 24 إلى 72 ساعة لجميع مدن فلسطين وعرب 48 ..' },
      { icon: 'fa-certificate', title: 'تغليفات خاصة', desc: 'نقدم لك تخليفات هدايا مميزة .' },
      { icon: 'fa-undo-alt', title: 'سياسة الإرجاع', desc: 'يمكنك رفع طلب إرجاع خلال 24 ساعة من الاستلام. <a href="/pages/return-policy">المزيد من التفاصيل</a>' },
    ]; 

    const detailsContainer = document.querySelector('.product-details');

    if (detailsContainer) {
      const infoBox = document.createElement('div');
      infoBox.classList.add('info-box-custom');

      infoItems.forEach(item => {
        if (item.type === 'packaging') {
          const infoItem = document.createElement('div');
          infoItem.classList.add('info-item-custom');
          infoItem.style.flexDirection = 'column';

          const titleEl = document.createElement('h5');
          titleEl.classList.add('info-title');
          titleEl.textContent = item.title;

          const grid = document.createElement('div');
          grid.classList.add('packaging-grid');

          const withLink = item.packagingItems.filter(p => p.link);
          const withoutLink = item.packagingItems.filter(p => !p.link);

          const shuffled = withoutLink.sort(() => 0.5 - Math.random()).slice(0, 3);

          const finalItems = [...shuffled, ...withLink];

          finalItems.forEach(p => {
            const card = document.createElement(p.link ? 'a' : 'div');
            if (p.link) {
              card.href = p.link;
              card.classList.add('packaging-card', 'more-blur-card');
            } else {
              card.classList.add('packaging-card');
            }

            const img = document.createElement('img');
            img.src = p.img;
            img.alt = p.title;

            const subtitle = document.createElement('h6');
            subtitle.textContent = p.title;

            card.appendChild(img);
            card.appendChild(subtitle);

            if (p.link) {
              const overlayText = document.createElement('div');
              overlayText.textContent = 'استعرض المزيد';
              overlayText.classList.add('overlay-text');
              card.appendChild(overlayText);
            }

            grid.appendChild(card);

            if (!p.link) {
              card.style.cursor = 'pointer';
              card.addEventListener('click', () => {
                document.getElementById('popupImage').src = p.img;
                document.getElementById('popup').style.display = 'flex';
              });
            }
          });

          infoItem.appendChild(titleEl);
          infoItem.appendChild(grid);
          infoBox.appendChild(infoItem);
          return;
        }

        const infoItem = document.createElement('div');
        infoItem.classList.add('info-item-custom');

        const iconEl = document.createElement('i');
        iconEl.classList.add('fas', item.icon, 'info-icon');

        const textEl = document.createElement('div');
        textEl.classList.add('info-text');

        const titleEl = document.createElement('h5');
        titleEl.classList.add('info-title');
        titleEl.textContent = item.title;

        const descEl = document.createElement('p');
        descEl.classList.add('info-desc');
        descEl.innerHTML = item.desc;

        textEl.appendChild(titleEl);
        textEl.appendChild(descEl);

        infoItem.appendChild(iconEl);
        infoItem.appendChild(textEl);

        infoBox.appendChild(infoItem);
      });

      detailsContainer.appendChild(infoBox);
    }
  }

  if (!document.getElementById('popup')) {
    const popupOverlay = document.createElement('div');
    popupOverlay.id = 'popup';
    popupOverlay.classList.add('popup-overlay');
    popupOverlay.style.cssText = `
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background-color: rgba(0,0,0,0.7);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    `;

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup-content');
    popupContent.style.cssText = `
      position: relative;
      background: white;
      padding: 20px;
      border-radius: 10px;
      max-width: 90vw;
      max-height: 90vh;
      box-shadow: 0 0 30px rgba(0,0,0,0.3);
    `;

    const popupClose = document.createElement('span');
    popupClose.id = 'popupClose';
    popupClose.innerHTML = '&times;';
    popupClose.style.cssText = `
      position: absolute;
      top: 10px;
      right: 12px;
      font-size: 24px;
      color: #333;
      cursor: pointer;
      font-weight: bold;
    `;

    const popupImg = document.createElement('img');
    popupImg.id = 'popupImage';
    popupImg.alt = 'صورة التغليف';
    popupImg.style.cssText = `
      max-width: 100%;
      max-height: 80vh;
      border-radius: 10px;
      display: block;
    `;

    popupContent.appendChild(popupClose);
    popupContent.appendChild(popupImg);
    popupOverlay.appendChild(popupContent);
    document.body.appendChild(popupOverlay);

    popupClose.addEventListener('click', () => {
      popupOverlay.style.display = 'none';
    });
    popupOverlay.addEventListener('click', (e) => {
      if (e.target === popupOverlay) {
        popupOverlay.style.display = 'none';
      }
    });
  }
});
</script>





<script>
// تنفيذ حركة الجرس
function triggerBellAnimation() {
    const whatsappButton = document.querySelector('.whatsapp');
    whatsappButton.classList.add('shake');
    setTimeout(() => whatsappButton.classList.remove('shake'), 1000); // حركة الجرس لمدة 1 ثانية
}

// توقيتات الحركة بالتتابع
const timings = [3000, 3000, 5000, 10000, 60000]; // أول 5 مرات: 3ث, 3ث, 5ث, 10ث, 60ث
let timingIndex = 0;

// دالة لتكرار حركة الجرس بالتتابع
function scheduleBellAnimation() {
    if (timingIndex < timings.length) {
        // تشغيل حركة الجرس بعد الفترة المحددة
        setTimeout(() => {
            triggerBellAnimation();
            timingIndex++;
            scheduleBellAnimation(); // جدولة الفترة التالية
        }, timings[timingIndex]);
    } else {
        // بعد انتهاء الفترات المحددة، تكرار كل 30 ثانية
        setInterval(triggerBellAnimation, 30000); // تكرار الحركة كل 30 ثانية
    }
}

// بدء حركة الجرس
scheduleBellAnimation();
// إظهار الرسالة المنبثقة بعد فتح الصفحة
function showPopup() {
    const popupMessage = document.getElementById('popup-message');
    popupMessage.classList.add('show');
    setTimeout(() => popupMessage.classList.remove('show'), 3000); // عرض الرسالة لمدة 3 ثوانٍ
}

// عرض الرسالة لأول مرة بعد 3 ثوانٍ
setTimeout(() => {
    showPopup();
    // إعداد مؤقت لتكرار الرسالة كل دقيقة
    setInterval(showPopup, 60000); // دقيقة واحدة = 60000 مللي ثانية
}, 10000); // أول مرة بعد 3 ثوانٍ





</script>

<script>
// إنشاء عناصر الإشعار ديناميكيًا
const body = document.body;

// إنشاء عنصر الإشعار
const notification = document.createElement('div');
notification.id = 'purchase-notification';
notification.style.display = 'none'; // يبدأ مخفيًا
body.appendChild(notification);

// إضافة أنماط CSS ديناميكيًا
const styles = `
@media (max-width: 900px) {
    #purchase-notification img {
        max-width: 25px;
    }
    
    #purchase-notification .thank-you {
        font-size: 8px;
    }
      #purchase-notification .customer-name {
        font-size: 5px;
    }

    #purchase-notification .location {
        font-size: 4px;
    }
    
}

@media (max-width: 600px) {
     #purchase-notification img {
        max-width: 25px;
    }
    
    #purchase-notification .thank-you {
        font-size: 5px;
    }
      #purchase-notification .customer-name {
        font-size: 3px;
    }

    #purchase-notification .location {
        font-size: 2px;
    }
}
    #purchase-notification {
        position: fixed;
        bottom: 70px;
        left: 20px;
        background-color: #fff;
        color: #333;
        padding: 15px 20px;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        animation: fade-in 1s ease-in-out;
        text-align: center;
    }

    #purchase-notification img {
        max-width: 50px;
        cursor: pointer;
        border-radius: 50px;
        display: inline;
    }

    #purchase-notification .thank-you {
        font-size: 14px;
        font-weight: bold;
        color: #3e1b84;
        margin-bottom: 5px;
    }

    #purchase-notification .customer-name {
        font-size: 12px;
        font-weight: bold;
    }

    #purchase-notification .location {
        font-size: 11px;
        color: #555;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(-20px);
        }
    }
`;

// إضافة الأنماط إلى الصفحة
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// قائمة بأسماء العملاء
const customers = [
    "أحمد",
    "Laila",
    "محمد",
    "Noor",
    "שרה",
    "خالد",
    "Fatima",
    "יוסף",
    "Aisha",
    "يوسف",
    "ريم",
    "Omar",
    "هالة",
    "Ziad",
    "ميساء",
    "Nader",
    "هدى",
    "Hossam",
    "منى",
    "Adam",
    "نسريين",
    "Ayman",
    "رانيا",
    "Ali",
    "مها",
    "Safaa",
    "روان",
    "Saif",
    "سهى",
    "Lina",
    "كريم",
    "Rami",
    "شيرين",
    "Adel",
    "باسم",
    "Raghad",
    "فرح",
    "Layan",
    "وسام",
    "Iman",
    "أمل",
    "Maher",
    "Raed",
    "ياسمين",
    "Nada",
    "مراد",
    "هديل",
    "Salsabeel",
    "علاء",
    "Bushra",
    "نجوى",
    "Levi",
    "Ramya",
    "مروان",
    "هالة",
    "Bilal",
    "ميسون",
    "نورة",
    "Tamer",
    "زين",
    "إيمان",
    "Aws",
    "رند",
    "Mazeen",
    "Maria",
    "حيا",
    "Louay",
    "Jana",
    "شادي",
    "حسين",
    "Tamara",
    "جود",
    "Baha",
    "יעל",
    "عدنان",
    "Feras",
    "نوران",
    "Majd",
    "يزيد",
    "وداد",
    "أنس",
    "شهد",
    "لارا",
    "Samy",
    "سعيد",
    "Wafaa",
    "نهى",
    "يحيى",
    "رولا",
    "Hany",
    "Amjad",
    "ريان",
    "لبنى",
    "Wael",
    "אבי",
    "Matan",
    "Talia",
    "אליאנה",
    "Noam",
    "Shira",
    "Elior"
];

// قائمة أسماء أنثوية ومذكرة
const femaleNames = [
    "Laila", "Noor", "שרה", "Fatima", "Aisha", "ريم", "هالة", "ميساء", "هدى", "منى", "نسريين",
    "رانيا", "مها", "Safaa", "روان", "سهى", "Lina", "شيرين", "Raghad", "فرح", "Layan",
    "Iman", "أمل", "ياسمين", "Nada", "هديل", "Salsabeel", "علاء", "Bushra", "نجوى", "Ramya",
    "هالة", "ميسون", "نورة", "Tamara", "جود", "نوران", "شهد", "لارا", "Nada", "Wafaa", "نهى", "رولا", "لبنى",
    "Talia", "אליאנה", "Shira"
];

const maleNames = [
    "أحمد", "محمد", "خالد", "يوسف", "Omar", "Ziad", "Nader", "Hossam", "Adam",
    "Ayman", "Ali", "كريم", "Rami", "Adel", "باسم", "Saif", "وسام", "Maher", "Raed",
    "مراد", "علاء", "مروان", "Bilal", "Tamer", "زين", "Aws", "Mazeen", "شادي",
    "حسين", "Louay", "Baha", "عدنان", "Feras", "Majd", "يزيد", "أنس", "سعيد", "يحيى", "Hany", "Amjad", "ريان", "Wael",
    "Levi", "יעל", "אבי", "Matan", "Noam", "Elior"
];

const locations = [
    "القدس", "رام الله", "نابلس", "الخليل", "بيت لحم", "جنين", "طولكرم", "قلقيلية", "سلفيت", "أريحا",
    "عزون", "كفر قدوم", "سبسطية", "دورا", "ترمسعيا", "بتين", "بيرزيت", "بيت حنينا", "بيت جالا", "عنبتا", 
    "طمون", "طوباس", "تل أبيب", "حيفا", "يافا", "إيلات", "عكا", "بئر السبع", "نتانيا", "طبريا", "رمات غان", 
    "بتاح تكفا", "نهاريا", "كفر ياسيف", "دالية الكرمل", "معلوت ترشيحا", "كريات شمونة", "روش هاعين", 
    "زوخرون يعقوب", "مغدال عيمق", "ريشون لتسيون"
];

const products = [
    { name: "طقم باندورا ستانلس اربع قطع ( حجم وسط)", image: "https://cdn.youcan.shop/stores/3fbd47c9135769531c04ee09c1e75a67/products/RxjwozA2toB1ed6tGZBNfMDtJ3aOewl3GomKVt2o_lg.jpg", link: "https://ulsilver.com/products/tkm-bandora-stanls-arbaa-ktaa-hjm-ost" },
    { name: "طقم مسكا فضة اربع قطع", image: "https://cdn.youcan.shop/stores/3fbd47c9135769531c04ee09c1e75a67/products/CYY53olwaqhCTE41YWWXeptdSNIqbU0Q0YoBvTrx_lg.jpg", link: "https://ulsilver.com/products/tkm-mska-fd-arbaa-ktaa" },
    { name: "طقم هديا باندورا باللون أبيض فضة 925", image: "https://cdn.youcan.shop/stores/3fbd47c9135769531c04ee09c1e75a67/products/fZcgZClpMJ3cmqh9HBYqLVaBZ6dJd0l1rKwMg95G_lg.jpg", link: "https://ulsilver.com/products/tkm-hdya-bandora-ballon-abyd-fd-925" },
    { name: "إسوارة التنس بقلب فل زركون", image: "https://cdn.youcan.shop/stores/3fbd47c9135769531c04ee09c1e75a67/products/qc76A9rdTnwjmxTsPgvX2vXn54vqPU5TeZbL3kIh_lg.jpg", link: "https://ulsilver.com/products/esoar-altns-bklb-fl-zrkon" },
    { name: "أساور فان كليف الأسود الذهبي", image: "https://cdn.youcan.shop/stores/3fbd47c9135769531c04ee09c1e75a67/products/PEnRuxqn0l1S2WJxn70foXnmZePtGT7peTphdiGq.webp", link: "https://ulsilver.com/products/asaor-fan-klyf-alasod-althhby" },
    { name: "ساعة DANIEL KLEIN", image: "https://cdn.youcan.shop/stores/3fbd47c9135769531c04ee09c1e75a67/products/vNE5S0pqGXIirdI3OePPjnoozhI3zXtlvYjqmnyn_lg.jpg", link: "https://ulsilver.com/products/saaa-daniel-klein-5" },
    { name: "ساعة G . P المميزة", image: "https://cdn.youcan.shop/stores/3fbd47c9135769531c04ee09c1e75a67/products/UyJRxaUO13K7bnDRnC9vNfANDoX8fQTfwnJ6K0Js_lg.jpg", link: "https://ulsilver.com/products/saaa-g-p-almmyz-12" },
    { name: "خاتم الفراشة فضة أصلية عيار S925 💍", image: "https://cdn.youcan.shop/stores/3fbd47c9135769531c04ee09c1e75a67/products/IeWz0ptsXQVeu2zD6yZPZAQDgPRF5etFuwPs2bfq_lg.jpg", link: "https://ulsilver.com/products/khatm-alfrash-fd-asly-aayar-s925-1" },
    { name: "خاتم إنفينيتي فضة أصلية عيار S925 💍", image: "https://cdn.youcan.shop/stores/3fbd47c9135769531c04ee09c1e75a67/products/20qz0Qw6QNaGMlthE8dvmMr8qvR8OPg7utoXX3yM_lg.jpg", link: "https://ulsilver.com/products/khatm-enfynyty-fd-asly-aayar-s925" },
    { name: "خاتم فضة أصلية عيار S925 💍", image: "https://cdn.youcan.shop/stores/3fbd47c9135769531c04ee09c1e75a67/products/mUIweZ8YJu1V4y2t1mGo52VOPWB0U98hUeGsNzbb_lg.jpg", link: "https://ulsilver.com/products/khatm-fd-asly-aayar-s925-5" },
    { name: "سنسال قلب ( ستانلس ستيل )", image: "https://cdn.youcan.shop/stores/3fbd47c9135769531c04ee09c1e75a67/products/FiCPmRYQRySnhr50QdovdhFOuqvGxovtL9XdcI4c_lg.jpg", link: "https://ulsilver.com/products/snsal-klb-fdy-stanls-styl" },
    { name: "سنسال PANDORA ستانلس ستيل", image: "https://cdn.youcan.shop/stores/3fbd47c9135769531c04ee09c1e75a67/products/CWdmWGdxbrJihwjhr02Wpw5krrrz2LuaSDgl3hNR_lg.jpg", link: "https://ulsilver.com/products/snsal-pandora-fdy-zhry" }
];

// دالة لتحديد الجنس بناءً على الاسم
function getGender(name) {
    if (femaleNames.includes(name)) return "female";
    if (maleNames.includes(name)) return "male";
    return "unknown";
}

// دالة لإظهار الإشعار
function showNotification() {
    const customerIndex = Math.floor(Math.random() * customers.length);
    const fullName = customers[customerIndex];

    const locationIndex = Math.floor(Math.random() * locations.length);
    const location = locations[locationIndex];

    const firstName = fullName.split(' ')[0];
    const maskedName = `${firstName} **`;

    const gender = getGender(firstName);
    const verb = gender === "female" ? "قامت" : "قام";

    const productIndex = Math.floor(Math.random() * products.length);
    const product = products[productIndex];

    notification.innerHTML = `
        <img src="${product.image}" alt="${product.name}" onclick="window.location.href='${product.link}'" />
        <div class="thank-you">شكراً لثقتكم بنا</div>
        <div class="customer-name">${verb} ${maskedName} بعملية شراء!</div>
        <div class="location">من: ${location}</div>
    `;

    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 10000);
}

// استخدام setTimeout لعرض الإشعار
setTimeout(showNotification, 30 * 1000);
setTimeout(showNotification, 1 * 60 * 1000);
setTimeout(showNotification, 5 * 60 * 1000);
setTimeout(showNotification, 30 * 60 * 1000);
setTimeout(showNotification, 35 * 60 * 1000);
setTimeout(showNotification, 60 * 60 * 1000);
</script>

<script>
document.addEventListener("DOMContentLoaded", function () {
  // استهداف جميع عناصر .product-item
  const productItems = document.querySelectorAll(".product-item");

  productItems.forEach((item) => {
    // البحث عن العنصر .product-price داخل المنتج
    const priceElement = item.querySelector(".product-price");
    if (priceElement) {
      // استخراج السعرين من العناصر الداخلية
      const originalPriceElement = priceElement.querySelector(".currency-value.before .value");
      const salePriceElement = priceElement.querySelector(".currency-value.after .value");

      if (originalPriceElement && salePriceElement) {
        const originalPrice = parseFloat(originalPriceElement.textContent.trim());
        const salePrice = parseFloat(salePriceElement.textContent.trim());

        // تحقق من صحة القيم وحساب نسبة الخصم
        if (!isNaN(originalPrice) && !isNaN(salePrice) && originalPrice > salePrice) {
          const discountPercentage = ((originalPrice - salePrice) / originalPrice) * 100;

          // إنشاء قسم جديد لشارة الخصم
          const discountBadge = document.createElement("div");
          discountBadge.className = "discount-badge";
          discountBadge.textContent = `خصم ${discountPercentage.toFixed(2)}%`;

          // إضافة شارة الخصم إلى المنتج
          item.appendChild(discountBadge);
        }
      }
    }
  });
});

</script>





<script>
document.addEventListener("DOMContentLoaded", function () {
  // استهداف جميع عناصر .product-item
  const productItems = document.querySelectorAll(".product-item");

  productItems.forEach((item) => {
    // البحث عن العنصر .product-actions داخل المنتج
    const actionsElement = item.querySelector(".product-actions");
    
    // التحقق إذا كان العنصر يحتوي على class="disabled"
    if (actionsElement && actionsElement.querySelector(".disabled")) {
      // إنشاء قسم جديد لشارة "انتهت الكمية"
      const soldOutBadge = document.createElement("div");
      soldOutBadge.className = "sold-out-badge";
      soldOutBadge.textContent = "انتهت الكمية";

      // إضافة الشارة إلى العنصر .product-thumbnail
      const imageContainer = item.querySelector(".product-thumbnail");
      if (imageContainer) {
        imageContainer.appendChild(soldOutBadge);
      }

      // عرض الشارة
      soldOutBadge.style.display = "block";  // إظهار الشارة
    }
  });
});


</script>



<!-- TikTok Pixel Code Start -->
<script>
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};


  ttq.load('CVCSF23C77U8JA3ILIOG');
  ttq.page();
}(window, document, 'ttq');
</script>
<!-- TikTok Pixel Code End -->

<script>
        document.querySelectorAll('.faq-question').forEach(item => {
            item.addEventListener('click', () => {
                let answer = item.nextElementSibling;
                answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            });
        });
    </script>
    
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
    
  

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCBfAd31IbjPO-No3YC7Re7RXpIgMcMLJA",
    authDomain: "ulsilvercom.firebaseapp.com",
    projectId: "ulsilvercom",
    storageBucket: "ulsilvercom.firebasestorage.app",
    messagingSenderId: "906294168851",
    appId: "1:906294168851:web:e51584b26e05d1cdba9ee6",
    measurementId: "G-CJEVSV1PPZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  
  
  
</script>

