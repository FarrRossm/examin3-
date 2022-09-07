let $ = function (element) {
    return document.querySelector(element)
}
let createElements = function (tag) {
    let newElement = document.createElement(tag)
    return createElements
}


let right = document.querySelector('.right')


let bread = document.querySelector('.dough')
let breadTxt = document.querySelector('.bread-result')
bread.addEventListener('change', () => {
    breadTxt.innerHTML = ''
    breadTxt.innerHTML = `${bread.value}`
    // .appendChild(breadTxt)
    // console.log(right);
})

let size = document.querySelector('.bread-diametr');
let sizeTxt = document.querySelector('.size-result')
size.addEventListener('change', () => {
    let result = document.querySelector('input[name="size-bread"]:checked').value;
    sizeTxt.innerHTML = ''
    sizeTxt.innerHTML = `<span> ${result} cm</span>`
    console.log(result);
})

let insideForm = document.querySelector(".inside-form");
let insideBlock = document.querySelector(".inside-block");
let list = document.querySelector(".ul");
let array = ["Pomidor","Kurka go'shti","Zaytun","Tuzlangan bodring","Qo'ziqorin","Qazi"];

let arrayNew =  [];
function renderArray(){
    array.forEach(element =>{
        let label = document.createElement("label")
        label.innerHTML = element;
        label.htmlFor = element;
        label.classList.add('label')
        let input = document.createElement("input");
        let wrapper = document.createElement("div");
        input.value = element;
        input.id = element;
        input.type = "checkbox";
        input.classList.add('checkbox')
        wrapper.classList.add('wrapper')
        insideForm.appendChild(insideBlock)
        insideBlock.appendChild(input)
        wrapper.appendChild(input)
        wrapper.appendChild(label)
        insideBlock.appendChild(wrapper)
        input.addEventListener("click", () => {
            list.innerHTML = "";
            if(input.checked){
                arrayNew.push(element);
            }else{
                let num = arrayNew.indexOf(element)
                arrayNew.splice(num, 1)
            }
            arrayNew.forEach(element => {
                let li = document.createElement("li")
                li.innerHTML = `<p><span>-${element}</span></p>`;
                list.appendChild(li)
            })
        })

    })
}
renderArray() 

let form = document.querySelector(".form1");
let list1 = document.querySelector(".ul1");
let array1 = ['Achchiq' , 'Sosiskali'];

let arrayNew1 =  [];
function renderArray1(){
    array1.forEach(element =>{
        let label = document.createElement("label")
        label.innerHTML = element;
        label.htmlFor = element;
        label.classList.add('label')
        let input = document.createElement("input");
        let wrapper = document.createElement("div");
        input.value = element;
        input.id = element;
        input.type = "checkbox";
        input.classList.add('checkbox')
        wrapper.classList.add('wrapper')
        form.appendChild(input)
        wrapper.appendChild(input)
        wrapper.appendChild(label)
        form.appendChild(wrapper)
        // insideBlock.appendChild(label)
        input.addEventListener("click", () => {
            list1.innerHTML = "";
            if(input.checked){
                arrayNew1.push(element);
            }else{
                let num = arrayNew1.indexOf(element)
                arrayNew1.splice(num, 1)
                        }
            arrayNew1.forEach(element => {
                let li1 = document.createElement("li")
                li1.innerHTML = `<p><span>-${element}</span></p>`;
                list1.appendChild(li1)
            })
        })

    })
}
renderArray1() 
