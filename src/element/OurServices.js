import React from 'react';
import './OurServices.css'; 

const servicesData = [
    {
        icon: 'bx-bar-chart-alt',
        title: 'Marketing Services',
        description: 'Menggunakan pendekatan kimia dalam marketing services, kami menciptakan reaksi yang tepat untuk memikat pelanggan. Seperti dalam reaksi kimia, kami memastikan setiap langkah pemasaran terorganisir dengan baik untuk menghasilkan hasil yang optimal, sama seperti produk kimia yang sukses melalui proses yang teliti.',
    },
    {
        icon: 'bx-laptop',
        title: 'Web App Development',
        description: 'Dalam pengembangan aplikasi web, kita bisa menggambarkan kode sebagai unsur-unsur yang berinteraksi layaknya reaksi kimia. Setiap baris kode adalah molekul yang berperan dalam membentuk aplikasi yang stabil dan efisien, seperti persamaan kimia yang menyusun dunia kita.',
    },
    {
        icon: 'bx-line-chart',
        title: '24/7 Call Center Services',
        description: 'Layanan pusat panggilan 24/7 kami bekerja seperti reaksi kimia yang tak terhenti, selalu siap memberikan solusi kapan saja, di mana saja. Seperti sel-sel dalam tubuh manusia yang bekerja sepanjang waktu, kami memastikan komunikasi dengan pelanggan berjalan tanpa henti.',
    },
    {
        icon: 'bx-mail-send',
        title: 'Social Media Marketing',
        description: 'Seperti senyawa yang terbentuk dari reaksi kimia yang tepat, pemasaran melalui media sosial adalah tentang menciptakan campuran konten yang menarik dan waktu yang tepat. Kami menggunakan algoritma media sosial layaknya prinsip kimia untuk memastikan "reaksi" positif dari audiens.',
    },
    {
        icon: 'bx-bar-chart-alt',
        title: 'Corporate Business',
        description: 'Dalam dunia bisnis korporasi, kita dapat menyamakan sinergi antar tim dengan reaksi kimia yang efektif. Setiap keputusan strategis dalam perusahaan adalah reaksi yang terencana dengan tepat untuk menciptakan hasil yang berkelanjutan dan memberikan dampak positif pada pasar.',
    },
    {
        icon: 'bx-paint',
        title: 'Creative Consultant',
        description: 'Sebagai konsultan kreatif, kami menerapkan prinsip-prinsip kimia dalam memformulasikan ide-ide baru. Seperti ilmuwan yang menciptakan senyawa inovatif, kami menyatukan kreativitas dan strategi untuk menghasilkan solusi bisnis yang benar-benar menyentuh pelanggan.',
    },
    {
        icon: 'bx-atom',
        title: 'Reaksi Kimia',
        description: 'Materi tentang reaksi kimia meliputi berbagai jenis reaksi, termasuk reaksi redoks, reaksi asam-basa, dan reaksi endothermic serta exothermic. Kami akan membahas mekanisme reaksi dan cara pengukuran laju reaksi.',
    },
    {
        icon: 'bx-flask',
        title: 'Stoikiometri',
        description: 'Stoikiometri adalah cabang kimia yang melibatkan perhitungan kuantitatif dari reaktan dan produk dalam reaksi kimia. Pelajari cara menghitung massa, volume, dan molaritas dalam berbagai situasi.',
    },
    {
        icon: 'bx-vial',
        title: 'Termokimia',
        description: 'Termokimia mempelajari perubahan energi yang terjadi selama reaksi kimia. Kami akan membahas tentang entalpi, entropi, dan energi bebas Gibbs serta aplikasi praktisnya.',
    },
    {
        icon: 'bx-beaker',
        title: 'Kinetika Kimia',
        description: 'Kinetika kimia mempelajari laju reaksi dan faktor-faktor yang mempengaruhi laju reaksi. Pelajari bagaimana konsentrasi, suhu, dan katalis mempengaruhi kecepatan reaksi.',
    },
];

const ServiceCard = ({ icon, title, description }) => (
    <div className="card">
        <i className={`bx ${icon} bx-md`}></i>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
);

const OurServices = () => {
    console.log("Komponen OurServices sedang dirender");
    return (
        <div className="wrapper">
            <h1>Our Services</h1>
            <p>Kuasai konsep kimia SMA kelas 12 dengan materi lengkap dan soal-soal latihan. Persiapkan dirimu untuk ujian nasional dengan materi kimia terpercaya.</p>
            <div className="content-box">
                {servicesData.map((service, index) => (
                    <ServiceCard 
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default OurServices;
