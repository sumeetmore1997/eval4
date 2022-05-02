// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar()

let check = JSON.parse(localStorage.getItem("news"))

let detailed_news = document.getElementById("detailed_news")

function appenddata(articles){
    articles.forEach(function(el,index){

        let div = document.createElement("div")

        let img = document.createElement("img")
        img.src = el.urlToImage

        let title = document.createElement("h3")
        title.innerText = el.title

        let desc = document.createElement("p")
        desc.innerText = el.description

        div.append(img.title,desc)
        
        detailed_new.append(div)

    })
}
appenddata(check)
