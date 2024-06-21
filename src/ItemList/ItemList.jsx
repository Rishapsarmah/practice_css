import React, { useState, useEffect } from "react"
import "./txt-carousel.css"

function ItemList() {
	const [items, setItems] = useState([
		{
			name: "Spending less time on email means I can focus on meaningful work that moves the needle for our business. With Superhuman, I have peace of mind that things are taken care of.",
		},
		{
			name: "Superhuman is a key tool in our tech stack that everyone gets onboarded to when they join the team. With the peace of mind that things are taken care of.",
		},
		{
			name: "Its one thing for me to do better with my emails,but if my whole team is better, then we can make decision better ,more faster and give higher quality responses to everyone we interact with.",
		},
	])
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isTransitioning, setIsTransitioning] = useState(false)

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsTransitioning(true)
			setTimeout(() => {
				const nextIndex = (currentIndex + 1) % items.length
				setCurrentIndex(nextIndex)
				setIsTransitioning(false)
			}, 300)
		}, 5000)

		return () => clearTimeout(timeoutId)
	}, [currentIndex])

	return (
		<div className="vtn">
			<p
				key={currentIndex}
				className={isTransitioning ? "vtn__text fading" : "vtn__text"}
			>
				{items[currentIndex].name}
			</p>
		</div>
	)
}

export default ItemList
