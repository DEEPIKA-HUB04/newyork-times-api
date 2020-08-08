function myfunction(){
    var value = document.getElementById("input").value;
    console.log(value);                                    // section name

    var url = "https://api.nytimes.com/svc/topstories/v2/"
var key = "?api-key=k3GFZMeGHHS6vYZ7KnlPO3HeLDNAokAv"
var section= "";
section += url + value+ ".json"+key;
     fetch(section).then((response) =>{

        return response.json()

     }).then((data) => {

       stories(data)

     }).catch((error) =>{
         console.log(error)
     })  
}


function stories(source){

    var result = source.results
    
  var container  = document.getElementById("main")
    for(i=0;i<result.length;i++){

      var newDiv = document.createElement("div")
      newDiv.setAttribute("class","collapse")
      newDiv.setAttribute("id","Example")
      newDiv.setAttribute("style","margin:20px 0")


      var secDiv = document.createElement("div")
      secDiv.setAttribute("class","card cardbody")
      secDiv.setAttribute("style","padding:10px 10px")
      newDiv.appendChild(secDiv)

        
     
  var show = `<div>
   <div class = "float-left w-75">
                <h4 style = "color:red;"> ${result[i]["section"]}</h3>
                <p> ${result[i]['abstract']}</p>
                <p class = "text-info"> <strong> Byline : </strong>  ${result[i]["byline"]} </p>
                <p class = "text-success"> <strong>  Created Date : </strong>  ${result[i]["created_date"]} </p>
                <p class = "text-warning"> <strong> Title : </strong>  ${result[i]["title"]}</p>
                <p style = "color: violet;"> <strong> Item Type : </strong>  ${result[i]["item_type"]}</p>
                <a href = "${result[i]["short_url"]}" target ="_blank" style = "text-decoration : underline;">Article URL </a>
                </div>
                <div class = "float-right w-25">
                <img class="img-thumbnail" style = "width:250px; height:280px;" src =${result[i]["multimedia"][4]["url"]} alt="Card image">
         </div>
             </div>`
   
    secDiv.innerHTML = show
      container.appendChild(newDiv)
    
    }
}
