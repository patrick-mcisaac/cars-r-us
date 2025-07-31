export const Paints = async () => {
    const response = await fetch('http://localhost:8088/paintColors')
    const paints = await response.json()

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