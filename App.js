// const heading = React.createElement("h1", {id: "header", xyz: "abc"}, "Hello World");//createdElement H1
// const root = ReactDOM.createRoot(document.getElementById("root"));// created the root with doc.
// root.render(heading);//rendered here

/*
    div id=parent
        div id=child
            h1
        div
    div

    this structure below with react
*/

// const parent = React.createElement("div",{id:"parent"}, React.createElement("div",{id:"child"}, React.createElement("h1",{id:"header"}," Iam h1 tag")));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

/*
    div id=parent
        div id=child
            h1 id=header
            h2 id= header2
        div
    div

    this structure below with react
*/
const parent = React.createElement("div",{id:"parent"}, 
    React.createElement("div",{id:"child"}, 
        [ React.createElement("h1",{id:"header"}," Iam h1 tag"),
        React.createElement("h2",{id:"header2", className:"abc"}," Iam h2 tag")]),

    React.createElement("div",{id:"child2"}, 
        [ React.createElement("h3",{id:"header3"}," Iam h3 tag"),
        React.createElement("h4",{id:"header4", className:"abc"}," Iam h4 tag")])
 );

const root_var = ReactDOM.createRoot(document.getElementById("root"));
root_var.render(parent);
