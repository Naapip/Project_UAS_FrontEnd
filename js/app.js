// AngularJS App
var app = angular.module('travelApp', []);

// Checkout Controller
app.controller('CheckoutController', function ($scope) {
  $scope.message = 'Selesaikan pemesanan tiket Anda di sini.';
});


// Hero Controller
app.controller('HeroController', function ($scope) {
  $scope.heroImages = [
    {
      src: '/images/home/labuan-bajo.jpg',
      alt: 'Labuan Bajo',
      title: 'Labuan Bajo',
      description: 'Labuan Bajo merupakan sebuah surga tersembunyi yang ada di Indonesia bagian timur. Desa ini terletak di Kecamatan Komodo, Kabupaten Manggarai Barat, Provinsi Nusa Tenggara Timur yang berbatasan langsung dengan Nusa Tenggara Barat dan dipisahkan oleh Selat Sape.',
    },
    {
      src: '/images/home/harimau.jpg',
      alt: 'Harimau',
      title: 'Harimau Sumatra',
      description: 'Terkenal dengan bulu berwarna jingga dan corak hitam belang, Harimau merupakan salah satu mamalia paling ikonik yang menyimbolkan kekuatan, keindahan serta pentingnya konservasi. Sayangnya, harimau berada di ambang kepunahannya..',
    },
    {
      src: '/images/home/raflesia.jpg',
      alt: 'Raflesia Arnoldi',
      title: 'Raflesia Arnoldi',
      description: "Rafflesia arnoldi tidak memiliki daun, batang atau akar, dan merupakan tanaman parasit yang tumbuh pada tanaman merambat dalam genus Tetrastigma.",
    },
    {
      src: '/images/home/pink-beach.jpg',
      alt: 'Pink Beach',
      title: 'Pink Beach',
      description: 'Keunikan pantai Pink Lombok ini bisa dilihat dari pasir pantai yang disini dulunya berbentuk dan berwarna sama dengan pasir pantai pada umumnya, yaitu putih lembut. Namun pasir putihnya yang halus tercempur dengan terumbu karang berwarna merah meuda, menjadikan pasir pantai disini berwarna merah muda atau pink.',
    },
  ];
});


// Destination Highlight Controller
app.controller('DestinationController', function ($scope) {
  $scope.destinations = [
    {
      name: 'Morotai',
      image: '/images/home/morotai.jpg',
      link: 'morotai.html',
    },
    {
      name: 'Borobudur',
      image: '/images/home/borobudur.jpg',
      link: 'borobudur.html',
    },
    {
      name: 'Mandalika',
      image: '/images/home/mandalika.jpg',
      link: 'mandalika.html',
    },
    {
      name: 'Labuan Bajo',
      image: '/images/home/labuan-bajo.jpg',
      link: 'labuan-bajo.html',
    },
    {
      name: 'Likupang',
      image: '/images/home/likupang.jpg',
      link: 'likupang.html',
    },
    {
      name: 'Bali',
      image: '/images/home/bali.jpg',
      link: 'bali.html',
    },
    {
      name: 'Raja Ampat',
      image: '/images/home/raja-ampat.jpg',
      link: 'raja-ampat.html',
    },
    {
      name: 'Monas',
      image: '/images/home/monas.jpg',
      link: 'monas.html',
    },
    {
      name: 'Lake Toba',
      image: '/images/home/danau-toba.jpg',
      link: 'lake-toba.html',
    },
  ];
});


