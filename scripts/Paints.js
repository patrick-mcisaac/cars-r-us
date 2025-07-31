import { setpaintcolor } from "./TransientState.js"

export const Paints = async () => {
    const response = await fetch('http://localhost:8088/paintcolors')
    const paints = await response.json()

    document.addEventListener('change', eventHandler)

    let html = `
    <select id='paint-options'>
        <option value='0'>Select Paint Color</option>
    `

    const paintsHTML = paints.map((paint) => {
        return `
        <option value='${paint.id}'>${paint.color}</option>
        `
    }).join('')

    html += `
    ${paintsHTML}
    </select>
    `
    return html
}

const eventHandler = (e) => {
    if(e.target.id === 'paint-options'){
        setpaintcolor(parseInt(e.target.value))
    }
}