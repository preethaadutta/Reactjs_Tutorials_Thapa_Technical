import React from 'react';//importing React from react package
import Navbar from './Navbar.jsx';//importing Navbar component
import Textarea from './Textarea.jsx';//importing Navbar component
import "./index.css";//importing custom style sheet

//creating App component
function App()
{
    return(
        <>
          <Navbar logo="Logo" nav1="Menu1" nav2="Menu2" nav3="Menu3" subnav1="SubMenu1" subnav2="SubMenu2" subnav3="SubMenu3" search="Search"/>
          <div className="container my-3">
            <Textarea title="Enter some text"/>
          </div>
        </>
    );
}

export default App;//exporting App component