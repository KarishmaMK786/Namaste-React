import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";



const Header = () => {
   return (
      <div className='header'>

         <div className='logo-container'>

            <img className='logo'
            src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png">
            </img>

         </div>

         <div className='nav-items'>
            <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>Cart</li>
            </ul>
         </div>

      </div>
   )
}



const RestaurantCard  = (props) => { 
   const {res} = props;
   return (
      <div className='res-card'>
         <img className='res-logo'
         alt="res-logo"
          src={res.image} />
         <h3>{res.name}</h3>
         <h5>{res.cusines.join(", ")}</h5>
         <h4>{res.rating}</h4>
         <h6>{res.delivery}</h6>

      </div>
   )
}

let arrData = [
   {
      image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi",
      name:"Meghana Foods",
      cusines:["Biriyani","Andhra","South Indian"],
      location: "Ashok Nagar",
      rating: "4.5",
      delivery:"38 minsutes"

   },
   {
      image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cd832b6167eb9f88aeb1ccdebf38d942",
      name:"Truffles",
      cusines:["American", "Desserts" ],
      location: "St Matrks Road",
      rating: "4.5",
      delivery:"30 minsutes"

   },
   {
      image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/y0fjz8h4ad8nfzkmbznu",
      name:"Mani's Dum Biriyani",
      cusines:["Biriyani"],
      location: "Ulsoor",
      rating: "4.3",
      delivery:"25 minsutes"

   },
   {
      image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qol6dzbjxyse0tylbznu",
      name:"Lions- Burgers ",
      cusines:["American", "Snacks", "Turkish" ],
      location: "Frazer Town",
      rating: "4.3",
      delivery:"32 minsutes"

   },
   {
      image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
      name:"McDonald's",
      cusines:["Burgers", "Beverages" ],
      location: "Ashok Nagar",
      rating: "4.1",
      delivery:"20 minsutes"

   },
   {
      image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
      name:"Burger King",
      cusines:["American", "Burgers" ],
      location: "Shivaji nagar",
      rating: "4.1",
      delivery:"25 minsutes"

   },
   {
      image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
      name:"KFC",
      cusines:["American", "Biriyani" ],
      location: "Magrath Road",
      rating: "3.7",
      delivery:"30 minsutes"

   },
   {
      image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7",
      name:"Truffles",
      cusines:["American", "Desserts" ],
      location: "St Matrks Road",
      rating: "4.5",
      delivery:"30 minsutes"

   },
   {
      image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/myqjdznwukizjyij8yyi",
      name:"Hyderabadi",
      cusines:["American", "Desserts" ],
      location: "St Matrks Road",
      rating: "4.5",
      delivery:"30 minsutes"

   },
   {
      image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1e578359309ea72d1e12f3248a09d197",
      name:"Rolls",
      cusines:["American", "Desserts" ],
      location: "St Matrks Road",
      rating: "4.5",
      delivery:"30 minsutes"

   },
   {
      image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lvxyt7qdchtmzh8telc2",
      name:"Beijing Bites",
      cusines:["American", "Desserts" ],
      location: "St Matrks Road",
      rating: "4.5",
      delivery:"30 minsutes"

   },
   {
      image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/89741ecb1291788f128600a5da5f18b4",
      name:"India Khichdi",
      cusines:["American", "Desserts" ],
      location: "St Matrks Road",
      rating: "2.8",
      delivery:"30 minsutes"

   }
    
]


const Body = () => {

   return (
      <div className='body'>
         <div className='search'>Search</div>
         <div className='res-container'>
           
           {
            arrData.map((resto, index) => (
               <RestaurantCard res = {resto}  key = {index} />
              
            ))
            }
           
         </div>
      </div>
   )
}

const AppLayout = () => {
   return (
      <div className='app'>
      <Header />
      <Body />
      </div>
   )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);   for react element
root.render(<AppLayout />);





































// React Element

// const heading = React.createElement("h1", {id:"heading"}, "Namaste React");
// console.log(heading);


// const element = <span>React Element</span>;
// const Title =  (
//    <div>

//      {element} 
//      <h1>Namaste React</h1>
    
//    </div>
// );
// const Title1 = () => (
//     <div>
      
//       <p>This course is all about react from basic to advance
//          so Master in he course
//       </p>
//     </div>
//  );
 
// const number  = 1000 + 200;

// const HeadingComponent = () => (
    
//     <div id="container">
         
//           {Title}
//           <Title1 />
//           <Title1></Title1>
//           {Title1 ()}
//           <h2>{console.log("Hii kempi, How you doing")}</h2>
//           <h1 className = "heading">Namaste React Fnctional Component</h1>
//     </div>
    

// );



