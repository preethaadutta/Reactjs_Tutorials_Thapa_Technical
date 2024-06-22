import React from 'react';//importing React from react package

//creating Paragraph component with dynamic content with the help of props
function Paragraph(props)
{
    return <p>Her age is {props.age}</p>;
}

export default Paragraph;//exporting paragraph component