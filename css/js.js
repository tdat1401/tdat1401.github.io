(()=>{
    const subLeft = document.querySelectorAll("#banner .left-menu .sub-left");
    subLeft.forEach((active)=>{
        active.addEventListener("click",()=>{
            subLeft.forEach((even)=>{even.classList.remove("active")})
            active.classList.add("active");
        })
    
    })
    subLeft.forEach((active)=>{
        active.addEventListener("scroll",()=>{
            subLeft.forEach((even)=>{even.classList.remove("active")})
            active.classList.add("active");
        })
    
    })
})();