// Function to auto-fill booking form
function selectService(name, price) {
    document.getElementById('event-name').value = name;
    document.getElementById('event-price').value = "$" + price;
}
// Form submission handling
document.getElementById('booking-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Booking confirmed! You'll receive an email shortly.");
// Send booking email using a backend (PHP)
    fetch('send_email.php', {
        method: 'POST',
        body: new FormData(this)
    }).then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});
document.addEventListener("DOMContentLoaded", function(){
    loadOrders();
});

function loadOrders(){
    let orders =JSON.parse(localStorage.getItem('orders')) || [];
    let ordersList = document.getElementById("orders-list");
    ordersList.innerHTML = "";

    if (orders.lenght === 0 ){
        ordersList.innerHTML = "<p>No booking found.</p>";
    } else{
        orders.forEach((orders,index) =>{
            let li = document.createElement("li");
            li.innerHTML = '${order.name} - ${order.price} <button class="cancel-btn" onclick="cancelOrder(${index})"> Cancel</button>';
            ordersList.appendChild(li);
        });
    }
}

// Cancel Order
function cancelOrder(index){
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.splice(index,1);
    localStorage.setItem('orders',JSON.stringify(origin));
    loadOrders();
}
