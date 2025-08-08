export const Orders = async () => {
	const response = await fetch(
		"http://localhost:8088/orders?_expand=technology&_expand=wheel&_expand=paintColor&_expand=interior&_expand=carType"
	)
	const orders = await response.json()

	// change carType to carTypeValue from DB which will be a value
	return orders
		.map(order => {
			const totalPrice =
				(order.technology.price +
					order.wheel.price +
					order.paintColor.price +
					order.interior.price) *
				order.carType.value
			const priceToUSD = totalPrice.toLocaleString("en-US", {
				style: "currency",
				currency: "USD"
			})

			return `
        <article>
            <p>${order.paintColor.color} ${order.carType.type} with ${order.wheel.name} wheels, ${order.interior.name} interior, and the ${order.technology.name} for a total of ${priceToUSD}</p>
        </article>
        `
		})
		.join("")
}
