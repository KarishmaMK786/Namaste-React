{/* <div id="parent">
    <div id="child1">
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
</div> */}


const parent = React.createElement("div", {id: "parent"}, 
               [
                    React.createElement("div", {id: "child1"},
                    [React.createElement("h1", {}, "I'm an h1 tag"),
                    React.createElement("h2", {}, "I'm an h1 tag")
                    ]),
                    
                    React.createElement("div", {id: "child2"},
                    [React.createElement("h1", {}, "I'm an h1 tag"),
                    React.createElement("h2", {}, "I'm an h1 tag")
                    ]) 
             
               ])


const heading = React.createElement("h1", {id: "heading", xyz:"abc"},"Hello world from React!");
                            // from first C link

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);