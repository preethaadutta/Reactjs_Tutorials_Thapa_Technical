import React from 'react';//importing React from react package
import Heading from './Heading.jsx';//importing Heading component
import Paragraph from './Paragraph.jsx';//importing Paragraph component
import List from './List.jsx';//importing Paragraph component

//creating App component
function App()
{
    return(
        <>
          <Heading/>
          <Paragraph/>
          <List/>
        </>
    );
}

export default App;//exporting App component