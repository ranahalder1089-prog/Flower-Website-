// Shopping Cart

let cart = [];
let total = 0;

// Add Products to Cart

function addToCart(name, price, button) {

    cart.push({
        name: name,
        price: price
    });

    total += price;

    displayCart();

    button.textContent = "Added";
    button.style.backgroundColor = "#90ee90";
    setTimeout(function () {
        button.textContent = "Add to Cart";
        button.style.backgroundColor = "";
    }, 1000);

}

// Display Cart

function displayCart() {

    let cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    cart.forEach(function (item, index) {

        let li = document.createElement("li");

        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        li.style.marginBottom = "12px";

        let flowerName = document.createElement("span");

        flowerName.textContent = item.name + " - ₹" + item.price;

        let deleteButton = document.createElement("button");

        deleteButton.innerHTML = "🗑️";

        deleteButton.title = "Remove Flower";

        deleteButton.style.border = "none";
        deleteButton.style.background = "#ffdddd";
        deleteButton.style.borderRadius = "8px";
        deleteButton.style.padding = "8px 12px";
        deleteButton.style.cursor = "pointer";

        deleteButton.onclick = function () {
            removeFromCart(index);
        };

        li.appendChild(flowerName);
        li.appendChild(deleteButton);

        cartItems.appendChild(li);

    });

    document.getElementById("total").textContent = total;

}

// Delete Product

function removeFromCart(index) {

    total -= cart[index].price;

    cart.splice(index, 1);

    displayCart();

}

// Place Order

document.getElementById("order-form").addEventListener("submit", function (event) {

    event.preventDefault();

    if (cart.length === 0) {

        alert("Please add flowers to your cart first!");

        return;

    }

    let name = document.getElementById("customer-name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    alert(
        "Thank you " + name +
        "! Your order has been placed successfully." +
        "\nPhone: " + phone +
        "\nAddress: " + address +
        "\nTotal Amount: ₹" + total
    );

    cart = [];
    total = 0;

    displayCart();

    document.getElementById("order-form").reset();

});