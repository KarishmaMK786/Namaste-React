import React from 'react';
import ReactDOM from 'react-dom/client';
import "../index.css";
import Header from "./components/Header";
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';

const AppLayout = () => {
   return (
      <div className='app'>
      <Header />
      <Body />
      </div>
   )
}

const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <AppLayout />
   },
   {
      path: "/About",
      element: <About />
   },
   {
      path: "/Contact",
      element: <Contact />
   },

])


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);   for react element
root.render(<RouterProvider router={appRouter}/>) ;





































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



