import React from 'react'

const ShoppingItem = ({ shoppingItems }) => {
  return (
    shoppingItems.map(item => 
      <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Price: {item.price}</p>
      </div>)
)
}
const ShoppingList = ({ shoppingItems, username }) => {
  return (
      <>
      <h1>Shopping list for {username}</h1>
      <ShoppingItem shoppingItems={shoppingItems} />
      </>
  )
}
const App = ( {shoppingItems, username }) => {
  return (
      <>
        <ShoppingList shoppingItems={shoppingItems} username={username}/>
      </>
  );
}

export default App
