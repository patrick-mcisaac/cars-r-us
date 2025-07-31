const transientState = {
    paintColorId: 0,
    interiorId: 0,
    technologyId: 0,
    wheelId: 0
}

export const setPaintColor = (choice) => {
    transientState.paintColorId = choice
}

export const setInterior = (choice) => {
    transientState.interiorId = choice
}

export const setTechnology = (choice) => {
    transientState.technologyId = choice
}

export const setWheel = (choice) => {
    transientState.wheelId = choice
}

export const updateState = async () => {

    if(transientState.paintColorId > 0 && transientState.interiorId > 0 && transientState.technologyId > 0 && transientState.wheelId > 0){
        await fetch('http://localhost:8088/orders',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transientState)
        })

    }
    // reset transient state
    transientState.paintColorId = 0
    transientState.interiorId = 0
    transientState.technologyId = 0
    transientState.wheelId = 0

}