export const Orders = async () => {
    const response = await fetch('http://localhost:8088/orders?_expand=technology&_expand=wheel&_expand=paintColor&_expand=interior')
    const orders = await response.json()

    return orders.map((order) => {

        const totalPrice = order.technology.price + order.wheel.price + order.paintColor.price + order.interior.price
        const priceToUSD = totalPrice.toLocaleString('en-US', {
            style: "currency",
            currency: "USD"
        })

        return `
        <article>
            <p>Order #${order.id} cost ${priceToUSD}</p>
        </article>
        `
    }).join('')
}