import React from 'react';//importing React from react package
import ReactDOM from 'react-dom';//importing ReactDOM from react-dom package
import Heading from './Heading.jsx';//importing Heading component
import Paragraph from './Paragraph.jsx';//importing Paragraph component
import List from './List.jsx';//importing Paragraph component

ReactDOM.render(
  <>
    <Heading/>
    <Paragraph/>
    <List/>
    <Paragraph/>
  </>

  ,document.getElementById('root')
);