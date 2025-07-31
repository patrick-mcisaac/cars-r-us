export const Interior = async () => {
    const response = await fetch('http://localhost:8088/interiors')
    const interiors = await response.json()


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