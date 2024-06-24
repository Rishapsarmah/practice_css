import React, { useEffect } from "react"
import Marquee from "react-fast-marquee"
import "./App.css"
import image100 from "./assets/img1.png"
import image101 from "./assets/img2.png"
import image102 from "./assets/img3.png"
import image103 from "./assets/img4.png"
import image104 from "./assets/img5.png"
import AOS from "aos"
import "aos/dist/aos.css"
import image106 from "./assets/img6.png"
import image108 from "./assets/img8.png"
import image109 from "./assets/img9.png"
import image110 from "./assets/img10.png"
import image111 from "./assets/img11.png"
import image112 from "./assets/img12.png"
import image113 from "./assets/img13.png"
import image114 from "./assets/img14.png"
import image115 from "./assets/img15.png"
import image116 from "./assets/img16.png"
import image117 from "./assets/img17.png"
import image118 from "./assets/img18.png"
import image119 from "./assets/img19.png"
import ItemList from "./ItemList/ItemList"
import Header from "./Header/Header"
function App() {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<>
			<section className="hero-container">
				<Header></Header>
				<div>
					<div className="hero-head">
						{" "}
						<span className="hero-head1 ">The Fastest Email </span>
						<span>Experience Ever Made</span>
					</div>
					<p className="hero-head2">
						{" "}
						<span>
							AI-powered email built for high-performing teams.
						</span>{" "}
						<span>Get 4 hours back every week.</span>
					</p>
					<div className="hero-btn1">
						<button className="hero-btn">Get Started </button>
					</div>
				</div>
				<div className="image_wrapper">
					<Marquee direction="left" speed={100} delay={5}>
						<div className="marquee">
							<img src={image108} alt="" className="image_wrapper8" />
						</div>
						<div className="image_wrapper9">
							<img src={image109} alt="" />
						</div>
						<div className="image_wrapper10">
							<img src={image110} alt="" />
						</div>
						<div className="image_wrapper11">
							<img src={image111} alt="" />
						</div>
						<div className="image_wrapper12">
							<img src={image112} alt="" />
						</div>
						<div className="image_wrapper13">
							<img src={image113} alt="" />
						</div>
						<div className="image_wrapper14">
							<img src={image114} alt="" />
						</div>
					</Marquee>
				</div>

				<div className="">
					<div className="ten_M-container">
						<img src={image100} className="ten_M-img" />
					</div>
					<div className="ten_M-txt">
						<span>Superhuman saves teams over</span>
						<span className="ten_M-txt2">
							<span className="ten_M-inner-txt">
								{" "}
								10 million hours &nbsp;{" "}
							</span>{" "}
							every single hour
						</span>
					</div>
				</div>

				<div className="image-text-comn">
					<div className="image-text-container">
						<div>
							<img src={image101} className="image-text" />
						</div>
						<div className="text-image">
							Fly through your email twice as fast as before .Be more
							responsive to what matters most. Eliminate email anxiety once
							and for all.
						</div>
					</div>
					<div className="text-image-contain1">
						<div className="text-image-container1">
							<div className="text-image">
								<h1 className="text-image-header">
									Built for teams that use{" "}
									<span className="text-color-gmail">Gmail</span> or{" "}
									<span className="text-color-outlook">outlook</span>
								</h1>
							</div>
							<div className="image-text1">
								{" "}
								<img src={image102} alt="" className="image-txt" />
							</div>
						</div>
					</div>
				</div>
				{/* <div className='image-button-container'>
        <img src={image103} />
       </div> */}
				<div className="div-image-conatainer">
					<img src={image104} />
				</div>
				<section className="scrool-effect">
					<div className="scrool-effect1 ">
						<div
							className="btn"
							data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="1500"
						>
							{" "}
							<h1 className="scroll-effect-para1">Fix errors as you go</h1>
							<h2 className="scroll-effect-para2">
								Speed up your typing by 30-50%
							</h2>
							<p className="scroll-effect-para">
								Autocorrect fixes errors as you go-extra chararters,
								missing characters,transposed characters, missing
								punctuation , incorrect capitalization - to name just a
								few. It beats the autocoreect in Gmail and Outlook across
								multiple benchmarks.Most importantly , you go fater.
								Autocorrect incraeses typing speed by 30-50%.
							</p>
						</div>
						<div
							className="btn1"
							data-aos="fade-down"
							data-aos-easing="linear"
							data-aos-duration="1500"
						>
							<img src={image106} className="btn1-img" />
						</div>
					</div>
					<div
						className="scrool-effect1"
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="1500"
					>
						<div className="scrool-effect-text">
							<h1 className="scrool-effect-text1">
								Share read statuses across your team
							</h1>
							<h2 className="scrool-effect-text2">
								communicate and collaborate more effectively
							</h2>
							<p className="scroll-effect-para">
								In Superhuman, read statuses are shared across your
								team.Lets say ateammate sends an email and CCs you.Even
								though you did not send the email , you can still see when
								people read that email.
							</p>
						</div>
						<img src={image106} className="image-scroll-effect" />
					</div>
					<div
						className="scrool-effect3"
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="1500"
					>
						<div class>
							<h1 className="scroll-effect-header">
								Avoid collisions with your team{" "}
							</h1>
							<h2 className="scroll-effect-2header">
								See when your team is replying{" "}
							</h2>
							<p className="scroll-effect-para" id="para">
								Imagine the scene : you and your team get an urgent email,
								so you rapidly reply. But just after you hit send , your
								team replies as well. In the best case , you look
								disorganized. in the worst case , you contradict each
								other.
							</p>
						</div>
						<div>
							<img
								src={image106}
								className="image-scroll-effect"
								id="image-scroll"
							/>
						</div>
					</div>

					<ItemList></ItemList>
				</section>
				{/* <div className='div-image-conatainer'>
        <img src={image104} />
       </div> */}
				<div className="image-button-container">
					<img src={image103} />
				</div>
			</section>
			<footer className="footer">
				<div className="footers">
					<div className="footer-heading">
						The Fastest Email Experience Ever Made
					</div>

					<div className="footer-list1">
						<span>Company</span>
						<ul className="list-items">
							<li className="items">Blog</li>
							<li className="items">Careers</li>
							<li className="items">Love</li>
						</ul>
					</div>
					<div className="footer-list2">
						{" "}
						<span>Product</span>
						<ul className="list-items1">
							<li className="items">Pricing</li>
							<li className="items">Download</li>
							<li className="items">AI</li>
							<li className="items">Sales</li>
							<li className="items">Enterprise</li>
							<li className="items">Outlook</li>
						</ul>
					</div>
					<div className="footer-list3">
						{" "}
						<span>Support</span>
						<ul className="list-items2">
							<li className="items">Help Center</li>
							<li className="items">Contact Us </li>
							<li className="items">Tutorials</li>
						</ul>
					</div>
					<div className="footer-list4">
						{" "}
						<span>Legal</span>
						<ul className="list-items3">
							<li className="items">Privacy</li>
							<li className="items">Terms</li>
							<li className="items">AUP</li>
						</ul>
					</div>
				</div>
				<div className="border">
					<hr></hr>{" "}
				</div>
				<div className="footer-down">
					<div>
						<img src={image115} />
					</div>
					<div className="footer-down1">
						<img src={image116} />
						<img src={image117} />
						<img src={image118} />
						<img src={image119} />
					</div>
				</div>
			</footer>
		</>
	)
}
export default App
