// var btnList = document.querySelectorAll('button.btn')
// var itemList = document.querySelectorAll('.carousel-item')

// var arr = []
// itemList.forEach(item => {
//     arr.push({
//         src: item.src,
//         type: item.getAttribute('type')
//     })
// });

// btnList.forEach(btn =>{
//     btn.addEventListener('click', e=>{
//         let type = e.currentTarget.getAttribute('type')
//         itemList.forEach(item=>{
//             let itemtype = item.getAttribute('type')
//             if(itemtype == type){
//                 item.style.display = 'block'
//             }else{
//                 item.style.display = 'none'
//             }

//         })

//     })
// })

var xiaomi = [
    {
        id: '2',
        name: 'Xiaomi 13T',
        picture: 'assets/img/Xiaomi/13T.webp'
    },
    {
        id: '2',
        name: 'Xiaomi 13T Pro',
        picture: 'assets/img/Xiaomi/13Tpro.webp'
    },
    {
        id: '2',
        name: 'Xiaomi 13',
        picture: 'assets/img/Xiaomi/13.webp'
    },
    {
        id: '2',
        name: 'Xiaomi 13 Pro',
        picture: 'assets/img/Xiaomi/13pro.webp'
    },
    {
        id: '2',
        name: 'Mi 11 Lite',
        picture: 'assets/img/Xiaomi/11lite.webp'
    },
    {
        id: '2',
        name: 'Xiaomi 11 Lite 5G',
        picture: 'assets/img/Xiaomi/11lite5g.webp'
    },
    {
        id: '2',
        name: 'Xiaomi 12T Pro',
        picture: 'assets/img/Xiaomi/12Tpro.webp'
    },
    {
        id: '2',
        name: 'Xiaomi 12 Lite',
        picture: 'assets/img/Xiaomi/12lite.webp'
    },
    {
        id: '2',
        name: 'Xiaomi 12T',
        picture: 'assets/img/Xiaomi/12T.webp'
    },
    {
        id: '2',
        name: 'Xiaomi 11T',
        picture: 'assets/img/Xiaomi/11T.webp'
    },
    {
        id: '2',
        name: 'Xiaomi 11',
        picture: 'assets/img/Xiaomi/11.webp'
    },
    {
        id: '2',
        name: 'Xiaomi 11 Lite 5G NE',
        picture: 'assets/img/Xiaomi/11lite5GNE.webp'
    },
    {
        id: '2',
        name: 'Xiaomi 12',
        picture: 'assets/img/Xiaomi/12.webp'
    },
    {
        id: '2',
        name: 'Xiaomi 11T Pro',
        picture: 'assets/img/Xiaomi/11Tpro.webp'
    },
    {
        id: '2',
        name: 'Xiaomi 12 Pro',
        picture: 'assets/img/Xiaomi/12pro.webp'
    }
]



var others = [{
    name: 'Xiaomi 13T',
    picture: 'assets/img/Xiaomi/13T.webp'
},
{
    name: 'Xiaomi 13T Pro',
    picture: 'assets/img/Xiaomi/13Tpro.webp'
},
{
    name: 'Xiaomi 13',
    picture: 'assets/img/Xiaomi/13.webp'
},
{
    name: 'Xiaomi 13 Pro',
    picture: 'assets/img/Xiaomi/13pro.webp'
},
{
    name: 'Mi 11 Lite',
    picture: 'assets/img/Xiaomi/11lite.webp'
},
{
    name: 'Xiaomi 11 Lite 5G',
    picture: 'assets/img/Xiaomi/11lite5g.webp'
},
{
    name: 'Xiaomi 12T Pro',
    picture: 'assets/img/Xiaomi/12Tpro.webp'
},
{
    name: 'Xiaomi 12 Lite',
    picture: 'assets/img/Xiaomi/12lite.webp'
},
{
    name: 'Xiaomi 12T',
    picture: 'assets/img/Xiaomi/12T.webp'
},
{
    name: 'Xiaomi 11T',
    picture: 'assets/img/Xiaomi/11T.webp'
},
{
    name: 'Xiaomi 11',
    picture: 'assets/img/Xiaomi/11.webp'
},
{
    name: 'Xiaomi 11 Lite 5G NE',
    picture: 'assets/img/Xiaomi/11lite5GNE.webp'
},
{
    name: 'Xiaomi 12',
    picture: 'assets/img/Xiaomi/12.webp'
},
{
    name: 'Xiaomi 11T Pro',
    picture: 'assets/img/Xiaomi/11Tpro.webp'
},
{
    name: 'Xiaomi 12 Pro',
    picture: 'assets/img/Xiaomi/12pro.webp'
}
]

var products = document.querySelector('.row')

xiaomi.forEach(item => {
    var newproduct = document.createElement('div')
    newproduct.classList.add('col-lg-3', 'col-md-4', 'text-center')
    newproduct.innerHTML = `
    <div class="card border-0">
        <img class="card-img-bottom" src="${item.picture}" alt="Card image cap">
        <div class="card-body">
        <p class="card-text">${item.name}</p>
        <button type="button" class="btn">Tìm hiểu thêm</button>
        </div>
    </div>

    `

    products.appendChild(newproduct)
})

for (var i = 0; i < xiaomi.length; i++) {
    if (xiaomi[i].id == 1) {
        xiaomi[i].innerHTML =
            `
            <div class="card border-0">
            <img class="card-img-bottom" src="${item.picture}" style="height: 2px; width: 2px;" alt="Card image cap">
            <div class="card-body">
            <p class="card-text">${item.name}</p>
            <button type="button" class="btn">Tìm hiểu thêm</button>
            </div>
        </div>
        `
    }
}

var searchInputmb = document.querySelector('.form-control')
var searchInput = document.querySelector('.search')
var display = document.querySelector('.row')

searchInput.addEventListener('input', function (e) {
    let txtsearch = e.target.value.trim().toLowerCase()
    let listproductDOM = document.querySelectorAll('.col-lg-3')
    document.querySelector('.search').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            listproductDOM.forEach(item => {
                if (item.innerText.toLowerCase().includes(txtsearch)) {
                    item.classList.remove('hide')
                }
                else {
                    item.classList.add('hide')
                }
            })
        }
    })
})

searchInputmb.addEventListener('input', function (e) {
    let txtsearch = e.target.value.trim().toLowerCase()
    let listproductDOM = document.querySelectorAll('.col-md-4')
    document.querySelector('.btn-outline-success').addEventListener('click', function (e) {
        listproductDOM.forEach(item => {
            if (item.innerText.toLowerCase().includes(txtsearch)) {
                item.classList.remove('hide')
            }
            else {
                item.classList.add('hide')
            }
        })
    })
})



