var container = document.querySelector('.container')
var imgList = document.querySelectorAll('.img')
var btnList = document.querySelectorAll('.btn')

var arr = []
imgList.forEach(item=>{
    arr.push({
        src: item.src,
        type: item.getAttribute('type')
    })
})

btnList.forEach(btn=>{
    btn.addEventListener('click', e=>{
        let type = e.currentTarget.getAttribute('type')
        let filterData = arr.filter(phone=>{
            return phone.type = type
        })
        return filterData
    })
})

function Render(list){
    container.innerHTML = ''
    list.forEach(item => {
        let imgElement = document.createElement('img')
        imgElement.src = item.src
        imgElement.setAttribute('type', item.type)
        container.append(imgElement)
    });
}