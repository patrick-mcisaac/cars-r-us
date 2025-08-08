import { Paints } from "./Paints.js"
import { Interior } from "./Interiors.js"
import { Wheels } from "./Wheels.js"
import { Technologies } from "./Technologies.js"
import { PlaceOrder } from "./PlaceOrderButton.js"
import { Orders } from "./OrdersSection.js"
import { CarType } from "./CarType.js"

const header = document.getElementById("header")
const container = document.getElementById("container")

const render = async () => {
	const paintsHTML = await Paints()
	const interiorHTML = await Interior()
	const wheelsHTML = await Wheels()
	const techHTML = await Technologies()
	const carTypeHTML = CarType()
	const orderBtnHTML = PlaceOrder()
	const ordersHTML = await Orders()

	header.innerHTML = `<h1>Cars 'R Us: Personal </h1>`

	container.innerHTML = `
    <section class='option-section'>

        <article>
            <h2>Paints</h2>
            ${paintsHTML}
        </article>

        <article>
            <h2>Interior</h2>
            ${interiorHTML}
        </article>

        <article>
            <h2>Wheels</h2>
            ${wheelsHTML}
        </article>

        <article>
            <h2>Technologies</h2>
            ${techHTML}
        </article>

        <article class='button-article'>
            ${carTypeHTML}
            ${orderBtnHTML}
        </article>

    </section>

    <section class='custom-orders-section'>
        <h2>Custom Car Orders</h2>
        ${ordersHTML}
    </section>

    `
}

render()

document.addEventListener("newOrder", render)
