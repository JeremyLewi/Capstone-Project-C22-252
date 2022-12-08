import React from 'react';
import hero from '../assets/hero.svg';
import quality from '../assets/quality.svg';
import book from '../assets/book-time.svg';
import about from '../assets/about-img.svg';
import card1 from '../assets/card1.svg';
import card2 from '../assets/card2.svg';
import card3 from '../assets/card3.svg';
import card4 from '../assets/card4.svg';
import card5 from '../assets/card5.svg';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function HomePage() {
	return (
		<>
			<div className="hero">
				<div className="hero-content__left">
					<h1>
						Layanan Aspirasi dan Pengaduan Online <br /> Masyarakat Kota Medan
					</h1>
					<p>
						Sampaikan Aspirasi dan Keluhan Anda <br /> kepada Pemerintah Kota Medan
					</p>

					<Link to="/notes/new">
						<button className="hero-btn">Lapor</button>
					</Link>
				</div>
				<img src={hero} alt="hero" />
			</div>
			<div id="about" className="about">
				<h2>Tentang Kami</h2>
				<p>
					Medan Now adalah Aplikasi Pengelolaan Pengaduan Masyarakat dan Pelayanan terhadap <br />
					semua aspirasi dan pengaduan masyarakat Kota Medan
				</p>

				<div className="about-content">
					<div className="about-content__description">
						<p>
							Pengelolaan pengaduan pelayanan publik disetiap organisasi penyelenggara di Kota Medan
							belum terkelola secara efektif dan teritegrasi. Oleh karena itu Medan Now hadir untuk
							mengatasi masalah tersebut. Dengan adanya Medan Now masyarakat bisa melakukan
							pengaduan secara online.
						</p>
						<div>
							<div className="about-content__goal">
								<div className="about-content-goal__img">
									<img src={quality} alt="quality-img"></img>
								</div>
								<div className="about-content-goal__body">
									<h3>Meningkatkan Mutu Pelayanan</h3>
									<p>
										Dengan adanya Aplikasi Medan Now ini diharapkan dapat meningkatkan pelayanan
										terhadap masyarakat.
									</p>
								</div>
							</div>
							<div className="about-content__goal">
								<div className="about-content-goal__img">
									<img src={book} alt="book-img"></img>
								</div>
								<div className="about-content-goal__body">
									<h3>Praktis dan Hemat Waktu</h3>
									<p>
										Dengan adanya Medan Now ini masyarakat tidak perlu datang ke instansi terkait
										untuk melakukan pengaduan.
									</p>
								</div>
							</div>
						</div>
					</div>
					<img className="about-svg" src={about} alt="quality"></img>
				</div>
			</div>
			<div id='procedures' className="steps">
				<h2>Prosedur Pelaporan</h2>
				<p>Berikut adalah prosedur pengaduan di Aplikasi Medan Now</p>
				<div className="step-cards">
					<div className="step-card__item">
						<img src={card1} alt="card1"></img>
						<h3>1. Daftar/Masuk</h3>
						<p>Buat akun anda dan login ke Medan Now</p>
					</div>
					<div className="step-card__item">
						<img src={card2} alt="card2"></img>
						<h3>2. Tulis Laporan</h3>
						<p>Tulis laporan keluhan anda dengan jelas</p>
					</div>
					<div className="step-card__item">
						<img src={card3} alt="card3"></img>
						<h3>3. Proses Verifikasi</h3>
						<p>Tunggu sampai laporan anda diverifikasi</p>
					</div>
					<div className="step-card__item">
						<img src={card4} alt="card4"></img>
						<h3>4. Tindak Lanjut</h3>
						<p>Laporan anda sedang dalam tindak lanjut</p>
					</div>
					<div className="step-card__item">
						<img src={card5} alt="card5"></img>
						<h3>5. Selesai</h3>
						<p>Tulis laporan keluhan anda dengan jelas</p>
					</div>
				</div>
			</div>
			<div id='statistic' className="statistic">
				<h2>Statistik </h2>
				<p>Berikut adalah statistik pengaduan masyarakat kepada kami</p>
				<div className="statistic-items">
					<div className="statistic-item">
						<h3>120</h3>
						<p>Jumlah Pengaduan</p>
					</div>
					<div className="statistic-item">
						<h3>70</h3>
						<p>Pengaduan Di Proses</p>
					</div>
					<div className="statistic-item">
						<h3>50</h3>
						<p>Pengaduan Selesai</p>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

export default HomePage;
