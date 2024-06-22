import React from 'react';//importing React from react package

//creating Heading component with dynamic content with the help of props
function Heading(props)
{
    return <h1>{props.username} is learning Reactjs</h1>;
}

export default Heading;//exporting Heading component