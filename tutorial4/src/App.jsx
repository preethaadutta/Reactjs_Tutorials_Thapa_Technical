import React from 'react';//importing React from react package
import Heading from './Heading.jsx';//importing Heading component
import Paragraph from './Paragraph.jsx';//importing Paragraph component
import List from './List.jsx';//importing Paragraph component

//creating App component
function App()
{
    return(
        <>
          <Heading username="Preethaa"/>
          <Paragraph age="25"/>
          <p>Languages already know -</p>
          <List l1="Java" l2="JS" l3="MySQL"/>
          <Heading username="Ananya"/>
          <Paragraph age="24"/>
          <p>Languages already know -</p>
          <List l1="Python" l2="Java" l3="MySQL"/>
        </>
    );
}

export default App;//exporting App component