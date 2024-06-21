// import AOS from 'aos';
import "aos/dist/aos.css"
import image106 from "./assets/img6.png"
function Cards() {
	return (
		<section>
			<div>
				<h1>Fix errors as you go</h1>
				<h2>Speed up your typing by 30-50%</h2>
				<p>
					Autocorrect fixes errors as you go-extra chararters, missing
					characters,transposed characters, missing punctuation , incorrect
					capitalization - to name just a few. It beats the autocoreect in Gmail
					and Outlook across multiple benchmarks.Most importantly , you go
					fater. Autocorrect incraeses typing speed by 30-50%.
				</p>
				<div>
					<img src={image106} />
				</div>
			</div>
			<div>
				<h1>Share read statuses across your team</h1>
				<h2>communicate and collaborate more effectively</h2>
				<p>
					In Superhuman, read statuses are shared across your team.Lets say
					ateammate sends an email and CCs you.Even though you did not send the
					email , you can still see when people read that email.
				</p>
				<img src={image106} />
			</div>
			<div>
				<div>
					<h1>Avoid collisions with your team </h1>
					<h2>See when your team is replying </h2>
					<p>
						Imagine the scene : you and your team get an urgent email, so you
						rapidly reply. But just after you hit send , your team replies as
						well. In the best case , you look disorganized. in the worst case
						, you contradict each other.
					</p>
				</div>
				<div>
					<img src={image106} />
				</div>
			</div>
		</section>
	)
}

export default Cards
