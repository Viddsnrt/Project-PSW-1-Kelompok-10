import React from 'react';
import './OurServices.css'; 

const servicesData = [
    {
        title: 'Program Belajar',
        description: 'Menyediakan materi-materi pembelajaran kimia kelas 12 meliputi Sifat Koligatif Larutan, Rekasi Redoks dan Elektorinika, Kimia Unsur, Senyawa Karbon, Benzena dan Turunannya, Makromolekul',
    },
    {
        title: 'Latihan dan Mini Kuis',
        description: 'Menyediakan latihan soal untuk melatih kemampuan pengguna dalam belajar kimia. Memiliki mini kuis di setiap materi nya yang dapat membantu pengguna untuk lebih memahami materi.',
    },
    {
        title: 'Simulasi Laboratorium',
        description: 'Membantu pengguna lebih mudah untuk menghitung pH larutan dan Titrasi dengan simulasi laboratorium virtual.',
    },
    {
        title: 'Komunitas Belajar Kimia',
        description: 'Memiliki komunitas yang dapat menghubungakn sesama pembelajar dimana pengguna dapat saling mengajukan pertanyaan dan menjelajahi kimia bersama.',
    },
    {
        title: 'Webinar Eksklusif Kimia',
        description: 'Menyediakan webinar-webinar eksklusif bersama pembicara-pembicara berpengalaman mengenai matri relevan dengan kimia dan hal-hal menarik lainnya.',
    },
    {
        title: 'Perpustakaan Kimia',
        description: 'Menyediakan berbagai sumber daya belajar kimia yang meliputi e-book kimia, video belajar kimia, catatan belajar kimia, dan artikel-artikel kimia.',
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
            <h1>Layanan Kami</h1>
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
