const transientState = {
	// add carTypeId = 1 for default value
	carTypeId: 1,
	paintId: 0,
	interiorId: 0,
	technologyId: 0,
	wheelId: 0
}

export const setPaintColor = choice => {
	transientState.paintId = choice
}

export const setInterior = choice => {
	transientState.interiorId = choice
}

export const setTechnology = choice => {
	transientState.technologyId = choice
}

export const setWheel = choice => {
	transientState.wheelId = choice
}

export const setCarId = choice => {
	transientState.carTypeId = choice
}

export const updateState = async () => {
	if (
		transientState.paintId > 0 &&
		transientState.interiorId > 0 &&
		transientState.technologyId > 0 &&
		transientState.wheelId > 0
	) {
		await fetch("http://localhost:5267/orders", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(transientState)
		})
		const myEvent = new CustomEvent("newOrder")
		document.dispatchEvent(myEvent)
	} else {
		window.alert("Select All Options")
	}
	// reset transient state
	transientState.carTypeId = 1
	transientState.paintId = 0
	transientState.interiorId = 0
	transientState.technologyId = 0
	transientState.wheelId = 0
}

// patch current DB with carType = 1 for default
// const patchState = async id => {
// 	await fetch(`http://localhost:5267/orders/${id}`, {
// 		method: "PATCH",
// 		headers: {
// 			"Content-Type": "application/json"
// 		},
// 		body: JSON.stringify({ carTypeId: 1 })
// 	})
// }

export const getOrdersData = async () => {
	const response = await fetch(`http://localhost:5267/orders`)
	const orders = await response.json()

	// for (const order of orders) {
	// 	let id = 0
	// 	order.hasOwnProperty("carTypeValue") ? await patchState(order.id) : ""
	// }
}
