var redmi = [{
    name: 'Redmi 13C',
    picture: 'assets/img/Redmi/13C.png'
},
{
    name: 'Redmi 12',
    picture: 'assets/img/Redmi/12.png'
},
{
    name: 'Redmi Note 12S',
    picture: 'assets/img/Redmi/12S.png'
},
{
    name: 'Redmi Note 12 Pro',
    picture: 'assets/img/Redmi/note12Pro.png'
},
{
    name: 'Redmi A2+',
    picture: 'assets/img/Redmi/A2+.webp'
},
{
    name: 'Redmi Note 12',
    picture: 'assets/img/Redmi/note12.png'
},
{
    name: 'Redmi Note 12 Pro 5g',
    picture: 'assets/img/Redmi/note12pro5g.webp'
},
{
    name: 'Redmi 12C',
    picture: 'assets/img/Redmi/12C.png'
},
{
    name: 'Redmi Note 11S 5g.',
    picture: 'assets/img/Redmi/note11S5g.png'
},
{
    name: 'Redmi 10 5G',
    picture: 'assets/img/Redmi/105G.png'
},
{
    name: 'Redmi Note 11 Pro',
    picture: 'assets/img/Redmi/note11pro.png'
},
{
    name: 'Redmi Note 11 Pro+ 5g',
    picture: 'assets/img/Redmi/note11pro+5g.png'
},
{
    name: 'Redmi 10 2022',
    picture: 'assets/img/Redmi/102022.png'
},
{
    name: 'Redmi A1',
    picture: 'assets/img/Redmi/A1.png'
},
{
    name: 'Redmi Note 11',
    picture: 'assets/img/Redmi/note11.png'
},
{
    name: 'Redmi Note 11 Pro 5g',
    picture: 'assets/img/Redmi/note11pro5g.png'
},
{
    name: 'Redmi 10',
    picture: 'assets/img/Redmi/10.png'
},
{
    name: 'Redmi Note 10 5g',
    picture: 'assets/img/Redmi/note105g.png'
},
{
    name: 'Redmi Note 10s',
    picture: 'assets/img/Redmi/note10s.png'
},
{
    name: 'Redmi Note 10 Pro',
    picture: 'assets/img/Redmi/note10pro.png'
},
{
    name: 'Redmi 10A',
    picture: 'assets/img/Redmi/10A.png'
},
{
    name: 'Redmi 10c',
    picture: 'assets/img/Redmi/10c.png'
},
{
    name: 'Redmi Note 11S',
    picture: 'assets/img/Redmi/note11S.png'
},
{
    name: 'Redmi Note 10',
    picture: 'assets/img/Redmi/note10.png'
}
]

var products = document.querySelector('.row')

redmi.forEach(item => {
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
                var a = 0;
                listproductDOM.forEach(item =>{
                    if(item.innerText.toLowerCase().includes(txtsearch)){
                        item.classList.remove('hide')
                    }
                    else{
                        item.classList.add('hide')
                        a++;
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



