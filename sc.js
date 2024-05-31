document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
        slide.classList.add('active');
        } else {
        slide.classList.remove('active');
        }
    });
    }
    function nextSlide() {
    currentSlide = (currentSlide + 1) % 5;
    showSlide(currentSlide);
    }
    setInterval(nextSlide, 3000);
    showSlide(currentSlide);
});
document.addEventListener('DOMContentLoaded', function() {
    const favoriteBtns = document.querySelectorAll('.favorite-btn');

    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.Museum');
            const id = this.getAttribute('data-id');
            const title = card.querySelector('.card-title').textContent;
            const rate=card.querySelector('.rate');
            const imageSrc = card.querySelector('.card-img-top').getAttribute('src');

            // Create favorite item object
            const favoriteItem = {
                id: id,
                title: title,
                imageSrc: imageSrc,
                rate :rate
            };

            // Save favorite item to localStorage
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            favorites.push(favoriteItem);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
    });
});
// toggle init

//lanague init
i18next
    .use(i18nextBrowserLanguageDetector)
    .init({
        resources: {
            en: {
                translation: {
                    "home": "Home",
                    "explore": "Explore",
                    "contactUs": "Contact Us",
                    "aboutUs": "About Us",
                    "login": "Login",
                    "scrollToTop": "Scroll to Top",
                    "noResultFound": "No Result Found",
                    "seeTheWorld": "See the world through fresh eyes.",
                    "trendingSites": "Trending sites",
                    "searchPlace": "Search a place",
                    "Pyramids": "Pyramids",
                    "Baron palace": "Baron Palace",
                    "Bab Zuweila": "Bab Zuweila",
                    "Become VIP": "Become VIP!",
                    "VIP description": "Enjoy priority access to new products, services, and events before they are made available to the general public.",
                    "Upgrade now": "Upgrade now!",
                    "Customized Experiences": "Customized Experiences",
                    "Customized Experiences description": "Tailor your experience with us according to your preferences and interests, ensuring that every interaction with our brand is personalized and memorable.",
                    "Subscribe now": "Subscribe now",
                    "Home": "Home",
                    "Ask Questions": "Ask Questions",
                    "About Us": "About Us",
                    "Better experience": "For better experience, download our mobile app",
                    "Download app": "Download the app by clicking the link below:",
                    "All rights reserved": "All copyrights are reserved by 2024 seniors",
                    "Welcome back": "Welcome back!",
                    "Login message": "Login to access all your data",
                    "Email Address": "Email Address",
                    "Enter your email address": "Enter your email address",
                    "Password": "Password",
                    "Enter your password": "Enter your password",
                    "Log in": "Log in",
                    "Forgotten password": "Forgotten password?",
                    "or": "or",
                    "Create new account": "Create new account",
                    "slideContent": "See the world through fresh eyes.",
                    "The Hanging Church": "The Hanging Church",
                    "Amr ibn Al-A'as Mosque": "Amr ibn Al-A'as Mosque",
                    "Mosque-Madrasa of Sultan Hassan": "Mosque-Madrasa of Sultan Hassan",
                    "Ibn Tulun Mosque": "Ibn Tulun Mosque",
                    "Capritage Helwan": "Capritage Helwan",
                    "Cairo Opera House": "Cairo Opera House",
                    "Explore": "Explore",
                    "Restaurants": "Restaurants",
                    "Abo Elseed": "Abo Elseed",
                    "Abo Elseed description": "Abo Elseed is a well-known seafood restaurant located in Alexandria, Egypt, renowned for its delicious and fresh seafood offerings. It is likely situated in a bustling area of Alexandria, close to the Mediterranean Sea. Its location may offer scenic views of the waterfront or a lively atmosphere characteristic of Alexandria's coastal neighborhoods.",
                    "contact-info": "01212166660 Always open",
                    "Explore more": "Explore more",
                    "footer-text": "Home Pages Our Team Contact About Us",
                    "footer-text-links": "For better experience, download our mobile app   Download the app by clicking the link below:",
                    "footer-copyright": "All copyrights are reserved by 2024 seniors",
                    "intro": "Egyptour is pioneering in its approach, dedicated to exploring the diverse tourist  destinations of Egypt.",
                    "about-title": "About Egyptour.com",
                    "about-1": "  Egyptour   is the inaugural Egyptian online platform dedicated to uncovering the rich tapestry of archaeological and tourist sites across Egypt. Founded by a collective of university students driven by a profound love for their homeland, Egyptour seeks to showcase the country's cultural heritage and bolster domestic tourism, ultimately contributing to the nation's economic growth. Launched in mid-2024, the platform offers comprehensive information, directions, and captivating imagery of each featured location. With a primary focus on engaging young individuals, tourists, and visitors, Egyptour endeavors to illuminate the splendor of Egypt, its illustrious history, and its vibrant populace.  Providing round-the-clock customer support  , the website ensures seamless accessibility and assistance for users.",
                    "about-2": "Egyptour stands out as a groundbreaking initiative, spearheaded by a passionate group of university students who are deeply committed to promoting Egypt's cultural treasures and fostering domestic tourism. This innovative project, which debuted in the latter half of 2024, serves as a digital gateway to Egypt's myriad archaeological and tourist sites. By offering detailed insights, precise directions, and captivating visuals of each destination, Egyptour aims to captivate a wide audience, including young individuals, tourists, and visitors, with the allure of Egypt's historical marvels.",
                    "about-3": "The core mission of Egyptour is twofold: to showcase the beauty and historical significance of Egypt while also contributing to the country's economic prosperity through the promotion of domestic tourism. By highlighting the splendor of Egypt's landscapes, monuments, and people, the platform endeavors to instill a sense of appreciation and wonder in its users. Moreover, by providing customer service round-the-clock, Egyptour ensures that users have continuous support and guidance as they explore the diverse offerings of the website.",
                    "about-4": "In essence,  Egyptour represents a dynamic platform that not only celebrates Egypt's rich heritage   but also serves as a catalyst for sustainable tourism growth and economic development. Through its user-friendly interface, comprehensive information, and unwavering commitment to customer service, Egyptour is poised to become a premier destination for individuals seeking to immerse themselves in the wonders of Egypt",
                    "offers-title": "What Egyptour.com  offers",
                    "offers-1": "  Incredible experience      We provide a superior user experience and a wide array of options encompassing tourist destinations, antiquities, hotels, and restaurants to cater to your individual preference",
                    "offers-2": "  No fees      We don’t charge you any fees or add any administrative charges. And in many cases, your browsing and subscribing can be free of charge.",
                    "offers-3": "  24/7 support      Our customer experience team are on hand around the clock to answer your questions and advocate on your behalf in more than 40 languages.",
                    "offers-4": "  Constant evolution      We strive to deliver an exceptional promotional service for our company, continually prioritizing the enhancement of user experience and providing comprehensive, limitless services to our valued users, both domestically and internationally.",
                    "vip-title": "Become VIP!",
                    "vip-description": "Enjoy priority access to new products, services, and events before they are made available to the general public.",
                    "upgrade-now": "Upgrade now!",
                    "customized-experiences-title": "Customized Experiences",
                    "customized-experiences-description": "Tailor your experience with us according to your preferences and interests, ensuring that every interaction with our brand is personalized and memorable.",
                    "subscribe-now": "Subscribe now",
                    "ask-questions": "Ask a questions",
                    "create an account": "Create an account",
                    "Email Address": "Email Address",
                    "Full Name": "Full Name",
                    "password": "Password",
                    "Confirm password": "Confirm Password",
                    "create account": "Create Account",
                    "Already have an account?": "Already have an account?",
                    "login": "Login",
                    "arabia":"Arbian Vibes",
                    "download-app-text": "For better experience , download our mobile app",
                    "download-app-instruction": "Download the app by clicking the link below :",
                    "copyright": "All copyrights are reserved by 2024 seniors",
                    "Bab-Zuweila-description":"Bab Zuweila is one of the remaining gates of the old city of Cairo, Egypt. \n" +
                        "            Constructed in the 11th century during the Fatimid period, it served as one of \n" +
                        "            the main gates through which people entered medieval Cairo.",
                    "Fayoum-description":"Fayoum is one of the ancient cities in Egypt, located roughly in the center of the country, about 100 kilometers southwest of Cairo. Fayoum is renowned for its natural beauty and rich history, combining Pharaonic, Greek, Roman, and Islamic antiquities. Among the most notable natural landmarks in the area are Wadi El-Rayan and Lake Qarun, both popular tourist destinations known for their stunning landscapes and water activities.",
                    "luxor-description":"Luxor is one of the most important archaeological cities in Egypt, located in the Nile Valley and serving as the capital of Luxor Governorate. Luxor is renowned for its ancient history dating back to the Pharaonic times, boasting numerous temples, tombs, and artifacts that tell deep stories about the ancient Egyptian civilization.",
                    "scrollTop": "Scroll to top",
                    "favorites": "Favorites",
                    "profile": "Profile",
                    "helpIcon": "Help",
                    "userName": "User name",
                    "userEmail": "User email",
                    "generalInfo": "General information",
                    "security": "Security",
                    "inviteFriend": "Invite a friend",
                    "downloadApp": "Download app",
                    "rateUs": "Rate us",
                    "aboutUs": "About us",
                    "help": "Help",
                    "signOut": "Sign Out",
                    "portsaid": "PORTSAID..",
                    "historySea": "Where History Meets the Sea",
                    "exploreHistory": "Let's explore our history",
                    "historicalSites": "Historical Sites",
                    "goldKingsPharaohs": "Gold is made for kings and pharaohs",
                    "ferdinandTitle": "Ferdinand de Lesseps Statue Base",
                    "masalaTitle": "El Masala Garden",
                    "ferialTitle": "Ferial Garden",
                    "montazahTitle": "El Montazah Park",
                    "tawfikiTitle": "El Tawfiki Mosque",
                    "saltMountain": "Salt mountain",
                    "ferdinandStatue": "Ferdinand de lesseps statue base",
                    "masalaGarden": "El masala garden",
                    "ferialTitle": "Ferial Garden",
                    "montazahTitle": "El Montazah Park",
                    "tawfikiTitle": "El Tawfiki Mosque",
                    "museumsTitle": "Museums & Exhibitions",
                    "exploreLandscapes": "Explore our ancient landscapes...",
                    "saintEugenieTitle": "Saint Eugenie Church",
                    "militaryMuseumTitle": "Port Said Military Museum",
                    "nationalMuseumTitle": "Port Said National Museum",
                    "hotelsTitle": "Hotels & Resorts",
                    "findNextStay": "Find your next stay...",
                    "ganatElNorasResort": "Ganat El Noras resort port said",
                    "portoSaidResort": "Porto said resort & spa",
                    "grandHotelPortSaid": "Grand hotel port said",
                    "restaPortSaid": "Resta port said",
                    "maromPortSaidResort": "Marom port said resort",
                    "helnanPortFouadHotel": "Helnan port fouad hotel",
                    "vibesAndRestaurants": "vibes & Restaurants",
                    "youDeserveHappiness": "You deserve happiness!",
                    "corvina_seafood": "Corvina Seafood",
                    "high_burger": "High Burger",
                    "pizza_pino": "Pizza Pino",
                    "avenue_restaurant_cafe": "Avenue Restaurant & Cafe",
                    "algarage_port_said": "Algarage Port Said",
                    "alfa_piatto": "Alfa Piatto",
                }
            },
            ar: {
                translation: {
                    "home": "الرئيسية",
                    "explore": "استكشاف",
                    "contactUs": "اتصل بنا",
                    "aboutUs": "معلومات عنا",
                    "login": "تسجيل الدخول",
                    "scrollToTop": "التمرير إلى الأعلى",
                    "seeTheWorld": "انظر إلى العالم بعيون جديدة.",
                    "trendingSites": "المواقع الرائجة",
                    "searchPlace": "ابحث عن مكان",
                    "Pyramids": "الأهرامات",
                    "Baron palace": "قصر البارون",
                    "Bab Zuweila": "باب زويلة",
                    "Become VIP": "كن عضوًا مميزًا!",
                    "VIP description": "تمتع بأولوية الوصول إلى المنتجات والخدمات والأحداث الجديدة قبل أن تكون متاحة للجمهور العام.",
                    "Upgrade now": "ترقية الآن!",
                    "Customized Experiences": "تجارب مخصصة",
                    "Customized Experiences description": "خصص تجربتك معنا وفقًا لتفضيلاتك واهتماماتك، مما يضمن أن يكون كل تفاعل مع علامتنا التجارية مخصصًا ولا يُنسى.",
                    "Subscribe now": "اشترك الآن",
                    "noResultFound": "لا توجد نتائج",
                    "Home": "الرئيسية",
                    "Ask Questions": "اسأل الأسئلة",
                    "About Us": "معلومات عنا",
                    "Better experience": "للحصول على تجربة أفضل، قم بتنزيل تطبيقنا المحمول",
                    "Download app": "قم بتنزيل التطبيق بالنقر على الرابط أدناه:",
                    "All rights reserved": "جميع الحقوق محفوظة لكبار 2024",
                    "Welcome back": "مرحبًا بعودتك!",
                    "Login message": "سجل الدخول للوصول إلى جميع بياناتك",
                    "Email Address": "عنوان البريد الإلكتروني",
                    "Enter your email address": "أدخل عنوان بريدك الإلكتروني",
                    "Password": "كلمة المرور",
                    "Enter your password": "أدخل كلمة المرور الخاصة بك",
                    "Log in": "تسجيل الدخول",
                    "Forgotten password": "نسيت كلمة المرور؟",
                    "or": "أو",
                    "Create new account": "إنشاء حساب جديد",
                    "slideContent": "انظر إلى العالم بعيون جديدة.",
                    "The Hanging Church": "الكنيسة المعلقة",
                    "Amr ibn Al-A'as Mosque": "مسجد عمرو بن العاص",
                    "Mosque-Madrasa of Sultan Hassan": "مسجد ومدرسة السلطان حسن",
                    "Ibn Tulun Mosque": "مسجد ابن طولون",
                    "Capritage Helwan": "كبريتاج حلوان",
                    "Cairo Opera House": "دار الأوبرا المصرية",
                    "Explore": "استكشاف",
                    "Restaurants": "مطاعم",
                    "Abo Elseed": "أبو السيد",
                    "Abo Elseed description": "أبو السيد هو مطعم مأكولات بحرية مشهور يقع في الإسكندرية، مصر، يشتهر بعروضه اللذيذة والطازجة من المأكولات البحرية. من المحتمل أن يكون في منطقة مزدحمة في الإسكندرية، بالقرب من البحر الأبيض المتوسط. قد يقدم موقعه إطلالات خلابة على الواجهة البحرية أو أجواء حيوية تتميز بها أحياء الإسكندرية الساحلية.",
                    "contact-info": "01212166660 مفتوح دائمًا",
                    "Explore more": "استكشف المزيد",
                    "footer-text": "الرئيسية الصفحات فريقنا اتصل بنا معلومات عنا",
                    "footer-text-links": "لتجربة أفضل، قم بتنزيل تطبيقنا المحمول   قم بتنزيل التطبيق بالنقر على الرابط أدناه:",
                    "footer-copyright": "جميع الحقوق محفوظة لكبار 2024",
                    "intro": "إيجبتور رائدة في نهجها، مكرسة لاستكشاف الوجهات السياحية المتنوعة في مصر.",
                    "about-title": "حول إيجبتور.كوم",
                    "about-1": "  إيجبتور   هي المنصة الإلكترونية المصرية الأولى المكرسة لاكتشاف النسيج الغني من المواقع الأثرية والسياحية عبر مصر. تأسست بواسطة مجموعة من طلاب الجامعات المدفوعين بحب عميق لوطنهم، تسعى إيجبتور إلى عرض التراث الثقافي للبلاد وتعزيز السياحة الداخلية، مما يساهم في نهاية المطاف في النمو الاقتصادي للأمة. تم إطلاق المنصة في منتصف عام 2024، وتقدم معلومات شاملة، واتجاهات، وصور جذابة لكل موقع مميز. مع التركيز الأساسي على إشراك الشباب، والسياح، والزوار، تسعى إيجبتور إلى إلقاء الضوء على روعة مصر، تاريخها المجيد، وسكانها النابضين بالحياة.  تقديم دعم العملاء على مدار الساعة  ، يضمن الموقع سهولة الوصول والمساعدة للمستخدمين.",
                    "about-2": "تتميز إيجبتور كمبادرة رائدة، تقودها مجموعة متحمسة من طلاب الجامعات الذين يلتزمون بعمق بالترويج للكنوز الثقافية في مصر وتعزيز السياحة الداخلية. هذا المشروع المبتكر، الذي تم إطلاقه في النصف الأخير من عام 2024، يعمل كبوابة رقمية للعديد من المواقع الأثرية والسياحية في مصر. من خلال تقديم رؤى مفصلة، واتجاهات دقيقة، وصور جذابة لكل وجهة، تهدف إيجبتور إلى جذب جمهور واسع، بما في ذلك الشباب، والسياح، والزوار، بسحر العجائب التاريخية لمصر.",
                    "about-3": "المهمة الأساسية لإيجبتور ذات شقين: عرض جمال وأهمية مصر التاريخية بينما تساهم أيضًا في الازدهار الاقتصادي للبلاد من خلال تعزيز السياحة الداخلية. من خلال تسليط الضوء على روعة المناظر الطبيعية في مصر، والمعالم، والشعب، تسعى المنصة إلى غرس شعور بالتقدير والدهشة في مستخدميها. وعلاوة على ذلك، من خلال تقديم خدمة العملاء على مدار الساعة، تضمن إيجبتور أن يحصل المستخدمون على دعم وإرشاد مستمرين أثناء استكشافهم للعروض المتنوعة للموقع.",
                    "about-4": "في جوهرها،   تمثل إيجبتور منصة ديناميكية لا تحتفل فقط بتراث مصر الغني   بل تعمل أيضًا كعامل حفاز للنمو المستدام للسياحة والتنمية الاقتصادية. من خلال واجهتها سهلة الاستخدام، والمعلومات الشاملة، والتزامها الثابت بخدمة العملاء، تستعد إيجبتور لتصبح وجهة رئيسية للأفراد الذين يسعون للانغماس في عجائب مصر.",
                    "offers-title": "ما تقدمه إيجبتور.كوم",
                    "offers-1": "  تجربة رائعة      نقدم تجربة مستخدم فائقة ومجموعة واسعة من الخيارات التي تشمل الوجهات السياحية، والآثار، والفنادق، والمطاعم لتلبية تفضيلاتك الفردية",
                    "offers-2": "  بدون رسوم      لا نفرض عليك أي رسوم أو نضيف أي رسوم إدارية. وفي كثير من الحالات، يمكن أن يكون التصفح والاشتراك مجانيًا.",
                    "offers-3": "  دعم على مدار الساعة      فريق تجربة العملاء لدينا متاح على مدار الساعة للإجابة على أسئلتك والدفاع عنك بأكثر من 40 لغة.",
                    "offers-4": "  تطور مستمر      نسعى جاهدين لتقديم خدمة ترويجية استثنائية لشركتنا، مع إعطاء الأولوية باستمرار لتعزيز تجربة المستخدم وتقديم خدمات شاملة وغير محدودة لمستخدمينا الكرام، سواء على المستوى المحلي أو الدولي.",
                    "vip-title": "كن عضوًا VIP!",
                    "vip-description": "استمتع بالوصول الأولوي إلى المنتجات والخدمات والأحداث الجديدة قبل أن تكون متاحة للعامة.",
                    "upgrade-now": "ترقية الآن!",
                    "customized-experiences-title": "تجارب مخصصة",
                    "customized-experiences-description": "خصص تجربتك معنا وفقًا لتفضيلاتك واهتماماتك، لضمان أن يكون كل تفاعل مع علامتنا التجارية شخصيًا ولا يُنسى.",
                    "subscribe-now": "اشترك الآن",
                    "ask-questions": "اطرح سؤالًا",
                    "download-app-text": "لتجربة أفضل، قم بتنزيل تطبيقنا المحمول",
                    "download-app-instruction": "قم بتنزيل التطبيق بالنقر على الرابط أدناه:",
                    "copyright": "جميع الحقوق محفوظة لكبار 2024",
                    "create an account": "إنشاء حساب",
                    "Email Address": "عنوان البريد الإلكتروني",
                    "Full Name": "الاسم الكامل",
                    "password": "كلمة المرور",
                    "Confirm password": "تأكيد كلمة المرور",
                    "create account": "إنشاء حساب",
                    "Already have an account?": "هل لديك حساب؟",
                    "login": "تسجيل الدخول",
                    "Bab-Zuweila-description":"    باب زويلة هو أحد الأبواب المتبقية للمدينة القديمة بالقاهرة، مصر." +
                        "            تم بناؤه في القرن الحادي عشر خلال فترة الفاطميين، وكان واحدًا من" +
                        "     " +
                        "  ,     الأبواب الرئيسية التي دخل الناس من خلالها إلى القاهرة في العصور الوسطى.",
                    "Fayoum-description":"الفيوم هي واحدة من المدن القديمة في مصر، تقع في وسط البلاد تقريبًا وتبعد حوالي 100 كيلومتر جنوب غرب القاهرة. تشتهر الفيوم بجمال طبيعتها وتاريخها العريق، حيث تجمع بين الآثار الفرعونية، واليونانية، والرومانية، والإسلامية. يعتبر وادي الريان وبحيرة قارون من أبرز المعالم الطبيعية في المنطقة، وهما من الأماكن السياحية الشهيرة التي تجذب الزوار للاستمتاع بالمناظر الطبيعية الخلابة والنشاطات المائية.",
                    "arabia":"جلسة عربية",
                    "luxor":'لاقصر',
                    "luxor-description":"تعتبر مدينة الأقصر واحدة من أهم المدن الأثرية في مصر، حيث تقع في صعيد النيل وتعتبر عاصمة محافظة الأقصر. تشتهر الأقصر بتاريخها العريق الذي يعود للعصور الفرعونية، وتضم العديد من المعابد والمقابر والآثار التي تروي قصصًا عميقة عن حضارة مصر القديمة.",
                    "scrollTop": "أعلى الصفحة",
                    "favorites": "المفضلة",
                    "profile": "الملف الشخصي",
                    "helpIcon": "مساعدة",
                    "userName": "اسم المستخدم",
                    "userEmail": "البريد الإلكتروني للمستخدم",
                    "generalInfo": "معلومات عامة",
                    "security": "الأمان",
                    "inviteFriend": "دعوة صديق",
                    "downloadApp": "تحميل التطبيق",
                    "rateUs": "قيمنا",
                    "aboutUs": "معلومات عنا",
                    "help": "مساعدة",
                    "signOut": "تسجيل الخروج",
                    "portsaid": "بورسعيد..",
                    "historySea": "حيث يلتقي التاريخ بالبحر",
                    "exploreHistory": "لنستكشف تاريخنا",
                    "historicalSites": "المواقع التاريخية",
                    "goldKingsPharaohs": "الذهب مصنوع للملوك والفراعنة",
                    "ferdinandTitle": "قاعدة تمثال فيرديناند دي ليسبس",
                    "masalaTitle": "حديقة المسلة",
                    "ferialTitle": "حديقة فريال",
                    "montazahTitle": "حديقة المنتزه",
                    "tawfikiTitle": "مسجد التوفيقي",
                    "saltMountain": "جبل الملح",
                    "ferdinandStatue": "قاعدة تمثال فيرديناند دو ليسبس",
                    "masalaGarden": "حديقة المسلة",
                    "ferialTitle": "حديقة فريال",
                    "montazahTitle": "حديقة المنتزه",
                    "tawfikiTitle": "مسجد التوفيقي",
                    "museumsTitle": "المتاحف والمعارض",
                    "exploreLandscapes": "استكشف مشاهدنا القديمة...",
                    "saintEugenieTitle": "كنيسة القديس يوجيني",
                    "militaryMuseumTitle": "المتحف العسكري بورسعيد",
                    "nationalMuseumTitle": "المتحف الوطني بورسعيد",
                    "hotelsTitle": "الفنادق والمنتجعات",
                    "findNextStay": "ابحث عن إقامتك التالية...",
                    "ganatElNorasResort": "منتجع جنات النورس بورسعيد",
                    "portoSaidResort": "منتجع وسبا بورتو سعيد",
                    "grandHotelPortSaid": "فندق جراند بورسعيد",
                    "restaPortSaid": "ميناء رستا بور سعيد",
                    "maromPortSaidResort": "منتجع ماروم بور سعيد",
                    "helnanPortFouadHotel": "فندق هيلنان بور فؤاد",
                    "vibesAndRestaurants": "الأجواء والمطاعم",
                    "youDeserveHappiness": "تستحق السعادة!",
                    "corvina_seafood": "مأكولات بحرية كورفينا",
                    "high_burger": "برغر هاي",
                    "pizza_pino": "بيتزا بينو",
                    "avenue_restaurant_cafe": "مقهى ومطعم أفنيو",
                    "algarage_port_said": "ميناء الجراج",
                    "alfa_piatto": "ألفا بياتو",
                }
            }
        },
        fallbackLng: 'en',
        debug: true,
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        }
    }, function(err, t) {
        if (err) {
            console.error('Error during i18next initialization:', err);
        } else {
            updateContent();
        }
    });

