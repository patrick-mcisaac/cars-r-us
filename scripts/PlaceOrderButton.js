import { updateState } from "./TransientState.js"

export const PlaceOrder = () => {
    document.addEventListener('click', eventHandler)

    return `
    <button id='place-order'>Place Order</button>
    `
}

const eventHandler = (e) => {
    if(e.target.id === 'place-order'){
        updateState()
        
        const myEvent = new CustomEvent('newOrder')
        document.dispatchEvent(myEvent)
    }
}