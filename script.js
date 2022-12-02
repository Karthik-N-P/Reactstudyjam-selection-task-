let no=document.getElementById("number").innerText;
document.getElementById("operation plus").addEventListener("click",plus);
function plus(){
    no=parseInt(no)+1;
    document.getElementById("number").innerText=no;
    
}

document.getElementById("operation minus").addEventListener("click",minus);
function minus(){
    no=parseInt(no)-1;
    document.getElementById("number").innerText=no;
    
}
