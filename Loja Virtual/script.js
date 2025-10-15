const produto = document.getElementById("produto");
const imgProduto = document.getElementById("img-produto");
const infoExtra = document.getElementById("info-extra");

// troca de imagem ao passar o mouse
// mouseover trocar quando o mouse passar em cima do elemento.
imgProduto.addEventListener("mouseover", () => {
    imgProduto.src="https://www.slashcam.de/images/news/iphone-17-pro-finish-select-202509-6-3inch-geo-emea_1477e6-19515_PIC1.jpg"
})

imgProduto.addEventListener("mouseout", () => {
    imgProduto.src="https://files.tecnoblog.net/wp-content/uploads/2025/03/iphone-17-pro-asherdipps.png"
})

produto.addEventListener("mouseover", () => {
    infoExtra.classList.add("mostrar")
    produto.classList.add("mudanca")
})

produto.addEventListener("mouseout", () => {
    infoExtra.classList.remove("mostrar")
    produto.classList.remove("mudanca")

})