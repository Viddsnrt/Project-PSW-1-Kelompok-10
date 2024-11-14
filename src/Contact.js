import React, { useState } from "react";
import "./contact.css";

// ContactInfo Component
const ContactInfo = () => (
  <div className="contactInfo">
    <div className="box">
      <div className="icon">
        <img
          src="https://img.icons8.com/ios-filled/50/000000/marker.png"
          alt="Map Icon"
        />
      </div>
      <div className="text">
        <h3>Address</h3>
        <p>
          <a
            href="https://maps.google.com/?q=Institut Teknologi Del, Sitoluama, Kec. Balige, Toba, Sumatera Utara 22381"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Depan gerbang Institut Teknologi Del, Sitoluama, Kec. Balige, Toba,
            Sumatera Utara 22381
          </a>
        </p>
      </div>
    </div>

    <div className="box">
      <div className="icon">
        <img
          src="https://img.icons8.com/ios-filled/50/000000/phone.png"
          alt="Phone Icon"
        />
      </div>
      <div className="text">
        <h3>Phone</h3>
        <p>
          <a
            href="tel:+6282349689976"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            +62 823-4968-9976
          </a>
        </p>
      </div>
    </div>

    <div className="box">
      <div className="icon">
        <img
          src="https://img.icons8.com/ios-filled/50/000000/new-post.png"
          alt="Email Icon"
        />
      </div>
      <div className="text">
        <h3>Email</h3>
        <p>
          <a
            href="mailto:tanjungb62@gmail.com"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            tanjungb62@gmail.com
          </a>
        </p>
      </div>
    </div>
  </div>
);

// ContactForm Component
const ContactForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // Here, you can handle form submission, like sending the data to an API.
    setForm({ fullName: "", email: "", message: "" }); // Clear the form
  };

  return (
    <div className="contactForm">
      <form onSubmit={handleSubmit}>
        <h2>Send Message</h2>
        <div className="inputBox">
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleInputChange}
            required
          />
          <span>Full Name</span>
        </div>
        <div className="inputBox">
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            required
          />
          <span>Email</span>
        </div>
        <div className="inputBox">
          <textarea
            name="message"
            value={form.message}
            onChange={handleInputChange}
            required
          />
          <span>Type your Message...</span>
        </div>
        <div className="inputBox">
          <input type="submit" name="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

// Main ContactUs Component
const ContactUs = () => {
  return (
    <section className="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p>
          Jika Anda memiliki pertanyaan atau memerlukan bantuan lebih lanjut
          dengan pelajaran kimia kelas 12 Anda, kami siap membantu! Baik Anda
          sedang mempelajari topik lanjutan seperti termodinamika, kimia organik,
          atau reaksi kimia, hubungi kami, dan kami akan memastikan Anda memiliki
          sumber daya dan dukungan yang Anda perlukan. Hubungi kami menggunakan
          detail di bawah ini atau kirimkan pesan langsung kepada kami melalui
          nomor telepon dan Email dibawah ini.
        </p>
      </div>
      <div className="container">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactUs;
