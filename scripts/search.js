// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

let url="https://masai-mock-api.herokuapp.com/news?q=tesla";

fetch(url)
.then(function(res){
    return res.json()
})
.then(function(res){
    appenddata(res.articles)
    console.log(res)
})
.catch(function(err){
    console.log(err)
});


function appenddata(articles){
   articles.forEach(function(el){
       
        let div = document.createElement("div")
        div.addEventListener("click",function(){
            news(el)
        })

        let img = document.createElement("img")
        img.src = el.urlToImage
        img.setAttribute("class","img")

        let title = document.createElement("h3")
        title.innerText = el.title
        title.setAttribute("class","center")
      

        let desc = document.createElement("p")
        desc.innerText = el.description
        desc.style.textAlign="justify"
        desc.style.marginLeft="20%"

        div.append(img,title,desc)
        results.append(div)
    })
}

let arr = JSON.parse(localStorage.getItem("news")) || []
function news(el){
    arr.push(el)
    localStorage.setItem("news",JSON.stringify(arr))
    window.location.href="news.html"
}