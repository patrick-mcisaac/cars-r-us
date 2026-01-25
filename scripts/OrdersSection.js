export const Orders = async () => {
	const response = await fetch(
		"http://localhost:5267/orders?_expand=technology&_expand=wheel&_expand=paintColor&_expand=interior&_expand=carType"
	)
	const orders = await response.json()

	// change carType to carTypeValue from DB which will be a value
	return orders
		.map(order => {
			const priceToUSD = order.price.toLocaleString("en-US", {
				style: "currency",
				currency: "USD"
			})

			return `
        <article>
            <p>${order.paint.color}  with ${order.wheels.style} wheels, ${order.interior.material} interior, and the ${order.technology.package} for a total of ${priceToUSD}</p>
        </article>
        `
		})
		.join("")
}
