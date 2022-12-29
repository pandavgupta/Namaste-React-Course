// 1. with DOM
    // <script>
    //     const heading =  document.createElement("h1");
    //     heading.innerHTML = "Starting Namaste React Course with fun.";
    //     const root = document.querySelector("#root");
    //     root.appendChild(heading);
    // </script> 

    
//  2. using React

let heading = React.createElement("h1", {
    id: "title"
}, "Namaste to everyone from react!!!.");
let heading1 = React.createElement("h1", {
    id: "title"
}, "Heading 1.");
let heading2 = React.createElement("h2", {
    id: "title"
}, "Heading 2.");
const container = React.createElement("div",{
    id: "container"
},[heading1, heading2])
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element in root 
console.log(heading)
root.render(container);