
var allProducts = document.querySelectorAll(".list  li")
var div = document.querySelector("#content")
var priceTotal = document.querySelector("#total")
var btn = document.querySelector("#btn")
var totalPrice = 0



allProducts.forEach(function (item){
    item.onclick = function (){
        div.innerHTML += item.textContent + " ' "
        div.innerHTML += item.getAttribute("price")  + " ' " + "  "
        totalPrice +=  +(item.getAttribute("price"))

        if(div.innerHTML != ""){
            btn.style.display = "block";
            btn.style.width = "100px";
            btn.style.height = "50px";
            btn.style.backgroundColor =  rgb(235, 183, 183);
            btn.style.color = "brown";
        }
    }
})

btn.onclick = function (){
    priceTotal.innerHTML = "Total price : " + totalPrice + "$"
  
}





