let totalAmount = "1.00";


var total1 = localStorage.getItem('itemPrice').replace("$", "");
var newAmount = total1;
var mem = 0;
if (localStorage.getItem('itnamct')) {
    var mem = localStorage.getItem('itnamct'); }

localStorage.setItem('itnamct2', mem);
function resultMessage(message) {
    const container = document.querySelector("#result-message");
    container.innerHTML = message;
}
function updatePaypalAmount(newAmount1) {
    var totalAmount = Number(newAmount1).toFixed(2);
    console.log("PayPal amount updated to:", totalAmount);
    window.paypal
        .Buttons({
            style: {
                shape: "pill",
                layout: "vertical",
                color: "gold",
                label: "paypal",
                disableMaxWidth: true,
                label: "buynow",
            },
            message: {
                amount: 100,
                align: 'center',
                color: 'black',
                position: 'top',
            },
            createOrder: function (data, actions) {

                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: totalAmount,
                        },
                    }]
                });
            },
            onApprove: function (data, actions) {
                let nappsva = 0;
                localStorage.setItem("easySensorsDownloaded","no");
                nappsva = localStorage.getItem('itnamct');
                nappsva = nappsva + 1;
                localStorage.setItem('itnamct', nappsva);
                            

                window.open("installapps.html");

                return actions.order.capture().then(function (details) {
                    resultMessage("Payment completed by " + details.payer.name.given_name + "\nAmount: $" + totalAmount);
                });
            },
            onError: function (err) {
                resultMessage("Payment error");
            },
        }).render("#paypal-button-container");


}

updatePaypalAmount(newAmount);

