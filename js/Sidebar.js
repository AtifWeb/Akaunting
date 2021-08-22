let DropDownHeads=document.querySelectorAll(".sidebar nav li > p");
let burgerIcon=document.querySelector(".burger-icon")
let Sidebar=document.querySelector("aside")


burgerIcon.addEventListener("click",(e)=>{
    Sidebar.classList.toggle("active")
})

DropDownHeads.forEach(EachHead=>{
    EachHead.addEventListener("click",(e)=>{
        let ParentElement=e.target.parentNode;
        ParentElement.classList.toggle("active")
    })
})