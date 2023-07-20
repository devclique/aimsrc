
window.addEventListener("load",()=>{
    setTimeout(
        function open(event){
            document.querySelector(".event-popup").style.display="block";
        },1000
    )
});


document.querySelector("#close").addEventListener("click",()=>{

    document.querySelector(".event-popup").style.display="none";
});