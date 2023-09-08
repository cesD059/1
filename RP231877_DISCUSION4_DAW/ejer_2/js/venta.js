document.addEventListener("DOMContentLoaded", function () {
    const productForm = document.getElementById("product-form");
    const productTableBody = document.querySelector("#product-table tbody");
    const totalParagraph = document.getElementById("total");

    const venta = {
        productos: [],
        calcularTotal: function () {
            return this.productos.reduce((total, producto) => total + producto.detalle, 0);
        },
    };

    productForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const productName = document.getElementById("product-name").value;
        const unitPrice = parseFloat(document.getElementById("unit-price").value);
        const quantity = parseInt(document.getElementById("quantity").value);

        if (productName && unitPrice && quantity) {
            const detalle = unitPrice * quantity;
            const producto = { productName, unitPrice, quantity, detalle };
            venta.productos.push(producto);
            displayProducts();
            updateTotal();
            resetForm();
        }
    });

    function displayProducts() {
        productTableBody.innerHTML = "";

        venta.productos.forEach((producto) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${producto.productName}</td>
                <td>${producto.unitPrice}</td>
                <td>${producto.quantity}</td>
                <td>${producto.detalle}</td>
            `;
            productTableBody.appendChild(row);
        });
    }

    function updateTotal() {
        const total = venta.calcularTotal();
        totalParagraph.textContent = `Total de la Venta: $${total}`;
    }

    function resetForm() {
        document.getElementById("product-name").value = "";
        document.getElementById("unit-price").value = "";
        document.getElementById("quantity").value = "";
    }
});

