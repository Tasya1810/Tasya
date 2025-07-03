import React from 'react';
import './About.css';
import fotoku from '../assets/fotoku.jpg'; // Ganti dengan path gambar kamu

const About = () => {
  return (
    <section className="about-hero" id="about">
      <div className="about-left">
        <p className="greeting">About Me</p>
        <h1 className="headline">
          Hi <span className="highlight">I'm Tasya Sarah</span> {/* Ganti nama */}
        </h1>
        <p className="description">
          Perkenalkan saya Tasya Sarah Octariani Faana, saya adalah anak pertama dari tiga bersaudara. Saya adalah salah satu mahasiswi Universitas Satya Terra Bhinneka angkatan 2024. 
        </p>
      </div>

      <div className="about-right">
        <img src={fotoku} alt="My profile" className="profile-photo" />
      </div>
    </section>
  );
};

export default About;
