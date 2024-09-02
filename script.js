let images = document.querySelectorAll(".image");

images.forEach(img => {                    //verifica se houve um clique em alguma imagem
    img.addEventListener("click", () =>{   //se houver um clique
        window.location = img.src;         //abrir a fonte da imagem
    })
})
const background = document.getElementById("background");
//adciona o efeito de parallax na imagem do fundo
window.addEventListener("scroll", e=>{
    background.style.opacity = 1 - (window.scrollY / 700);
    background.style.objectPosition = `50% ${80 - window.scrollY / 5}%`;
})