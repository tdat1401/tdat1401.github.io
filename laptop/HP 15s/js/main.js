(()=>{
    const color = document.querySelectorAll("div.mau");
    const img = document.querySelector("a.img-main img");
    color.forEach(element => {
        element.onclick = function(){
            color.forEach(event =>{
                event.classList.remove("active")
            })
            this.classList.add("active");
            var event = this.querySelector(".choose");
            img.src = `./img/sản phẩm chính/${event.textContent}.jpg`
        }
    })
    
})();