function toggleLanguage() {
    var currentLanguage = i18next.language;
    var newLanguage = (currentLanguage === 'en') ? 'ar' : 'en';
    changeLanguage(newLanguage);
}

function changeLanguage(language) {
    i18next.changeLanguage(language, (err, t) => {
        if (err) {
            console.error('Error changing language:', err);
        } else {
            localStorage.setItem('selectedLanguage', language);
            var languageToggle = document.getElementById('language-toggle');
            if (languageToggle) {
                languageToggle.checked = (language === 'en');
            }
            updatePageDirection(language);
            updateContent();
        }
    });
}

function updatePageDirection(language) {
    if (language === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }
}

function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            element.innerText = i18next.t(element.getAttribute('data-i18n'));
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            element.setAttribute('placeholder', i18next.t(element.getAttribute('data-i18n-placeholder')));
        });

}

document.addEventListener('DOMContentLoaded', function() {
    var languageToggle = document.getElementById('language-toggle');
    if (languageToggle) {
        languageToggle.addEventListener('change', toggleLanguage);

        var selectedLanguage = localStorage.getItem('selectedLanguage') || i18next.language;
        changeLanguage(selectedLanguage);
    } else {
        console.error('Language toggle element not found.');
    }
});

//weather endpoint
async function getWeatherData(){
    const endPoint = "https://www.meteosource.com/api/v1/free/point?lat=%2030.0444&lon=31.2358&sections=current%2Chourly&language=en&units=auto&key=omrk718789boeo6cjd0o2r8t6kbd0n1kj6w8djkd"

    const headers = {
        'Content-Type': 'application/json'
    };
    const requestOptions = {
        method: 'GET',
        headers: headers,
    }
    const response = await fetch(endPoint, requestOptions,{})
    const data = await response.json();
    console.log(data)
}
getWeatherData();

