/**
 * createElement returns a javascript object 
 * children - the 3rd element in the object of createELement is the children.
 * To pass more children to the element - pass the children in an array.
 * 
 * Nested structures
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am a h1 tag - child 1</h1>
 *          <h2>I am a h2 tag - child 2</h1>
 *      </div>
 * </div>
 * 
 * 
 */

/** >>> Nested Structure using react */
const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", {id:"child"}, [
        React.createElement("h1", {}, "I am a h1 tag - child 1"),
        React.createElement("h2", {}, "I am a h2 tag - child 2")
    ])
);
/** <<< Nested Structure using react */


const heading = React.createElement("h1", { id: "heading" }, "Hello Wrold from React! from App.js");
console.log("heading", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);