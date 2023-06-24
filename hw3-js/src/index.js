const price1 = document.getElementById("itemPrice1");
const price2 = document.getElementById("itemPrice2");
const price3 = document.getElementById("itemPrice3");
const price4 = document.getElementById("itemPrice4");

const sumPurchases = document.getElementById("sum-btn");

function sum() {
    const result = document.createElement("p");
    
    result.textContent = 
    +itemPrice1.innerHTML + 
    +itemPrice2.innerHTML + 
    +itemPrice3.innerHTML + 
    +itemPrice4.innerHTML;

    addElement(result);
}

function addElement(element) {
    const container = document.getElementById("sum-btn");
    container.append(element);
}

sum();

function addDiscount(discountRate) {
    const allPrices = document.querySelectorAll(".price");

    const arr = Array.from(allPrices);
    
    arr.forEach((element) => {
        const discountElement = element.textContent;
        const priceWithDiscount = 
        +discountElement - (discountElement / 100) * discountRate;
        element.textContent = `${priceWithDiscount.toFixed(2)}`;
    });
    addDiscount = () => {};
};

document.getElementById("btnDiscount").addEventListener("click", () => addDiscount(20));
document.getElementById("btnDiscount").addEventListener("click", () => sum());




