import React, {useState} from 'react';
import axios from "axios";

export default () => {
  const [title, setTitle] = useState('');
  const updateTitle = (event) => {
    setTitle(event.target.value);
  }
  const submitData = async (event) => {
    event.preventDefault();
    await axios.post("localhost:4000/posts", {
      title
    }).then(response => console.log);
    setTitle("");
    alert("post added correctly");
  }
  return (
    <div>
      <form onSubmit={submitData}>
        <div className={"form-group"}>
          <label> Title</label>
          <input type={"text"} className={"form-control"}
                 onChange={updateTitle}/>
        </div>
        <button className={"btn btn-primary"}>Submit</button>
      </form>
    </div>
  )
}