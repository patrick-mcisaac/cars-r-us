import { setInterior } from "./TransientState.js"

export const Interior = async () => {
    const response = await fetch('http://localhost:8088/interiors')
    const interiors = await response.json()

    document.addEventListener('change', eventHandler)

    let html = `
    <select id='interior-options'>
        <option value='0'>Select Interior</option>
    `

    const interiorHTML = interiors.map((interior) => {
        return `
        <option value='${interior.id}'>${interior.name}</option>
        `
    })

    html+= `
    ${interiorHTML}
    </select>
    `

    return html
}

const eventHandler = (e) => {
    if(e.target.id === 'interior-options'){
        setInterior(parseInt(e.target.value))
    }
}