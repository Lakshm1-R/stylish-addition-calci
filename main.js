var alt = document.getElementById("alert")
function add(){
    var n1 = Number(document.getElementById("num1").value)
    var n2 = Number( document.getElementById("num2").value)
    var total = document.getElementById("result")
    var ans = document.getElementById("ans")
    
    alt.classList.add("alert-open")
    ans.textContent = n1 + n2
    
    total.style.backgroundColor="gold"
    total.style.boxShadow="0 0 15px gold"
    total.style.transition=".5s"
    
}
function close(){
    alt.classList.remove("alert-open")
}