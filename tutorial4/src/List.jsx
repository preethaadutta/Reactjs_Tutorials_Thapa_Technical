import React from 'react';//importing React from react package

//creating List component with dynamic content with the help of props
function List(props)
{
    return (
        <ol>
            <li>{props.l1}</li>
            <li>{props.l2}</li>
            <li>{props.l3}</li>
        </ol>
    );
}

export default List;//exporting List component