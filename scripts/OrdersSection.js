export const Orders = async () => {
	const response = await fetch(
		"http://localhost:8088/orders?_expand=technology&_expand=wheel&_expand=paintColor&_expand=interior"
	)
	const orders = await response.json()

	// add parens and * carType to the map
	return orders
		.map(order => {
			const totalPrice =
				(order.technology.price +
					order.wheel.price +
					order.paintColor.price +
					order.interior.price) *
				carType
			const priceToUSD = totalPrice.toLocaleString("en-US", {
				style: "currency",
				currency: "USD"
			})

			return `
        <article>
            <p>${order.paintColor.color} car with ${order.wheel.name} wheels, ${order.interior.name} interior, and the ${order.technology.name} for a total of ${priceToUSD}</p>
        </article>
        `
		})
		.join("")
}
// create a let variable to store car type let carType =
let carType = 1
//  export a function to store car type value with a param
//   assign the param to the variable carType
export const setCarType = choice => {
	carType = choice
}
