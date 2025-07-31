export const Wheels = async () => {
    const response = await fetch('http://localhost:8088/wheels')
    const wheels = await response.json()

    let html = `
    <select id='wheels-options'>
        <option value='0'>Select wheels</option>
    `

    const wheelsHTML = wheels.map((wheel) => {
        return `
            <option value='${wheel.id}'>${wheel.name}</option>
        `
    }).join('')

    html += `
        ${wheelsHTML}
    </select>
    `

    return html
}