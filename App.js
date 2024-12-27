import React from "react";
import ReactDOM from "react-dom/client";


const heading = (
    <h1 className="head"> Namaste React from JSX 🚀 </h1>
);

const navBarList = ["Home", "About", "Help", "Account"];

const restaurantCards = [{name: "Meghna Foods"}, {name: "Chai Sutta Bar"}, {name: "Dominos"}, {name: "La Pinoz"}, {name: "Burger King"}, {name: "Downtowner"}, {name: "Vee Food"}];

const Header = () => (
    <div className="header">
        <img style={{ height: "100px" }} src="https://img.freepik.com/premium-vector/pizza-logo-design-template_15146-192.jpg" />
        <div className="navList">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

const RestaurantCard = ({restaurent}) => {
    
    
    return (
        <div className="res-card">
            <div className="res-card-image">

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVkL0Dv7dCryxRJGHql1eRmWUP4Il4UqkTg&s" />
            </div>
            <div className="res-card-details">
                <span>{restaurent.name}</span>
                <span>North Indian, South Indian, Italian</span>
                <span>4.4</span>
                <span>200/-</span>
            </div>
        </div>
    )
}


const Body = () => (
    <div className="Body">
        <div className="searchBar">Search</div>
        <div className="res-container">
            {
                restaurantCards.map((res) => (
                    <RestaurantCard restaurent={res} />
                ))
            }

        </div>
    </div>
)


const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);