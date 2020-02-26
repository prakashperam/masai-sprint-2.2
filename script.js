var allItems = [{
    itemName: "Apple",
    quantiy: 10,
    url: 'https://via.placeholder.com/600x300',
    remaining: 9
}, {
    itemName: "Banana",
    quantiy: 15,
    url: "https://via.placeholder.com/600x300",
    remaining: 9
},
{

    itemName: "Oranges",
    quantiy: 20,
    url: "https://via.placeholder.com/600x300",
    remaining: 9
},
{

    itemName: "Mangoes",
    quantiy: 30,
    url: "https://via.placeholder.com/600x300",
    remaining: 9
},
{

    itemName: "Apricot",
    quantiy: 30,
    url: "https://via.placeholder.com/600x300",
    remaining: 9
}
]


window.onload = function displayItems() {
    var allItemes = [...allItems]
    console.log("working")
    var parent = document.getElementById('item_container')
    var img = document.createElement('img');

    for (var i = 0; i < allItems.length; i++) {
        var br2 = document.createElement('br')
        var br = document.createElement('br')
        //creating child div
        var div = document.createElement('div');

        //setting image and Attributes
        var img = document.createElement('img');
        img.setAttribute('src', allItems[i].url);
        img.setAttribute('alt', allItemes[i].itemName);

        // console.log(img)

        //logoImage

        var imgLogo = document.createElement('img')
        imgLogo.setAttribute('src', "http://via.placeholder.com/400")
        imgLogo.addEventListener('click', addtoCart)

        //creating items to display quantity and remaining items 

        var spanName = document.createElement('span')
        var smallName = document.createElement('small');
        smallName.textContent = allItemes[i].itemName;
        spanName.appendChild(smallName)

        //order quantity
        var spanOrder = document.createElement('span');
        var spanOrderSmall = document.createElement('small');
        spanOrderSmall.textContent = "Quanity:";
        spanOrder.appendChild(spanOrderSmall);

        //order quantity input
        var inputQuantiy = document.createElement('input');

        //items remaining 

        var spanRemaining = document.createElement('span');
        var smallRemaining = document.createElement('span');
        smallRemaining.textContent = "Items Remaining: "
        spanRemaining.appendChild(smallRemaining)

        var inputRemining = document.createElement('input')
        inputRemining.textContent = allItemes.remaining
        div.append(img, imgLogo, spanName,br2, spanOrder, inputQuantiy,br, spanRemaining, inputRemining);
        parent.appendChild(div)

    }
}



function addtoCart(){
    console.log("Now workig??")
    var cartparent = document.getElementById('cartItems')

    var quantity = document.querySelector('input').value;
    

    var firstChild = document.querySelector('#cartItems>div>div:nth-of-type(1)');
    console.log(firstChild)

    firstChild.textContent = "working"
    // firstChild.append
    cartparent.append(firstChild)

    //check if the quantiry is greater than the remaining items quantity;
    //as you enter and append the values, the remaining items value should be set to original - qty;

}


var allCarts = document.querySelectorAll
