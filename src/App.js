import React from 'react';
import  "./App.css";

export default function App(){
  let menu=[
    {id:1, name:"Americana", price:100, image:'/ecomm-react/images/Americano.jpg'},
    {id:2, name:"Coffee", price:60, image:'/ecomm-react/images/coffe.jpg'},
    {id:3, name:"Expresso", price:120, image:'/ecomm-react/images/expresso.jpg'},
    {id:4, name:"Latte", price:150, image:'/ecomm-react/images/latte.jpg'},
    {id:5, name:"Macchiato", price:100, image:'/ecomm-react/images/macchiato.jpg'},
    {id:6, name:"Combo Snacks", price:120, image:'/ecomm-react/images/snacks.jpg'},
];
  return(
    <div className="menu-container">
   {menu.map((ele)=>(
    <div key={ele.id} className="menu-card">
    <div>
      <img src={ele.image} alt={ele.name} className="menu-card-img" />
    </div>
    <div>{ele.name}</div>
    <div>Price:{ele.price}</div>
    <button>Add to cart</button>
  </div>

  ))}
</div>

  )

}
