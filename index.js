console.log("hello");

var listElement = document.querySelector('#list');

listElement.addEventListener('click', (event) =>{
    alert(event.target.textContent);
})

fetch('https://jsonplaceholder.typicode.com/todos').then((data)=>{
return data.json()
}).then((data1) =>{
    console.log(data1);
    renderList(data1)
})

function renderList(data){
    const listData = data.slice(0,20);
    listData.forEach(element => {
        var list = document.createElement('li');
        list.textContent = element.title;
        listElement.appendChild(list);
    });
}