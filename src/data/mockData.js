export const LOGO_URL = "https://instagram.fcgk27-1.fna.fbcdn.net/v/t51.2885-19/470010174_1039236401306843_9173935069379644331_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby43NjEuYzIifQ&_nc_ht=instagram.fcgk27-1.fna.fbcdn.net&_nc_cat=111&_nc_oc=Q6cZ2gEbAKZGYa2hPYrQ63qlnzsO34455as5ZyXU63kWnSeA6t2JFA9vb6eUBmsEXadQsMwoY4A5qDSiekR9YwwlekLX&_nc_ohc=URwZkzpsRcMQ7kNvwHMpQ0Q&_nc_gid=H5csF1SAkxfBTj0NShTyeA&edm=APs17CUBAAAA&ccb=7-5&oh=00_AQFeh5MM2_6a0CmGkjRnkSnirm7NrdaiXPxpg2VGV91nCw&oe=6A8CD70B&_nc_sid=10d13b";

// Mock Data — Bunga Cerita, Handmade Flowers Bouquet | Tangerang

export const PRODUCTS = [
  {
    id: 1,
    name: "Custom Large Bouquet",
    category: "Custom Large",
    price: 150000,
    rating: 5.0,
    reviews: 32,
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?q=80&w=600",
    badge: "Best Seller",
    description: "Buket handmade ukuran besar dengan pilihan bunga flanel premium. Cocok untuk hadiah wisuda, ulang tahun, atau momen spesial lainnya.",
    details: {
      flowers: "Bunga flanel handmade pilihan (mawar, lily, tulip, matahari, dll)",
      size: "Tinggi ±45cm, Lebar ±35cm",
      wrapping: "Korean wrapping paper premium & pita satin",
      care: "Bunga handmade tahan lama, hindari terkena air."
    }
  },
  {
    id: 2,
    name: "Custom Medium Bouquet",
    category: "Custom Medium",
    price: 100000,
    rating: 4.9,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1494336956603-39a3f0e3ae12?q=80&w=600",
    badge: "",
    description: "Buket handmade ukuran sedang, pas untuk kado anniversary, hari ibu, atau sekadar memberi kejutan manis.",
    details: {
      flowers: "Bunga flanel/rajut handmade (bisa mix beberapa jenis)",
      size: "Tinggi ±35cm, Lebar ±25cm",
      wrapping: "Korean wrapping paper & pita satin",
      care: "Tahan sangat lama. Hindari tempat lembab."
    }
  },
  {
    id: 3,
    name: "Custom Small Bouquet",
    category: "Custom Small",
    price: 65000,
    rating: 4.8,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?q=80&w=600",
    badge: "",
    description: "Buket handmade mungil yang menggemaskan, ukuran pas untuk hadiah kecil atau pelengkap kado utama.",
    details: {
      flowers: "3-5 tangkai bunga flanel handmade",
      size: "Tinggi ±25cm, Lebar ±18cm",
      wrapping: "Wrapping paper minimalis & pita",
      care: "Simpan di tempat kering."
    }
  },
  {
    id: 4,
    name: "Graduation Sunflower Bouquet",
    category: "Custom Large",
    price: 135000,
    rating: 4.9,
    reviews: 27,
    image: "https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?q=80&w=600",
    badge: "Graduation",
    description: "Buket bunga matahari handmade spesial wisuda. Bisa ditambahkan nama atau ucapan custom.",
    details: {
      flowers: "Bunga matahari flanel handmade, baby breath, daun hijau",
      size: "Tinggi ±40cm, Lebar ±30cm",
      wrapping: "Brown kraft paper & jute ribbon",
      care: "Bunga tahan selamanya, cocok sebagai kenang-kenangan."
    }
  },
  {
    id: 5,
    name: "Rose Garden Mix Bouquet",
    category: "Custom Medium",
    price: 120000,
    rating: 4.8,
    reviews: 19,
    image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?q=80&w=600",
    badge: "",
    description: "Paduan mawar handmade warna-warni yang ceria dari bahan flanel berkualitas tinggi.",
    details: {
      flowers: "Mawar flanel merah, pink, putih, dan kuning",
      size: "Tinggi ±35cm, Lebar ±28cm",
      wrapping: "Korean style wrapping & satin ribbon",
      care: "Simpan di tempat kering, jauhkan dari air."
    }
  },
  {
    id: 6,
    name: "Non-Floral Snack Bouquet",
    category: "Non-Floral",
    price: 85000,
    rating: 4.7,
    reviews: 34,
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600",
    badge: "",
    description: "Buket unik berisi snack dan coklat favorit plus bunga flanel mini. Hadiah kreatif yang bikin senang!",
    details: {
      flowers: "2-3 tangkai bunga flanel mini + snack pilihan",
      size: "Tinggi ±35cm",
      wrapping: "Wrapping paper lucu & pita",
      care: "Perhatikan tanggal kedaluwarsa snack."
    }
  },
  {
    id: 7,
    name: "Candy Bouquet Vol. 2",
    category: "Non-Floral",
    price: 95000,
    rating: 4.9,
    reviews: 22,
    image: "https://images.unsplash.com/photo-1481391032119-d89fee407e44?q=80&w=600",
    badge: "New",
    description: "Bouquet permen dan coklat premium edisi Vol. 2 dengan tambahan bunga handmade dan dekorasi lucu.",
    details: {
      flowers: "Bunga flanel mini + aneka permen & coklat",
      size: "Tinggi ±30cm",
      wrapping: "Premium gift wrapping & ribbon",
      care: "Simpan di suhu ruangan."
    }
  },
  {
    id: 8,
    name: "Elegant White Lily Bouquet",
    category: "Custom Large",
    price: 160000,
    rating: 5.0,
    reviews: 15,
    image: "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?q=80&w=600",
    badge: "",
    description: "Buket lily putih handmade yang elegan. Setiap kelopak dibentuk satu per satu. Cocok untuk wedding gift.",
    details: {
      flowers: "Lily putih flanel premium handmade",
      size: "Tinggi ±45cm, Lebar ±30cm",
      wrapping: "Premium wrapping paper putih & pita satin emas",
      care: "Bisa dibersihkan dengan kuas halus."
    }
  },
  {
    id: 9,
    name: "Mini Love Bouquet",
    category: "Custom Small",
    price: 50000,
    rating: 4.7,
    reviews: 41,
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=600",
    badge: "",
    description: "Buket mini super cute untuk kejutan kecil yang berkesan. Ukuran travel-friendly, harga terjangkau.",
    details: {
      flowers: "2-3 tangkai bunga flanel mini",
      size: "Tinggi ±20cm",
      wrapping: "Mini wrapping paper & pita kecil",
      care: "Simpan di tempat kering."
    }
  },
  {
    id: 10,
    name: "Custom PO Special Request",
    category: "Custom PO",
    price: 200000,
    rating: 5.0,
    reviews: 12,
    image: "https://images.unsplash.com/photo-1462275646964-a0e3c11f18a6?q=80&w=600",
    badge: "Pre-Order",
    description: "Pesanan khusus pre-order untuk desain buket yang lebih detail dan kompleks. Konsultasi desain gratis via DM.",
    details: {
      flowers: "Sesuai request customer (jenis, warna, jumlah)",
      size: "Sesuai request",
      wrapping: "Sesuai request / rekomendasi kami",
      care: "Instruksi perawatan akan disertakan."
    }
  }
];

