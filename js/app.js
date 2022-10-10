const quantity = document.querySelector("#quantity");
const color = document.querySelector("#color");
const button = document.querySelector("#button");
const total = document.querySelector("#total");
const finalColor = document.querySelector("#finalColor")

button.addEventListener("click", () => {
    console.log("me diste click");
    console.log(quantity.value);
    console.log(color.value);
    const totalPrice = 5000*quantity.value;
    console.log(totalPrice);
    total.innerHTML = `Total: ` + totalPrice + `<br> Cantidad: `+ quantity.value + `<br> Color: ` + color.value ;
    finalColor.style.backgroundColor = color.value;
})