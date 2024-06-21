const Companylist = () => {
	return (
		<div>
			<h3>Left to right - Fixed width - AUTO</h3>
			<div
				class="marquee"
				data-scroll-direction="left"
				data-scroll-auto="true"
				data-scroll-speed="20"
			>
				<div class="marquee-items">
					<div class="marquee-item">Audi</div>
					<div class="marquee-item">VW</div>
					<div class="marquee-item">Mercedes-Benz</div>
					<div class="marquee-item">Renault</div>
					<div class="marquee-item">Fiat</div>
					<div class="marquee-item">Dodge</div>
					<div class="marquee-item">Cadillac</div>
					<div class="marquee-item">Seat</div>
					<div class="marquee-item">Skoda</div>
					<div class="marquee-item">Maserati</div>
				</div>
			</div>
		</div>
	)
}
export default Companylist
