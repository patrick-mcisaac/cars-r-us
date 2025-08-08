import { setCarId } from "./TransientState.js"

export const CarType = () => {
	document.addEventListener("change", eventHandler)

	return `
    <form class='car-type'>
        <label>
            <input type='radio' name='carType' value='1'>
            Car
        </label>
        <label>
            <input type='radio' name='carType' value='2'>
            Suv
        </label>
        <label>
            <input type='radio' name='carType' value='3'>
            Truck
        </label>
    </form>
    `
}

const eventHandler = e => {
	if (e.target.name === "carType") {
		const value = e.target.value
		// change function and import to transientState.js
		setCarId(parseInt(value))
	}
}
