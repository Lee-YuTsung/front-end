import axios from 'axios';
import React, {useState, useRef} from 'react'

export default function AddChat() {

    let [name, setName] = useState("");
    let [subject, setSubject] = useState("");
    let [content, setContent] = useState("");

    function test1(e){
        e.preventDefault();

        setName(document.chatForm.name.value);
        setSubject(document.chatForm.subject.value);
        setContent(document.chatForm.content.value);

        //const x = axios.post("http://localhost:8080/chat/add", this.useState);
        let x = useRef;
        console.log(name);
    }


  return (
    <div>
        <form name='chatForm' onSubmit={test1}>
            留言人:<input type='text' name='name' /><br/>
            主題:<input type='text' name='subject' /><br/>
            內容:<textarea name='content' rows={5} cols={50} /><br/>
            <input type='submit' value='送出' />
        </form>
    </div>
  )
}
