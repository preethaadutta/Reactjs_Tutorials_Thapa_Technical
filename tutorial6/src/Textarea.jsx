import React, {useState} from 'react';//importing React and useState from react package to use state

//creating Navbar component with dynamic content with the help of props
function Textarea(props)
{
    const handleUpClick=()=>
    {
        //console.log('Uppercase was clicked'+text);
        let newText=text.toUpperCase();
        //setText('You have clicked on handleUpClick');//correct way to change the state
        setText(newText);
    }

    const handleOnChange=(event)=>
    {
        //console.log('On Change');
        setText(event.target.value);
    }
    const [text,setText]=useState('Enter text here');//here setText is actually a function to change the value of text variable
    //by default the value of text variable is Enter text here
    //text='Enter new text here';//wrong way to change the state
    //setText('Enter new text here');//correct way to change the state

    return (
        <>
            <h1>{props.title}</h1>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
        </>
    );
}

export default Textarea;//exporting Navbar component