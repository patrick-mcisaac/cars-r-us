import { setTechnology } from "./TransientState.js"

export const Technologies = async () => {
	const response = await fetch("http://localhost:5267/technologies")
	const technologies = await response.json()

	document.addEventListener("change", eventHandler)

	let html = `
    <select id='technology-options'>
        <option value='0'>Select Packages</option>
    `

	const techHTML = technologies
		.map(tech => {
			return `
        <option value='${tech.id}'>${tech.package}</option>
        `
		})
		.join("")

	return (html += `
        ${techHTML}
    </select>
    `)
}

const eventHandler = e => {
	if (e.target.id === "technology-options") {
		setTechnology(parseInt(e.target.value))
	}
}
