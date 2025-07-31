
const header = document.getElementById('header')
const container = document.getElementById('container')

const render = () => {
    header.innerHTML = `<h1>Cars 'R Us: Personal </h1>`

    container.innerHTML = `
    <section>

        <article>
            <h2>Paints</h2>
        </article>

        <article>
            <h2>Interior</h2>
        </article>

        <article>
            <h2>Wheels</h2>
        </article>

        <article>
            <h2>Technologies</h2>
        </article>

    </section>

    <section>
        <h2>Custom Car Orders</h2>
        
    </section>

    `
}