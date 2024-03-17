import axios from 'axios';
import React from 'react'

export default function QueryAllChat() {

    function test(e){
        e.preventDefault();

        const x = axios.get("http://localhost:8080/chat/queryAll");
        let y = "";
        let sum = 0;

        x.then(response => {
            y = "<table border='1' align='center' width='70%'>";

            for(let i = response.data.length - 1; i >= 0; i--){
                y += "<tr>" + 
                    "<td>" + response.data[i].id + "</td>" + 
                    "<td>" + response.data[i].name + "</td>" + 
                    "<td>" + response.data[i].subject + "</td>" + 
                    "<td>" + response.data[i].content + "</td>" + 
                    "</tr>";
                
                sum++;
                console.log(sum);
            }

            y += "</table>";

            let s = document.getElementById("show");
            s.innerHTML = y + "<br/>共:" + sum + "筆";
        });
    }

  return (
    <div>
        <button onClick={test}>查詢</button>
        <div id="show"></div>
    </div>
  )
}
