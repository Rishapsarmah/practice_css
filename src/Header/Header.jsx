import image1115 from "../assets/img15.png"
import "./Header.css"
function Header() {
	return (
		<header className="headertag">
			<div className="header-img">
				{" "}
				<div className="header-img1">
					<img src={image1115} alt="" className="header-image" />
				</div>
				<div className="header-items">
					{" "}
					<button className="btn-header">Get Started</button>
				</div>
			</div>
		</header>
	)
}
export default Header
