var others = [{
    name: 'Xiaomi TV Max 86',
    picture: 'assets/img/TV/max86.png'
},
{
    name: 'Xiaomi TV A Pro 65',
    picture: 'assets/img/TV/APro65.webp'
},
{
    name: 'Xiaomi TV A Pro 55',
    picture: 'assets/img/TV/Apro55.png'
},
{
    name: 'Xiaomi TV A Pro 43',
    picture: 'assets/img/TV/Apro43.png'
},
{
    name: 'Xiaomi TV A 55',
    picture: 'assets/img/TV/A55.png'
},
{
    name: 'Xiaomi TV A2 32',
    picture: 'assets/img/TV/A232.webp'
},
{
    name: 'Xiaomi TV 43 FHD',
    picture: 'assets/img/TV/43FHD.webp'
},
{
    name: 'Xiaomi Smart Air Purifier 4 Compact...',
    picture: 'assets/img/TV/smartairpurifier.png'
},
{
    name: 'Mi Portable Bluetooth Speaker Mini',
    picture: 'assets/img/TV/speakermini.png'
},
{
    name: 'Xiaomi TV A2 58',
    picture: 'assets/img/TV/A258.webp'
},
{
    name: 'Mi Smart Compact Projector',
    picture: 'assets/img/TV/compactprojector.png'
},
{
    name: 'Mi Portable Bluetooth Speaker (16W)',
    picture: 'assets/img/TV/speaker.webp'
},
{
    name: 'Xiaomi TV A2 32"',
    picture: 'assets/img/TV/A232.webp'
},
{
    name: 'Xiaomi TV A2 FHD 43"',
    picture: 'assets/img/TV/A2FHD43.png'
},
{
    name: 'Mi Smart Projector 2',
    picture: 'assets/img/TV/projector.webp'
},
{
    name: 'Mi TV P1 55"',
    picture: 'assets/img/TV/P155.png'
},
{
    name: 'Mi TV P1 43"',
    picture: 'assets/img/TV/P143.png'
}
]

var products = document.querySelector('.row')

others.forEach(item => {
    var newproduct = document.createElement('div')
    newproduct.classList.add('col-lg-3','col-md-4' ,'text-center')
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

var searchInputmb = document.querySelector('.form-control')
var searchInput = document.querySelector('.search')
var display = document.querySelector('.row')

searchInput.addEventListener('input', function(e){
        let txtsearch = e.target.value.trim().toLowerCase()
        let listproductDOM = document.querySelectorAll('.col-lg-3')
        document.querySelector('.search').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                listproductDOM.forEach(item =>{
                    if(item.innerText.toLowerCase().includes(txtsearch)){
                        item.classList.remove('hide')
                    }
                    else{
                        item.classList.add('hide')
                    }
                })
        }
    })          
})

searchInputmb.addEventListener('input', function(e){
    let txtsearch = e.target.value.trim().toLowerCase()
    let listproductDOM = document.querySelectorAll('.col-md-4')
    document.querySelector('.btn-outline-success').addEventListener('click', function (e) {
            listproductDOM.forEach(item =>{
                if(item.innerText.toLowerCase().includes(txtsearch)){
                    item.classList.remove('hide')
                }
                else{
                    item.classList.add('hide')
                }
            })
    })          
})
