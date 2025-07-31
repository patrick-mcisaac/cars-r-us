const transientState = {
    paintcolorId: 0,
    interiorId: 0,
    technologyId: 0,
    wheelId: 0
}

export const setpaintcolor = (choice) => {
    transientState.paintcolorId = choice
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

export const updateState = () => {

    if(transientState.paintcolorId > 0 && transientState.interiorId > 0 && transientState.technologyId > 0 && transientState.wheelId > 0){
        fetch('http://localhost:8088/orders',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transientState)
        })
    }
    // reset transient state
    transientState.paintcolorId = 0
    transientState.interiorId = 0
    transientState.technologyId = 0
    transientState.wheelId = 0

}