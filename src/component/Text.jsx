import React, { useState } from 'react'

const Text = (props) => {
  const  [text,settext]=useState("");
  
  const HandleText=(e)=>{
    settext(e.target.value);

  }
  const changeinup = () => {
   if(text!==''){
     let newtxt = text.toUpperCase();
    settext(newtxt)
    props.showAlert("Change to uppercase")
   }
  }
const ChangeLower=()=>{
 if(text!==''){
  let newtxt = text.toLowerCase();
  settext(newtxt)
  props.showAlert("Change to Lower case")
 }
}
const CopyText=async () => {
  try {  if(text!==''){
    await navigator.clipboard.writeText(text);
  
    props.showAlert("'Content copied to clipboard'")}
    
  } catch (err) {
    props.showAlert("'Content  Not copied to clipboard'")
  }
}
const RestText=()=>{
settext('')
if(text!=='')
props.showAlert("Reseted")
}
function countWords(s){
  s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
  s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
  s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
  return s.split(' ').filter(function(str){return str!=="";}).length;
  //return s.split(' ').filter(String).length; - this can also be used
}
  return (<>
    <div className="form-floating container">
        <h3 className='text-center my-3 text-primary'  >Text Analyzer</h3>
  <textarea onChange={HandleText} className={`form-control bg-${props.mode.color} text-${props.mode.color==='light'?'dark':'light'}`} value={text} placeholder="Start Writing" id="floatingTextarea2" style={{"height": "250px" }}></textarea>
  <button type="button" className="btn btn-primary my-3 "  onClick={changeinup}>Uppercase</button>
  <button onClick={ChangeLower} type="button" className="btn btn-primary my-3 mx-2">Lowercase</button>
  <button onClick={CopyText} type="button" className="btn btn-primary my-3 mx-2">Copy Clipboard</button>
  <button onClick={RestText} type="button" className="btn btn-primary my-3 mx-2">Reset</button>
  
  <li className="list-group-item list-group-item-primary my-1">Character No:{text.length}</li>
  <li className="list-group-item list-group-item-primary">Word No:{countWords(text)}</li>
</div>
</>
  )
}

export default Text
