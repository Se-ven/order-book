// tracks all buy and sell reqs.


// an array of objects
// includes type, quantity, and price
/*
let orderBook = [{
  type:
    quantity:
  price:
    }, {
  type:
    quantity:
  price:
    },]

*/
// starts with an empty book

// Check to see if the book is empty 
// if it's true, push new orders into the array (orderBook)


// Iterate over the objects in the array
// Check the price values first, then you can exit if the prices don't correspond
// If there is not an existing price add new order if (!price) 
// Check the order types of each object to see if we actually have something to sell
// If there is a buy for the sell
// check quantity
// If the buy is larger than the sell, then subtract them and create a new price prop.
// if the sell is larger than buy, ALSO reassign the type value 
// if buy === sell then delete the order from the list
// If there is no sell to match the buy order, add in new object to the order book to process later

// declare orderbook as an array (const orderBook = [])
// check if orderBook is empty
// if order is empty
// push order into orderBook array
// iterate over objects in array
// check price
// if there is not an existing price if(!price), add new order
// check type of each object if they don't the current object (if we have a buy and there are no sells in stack)
// if there is a buy for the sell
//  check quantity
// if the buy < sell, change quantity to the difference and keep the type as Buy
// if the buy > sell, change quantity to the difference and change the type as sell
// if buy === sell, remove the order from the list
// if there is no sell to match the buy add in new object (order)

function reconcileOrder(existingBook, incomingOrder) {
  const updatedBook = existingBook.concat({ ...incomingOrder })
    console.log({updatedBook})
    return updatedBook
  
}
// Test two, to add on the order when there is not a match in the book
const matchingTrades = existingBook.filter(function (existingOrder) {
  const correspondingType = existingOrder.type !== incomingOrder.type
  const correspondingPrice = existingOrder.price === incomingOrder.price
  const correspondingQuantity = existingOrder.quantity === incomingOrder.quantity

  // We need the type, price, and quantity values to all match
  return correspondingType && correspondingPrice && correspondingQuantity
  return existingOrder.type !== incomingOrder.type
})

if (matchingTrades.length === 0) {
  return existingBook.concat(incomingOrder)
}



module.exports = {
  reconcileOrder
}