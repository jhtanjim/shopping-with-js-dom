let serial = 0;
document.getElementById('first-cart').addEventListener('click', function () {
    //get the data
    serial = serial + 1;//p no barbe
    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;

    //total
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity); //string tai int a covert
    //get table
    //     const container = document.getElementById('table-container')
    //     //create new tr
    //     const tr = document.createElement('tr');
    //     tr.innerHTML = `
    // <td>${1}</td>
    // <td>${productName}</td>
    // <td>${productPrice}</td>
    // <td>${productQuantity}</td>
    // <td>${priceTotal}</td>
    // `
    //     container.appendChild(tr)
    //niche func a ase
    displayData(productName, productPrice, productQuantity, priceTotal)
    //disable
    disableButton('first-cart')

})


//function dibale
function disableButton(id) {
    document.getElementById(id).setAttribute('disabled', true)
}

function displayData(productName, productPrice, productQuantity, priceTotal) {

    const container = document.getElementById('table-container')
    //create new tr
    const tr = document.createElement('tr');
    tr.innerHTML = `
<td>${serial}</td>
<td>${productName}</td>
<td>${productPrice}</td>
<td>${productQuantity}</td>
<td>${priceTotal}</td>
`
    container.appendChild(tr)
    document.getElementById('total-product').innerText = serial


}

//using event
document.getElementById('second-cart').addEventListener('click', function () {
    serial = serial + 1;//p no barbe
    const productName = document.getElementById('second-name').innerText;
    const productPrice = document.getElementById('second-price').innerText;
    const productQuantity = document.getElementById('second-quantity').innerText;

    //total
    const priceTotal = parseInt(productPrice) + parseInt(productQuantity); //string tai int a covert
    displayData(productName, productPrice, productQuantity, priceTotal)
    //
    disableButton('second-cart')
})
document.getElementById('third-cart').addEventListener('click', function () {
    serial = serial + 1;//p no barbe
    const productName = document.getElementById('third-name').innerText;
    const productPrice = document.getElementById('third-price').innerText;
    const productQuantity = document.getElementById('third-quantity').innerText;

    //total
    const priceTotal = parseInt(productPrice) / parseInt(productQuantity); //string tai int a covert
    displayData(productName, productPrice, productQuantity, priceTotal)
    disableButton('third-cart')


})
document.getElementById('fourth-cart').addEventListener('click', function () {
    serial = serial + 1;//p no barbe
    const productName = document.getElementById('fourth-name').innerText;
    const productPrice = document.getElementById('fourth-price').innerText;
    const productQuantity = document.getElementById('fourth-quantity').innerText;

    //total
    const priceTotal = parseInt(productPrice) * parseInt(productQuantity); //string tai int a covert
    displayData(productName, productPrice, productQuantity, priceTotal)
    disableButton('fourth-cart')
})
document.getElementById('last-cart').addEventListener('click', function () {
    serial = serial + 1;//p no barbe
    const productName = document.getElementById('last-name').innerText;
    const productPrice = document.getElementById('last-price').value;
    const productQuantity = document.getElementById('last-quantity').value;
    console.log(productName, productPrice, productQuantity);

    //total
    const priceTotal = parseInt(productPrice) + parseInt(productQuantity); //string tai int a covert
    displayData(productName, productPrice, productQuantity, priceTotal)

    if (productPrice == '' || productQuantity == '' || productPrice <= 0 || productQuantity <= 0) {
        return alert('enter valid number')
    }
    displayData(productName, productPrice, productQuantity, priceTotal)

    //
    disableButton('last-cart')
})