export const STORE_INFO = {
  name: "Bunga Cerita",
  tagline: "#tellstoriesthroughflowers",
  description: "Handmade Flowers Bouquet | Tangerang",
  location: "Near UPH, BINUS, UMN, BSD",
  orderMethod: "Order by DM Instagram",
  type: "Open for custom only",
  instagram: "https://www.instagram.com/galeribungacerita/",
  whatsapp: "6287798765432",
  phone: "+62 877-9876-5432"
};

export const TRACKING_DATA = {
  "BC-1001": {
    orderId: "BC-1001",
    customerName: "Indra Wijaya",
    productName: "Custom Large Bouquet — Graduation",
    recipientName: "Siti Rahmawati",
    deliveryAddress: "Kampus UPH, Lippo Karawaci, Tangerang",
    deliveryDate: "2026-08-20",
    status: "Delivered",
    statusSteps: [
      { step: "Order Diterima", desc: "Pesanan masuk via DM dan pembayaran dikonfirmasi.", time: "2026-08-18 10:00", completed: true },
      { step: "Proses Pembuatan", desc: "Sedang dibuatkan bunga handmade sesuai request.", time: "2026-08-19 09:00", completed: true },
      { step: "Siap Diambil / Dikirim", desc: "Buket selesai dibuat dan siap dikirim.", time: "2026-08-20 08:00", completed: true },
      { step: "Diterima", desc: "Diterima oleh Siti Rahmawati di lokasi wisuda.", time: "2026-08-20 11:30", completed: true }
    ]
  },
  "BC-1002": {
    orderId: "BC-1002",
    customerName: "Dewi Lestari",
    productName: "Custom Medium Bouquet — Anniversary",
    recipientName: "Budi Santoso",
    deliveryAddress: "Kampus BINUS Alam Sutera, Tangerang Selatan",
    deliveryDate: "2026-08-22",
    status: "Processing",
    statusSteps: [
      { step: "Order Diterima", desc: "Pesanan masuk via DM dan pembayaran dikonfirmasi.", time: "2026-08-20 14:15", completed: true },
      { step: "Proses Pembuatan", desc: "Sedang dibuatkan bunga handmade sesuai request.", time: "2026-08-21 09:00", completed: true },
      { step: "Siap Diambil / Dikirim", desc: "Menunggu jadwal pengiriman.", time: "-", completed: false },
      { step: "Diterima", desc: "Menunggu pengiriman.", time: "-", completed: false }
    ]
  },
  "BC-1003": {
    orderId: "BC-1003",
    customerName: "Rian Hidayat",
    productName: "Custom PO Special Request",
    recipientName: "Anisa Putri",
    deliveryAddress: "Kampus UMN, Gading Serpong, Tangerang",
    deliveryDate: "2026-08-25",
    status: "Pending",
    statusSteps: [
      { step: "Order Diterima", desc: "Pesanan terdaftar. Menunggu konfirmasi desain.", time: "2026-08-20 20:00", completed: true },
      { step: "Proses Pembuatan", desc: "Akan dimulai setelah desain dikonfirmasi.", time: "-", completed: false },
      { step: "Siap Diambil / Dikirim", desc: "Menunggu proses pembuatan.", time: "-", completed: false },
      { step: "Diterima", desc: "Menunggu pengiriman.", time: "-", completed: false }
    ]
  }
};