// Kuliner Inspiration Controller
app.controller('InspirationController', function() {
    var inspCtrl = this;
  
    // Data Items
    inspCtrl.items = [
      {
        image: '/images/home/rendang.jpg',
        title: 'Rendang',
        description: 'Rendang adalah hidangan daging asal Sumatera Barat yang dimasak dalam santan dan rempah-rempah hingga empuk dan beraroma kaya. Hidangan ini merupakan bagian dari masakan Minangkabau dan sangat populer di seluruh Indonesia dan juga di luar negeri.',
        link: 'https://cookpad.com/id/resep/24248231-rendang-daging-dan-kentang?ref=search&search_term=rendang+daging'
      },
      {
        image: '/images/home/pempek.jpg',
        title: 'Pempek',
        description: 'Pempek adalah makanan khas Palembang, Sumatera Selatan, yang terbuat dari campuran daging ikan dan tepung sagu, dibentuk dan direbus sebelum digoreng.Hidangan ini biasanya disajikan dengan kuah cuko yang asam, manis, dan pedas, menciptakan perpaduan rasa yang khas. Pempek sangat populer di seluruh Indonesia dan memiliki berbagai variasi seperti kapal selam, lenjer, dan adaan.',
        link: 'https://cookpad.com/id/resep/24258505-pempek-sutra-pempek-putih-telur?ref=search&search_term=pempek'
      },
      {
        image: '/images/home/ayam-betutu.jpg',
        title: 'Ayam Betutu',
        description: 'Ayam Betutu adalah hidangan tradisional khas Bali yang terdiri dari ayam utuh yang dimasak dengan bumbu rempah-rempah khas Bali, seperti kunyit, lengkuas, jahe, cabai, dan bawang. Ayam ini dimasak perlahan dengan cara dipanggang atau dikukus, sehingga menghasilkan daging yang empuk dan kaya rasa. Ayam Betutu biasanya disajikan sebagai menu istimewa dalam acara adat Bali, tetapi kini populer di berbagai daerah di Indonesia.',
        link: 'https://cookpad.com/id/resep/16692742-ayam-betutu-kuah-dan-daun-singkong?ref=search&search_term=ayam+betutu'
      },
      {
        image: '/images/home/soto-banjar.jpg',
        title: 'Soto Banjar',
        description: 'Soto Banjar adalah hidangan sup tradisional khas Banjarmasin, Kalimantan Selatan, yang berbahan dasar ayam dengan kuah bening beraroma rempah-rempah seperti kayu manis, cengkeh, dan kapulaga. Soto ini biasanya disajikan dengan pelengkap seperti ketupat, telur rebus, suwir ayam, perkedel, dan sambal. Cita rasanya yang gurih dan harum menjadikan Soto Banjar salah satu hidangan nusantara yang terkenal di seluruh Indonesia.',
        link: 'https://cookpad.com/id/resep/24228678-soto-banjar?ref=search&search_term=soto+banjar'
      },
      {
        image: '/images/home/lumpia.jpg',
        title: 'Lumpia',
        description: 'Lumpia adalah makanan khas Jawa Tengah, tepatnya di Kota Semarang. Lumpia sering sekali dijadikan oleh-oleh Ketika berwisata ke Kota Semarang. Lumpia itu sendiiri memiliki berbagai macam isian, mulai dari ayam, rebung, sayuran, hingga udang.',
        link: 'https://cookpad.com/id/resep/24263611-lumpia-isi-ayam-dan-sayur?ref=search&search_term=lumpia'
      },
      {
        image: '/images/home/gudeg.jpg',
        title: 'Gudeg',
        description: 'Gudeg adalah makanan khas DI Yogyakarta. Gudeg merupakan olahan yang berbahan dasar nangka muda dan dimasak dengan santan ini mempunyai cita rasa yang khas, yaitu manis. Gudeg biasanya disajikan dengan lauk ayam kampung, telur, tempe ayau tahu bacem, dan sambal korek.',
        link: 'https://cookpad.com/id/resep/16737236-gudeg-mudah-dan-simple?ref=search&search_term=gudeg'
      },
      {
        image: '/images/home/kerak-telor.jpg',
        title: 'Kerak Telor',
        description: 'Kerak Telor adalah makanan khas Betawi, terbuat dari telur ayam atau bebek, ketan dan ebi yang ditaburi bawang goreng, dan kelapa sangria. Cita rasanya pedas asin dan ada intipnya. Makanan ini masih dapat kita jumpai Ketika ada festival, seperti saat Pekan Raya Jakarta.',
        link: 'https://cookpad.com/id/resep/24001773-kerak-telor-betawi?ref=search&search_term=kerak+telor'
      },
      {
        image: '/images/home/tempoyak.jpg',
        title: 'Tempoyak',
        description: 'Tempoyak adalah makanan fermentasi khas Melayu yang terbuat dari durian yang difermentasi hingga memiliki cita rasa asam dan aroma yang khas. Hidangan ini sering digunakan sebagai bumbu masakan, seperti gulai atau sambal, dan populer di berbagai daerah di Sumatra dan Kalimantan. Tempoyak memiliki rasa unik yang kaya, menjadikannya favorit bagi pecinta kuliner tradisional.',
        link: 'https://cookpad.com/id/resep/16787532-tempoyak?ref=search&search_term=tempoyak'
      },
    ];
    // Popup Logic
    inspCtrl.popupVisible = false;
    inspCtrl.selectedItem = null;
  
    inspCtrl.openPopup = function(item) {
      inspCtrl.selectedItem = item;
      inspCtrl.popupVisible = true;
    };
  
    inspCtrl.closePopup = function() {
      inspCtrl.popupVisible = false;
      inspCtrl.selectedItem = null;
    };
  });


  // Travel Tips Controller with Images
app.controller("TravelTipsController", function ($scope) {
  $scope.tips = [
    {
      title: "Pack Smart",
      description: "Learn how to pack efficiently with minimal luggage for any trip.",
      image: "/images/home/smart-packing.jpg",
      link: "https://safepackaginguk.com/some-awesome-packing-tips-to-help-you-pack-light-and-smart/",
    },
    {
      title: "Travel Insurance",
      description: "Why travel insurance is essential for a worry-free journey.",
      image: "/images/home/travel-insurance.jpg",
      link: "https://www.cekpremi.com/blog/manfaat-travel-insurance/",
    },
    {
      title: "Local Culture",
      description: "Tips on respecting local cultures and traditions while traveling.",
      image: "/images/home/local-culture.jpg",
      link: "https://sacredfootprints.com/authentic-local-culture-in-indonesia/",
    },
    {
      title: "Money Management",
      description: "Learn how to handle currency exchange and avoid overspending.",
      image: "/images/home/money-management.jpg",
      link: "https://www.myodysseytours.com/knows/money-management-tips-for-traveling-abroad.html",
    },
    {
      title: "Safety First",
      description: "Stay safe with these essential travel security tips.",
      image: "/images/home/safety-first.jpg",
      link: "https://zetizen.jawapos.com/hobbies/food-and-traveling/02/02/2023/safety-first-have-fun-then",
    },
    {
      title: "Solo Travel Tips",
      description: "Make the most of your solo adventures with these practical tips.",
      image: "/images/home/solo-traveling-tips.jpg",
      link: "https://www.orami.co.id/magazine/tips-solo-traveling",
    },
  ];
});

