let people = JSON.parse(localStorage.getItem('person')) || [];

function addPerson (){
    let person = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        age: document.getElementById('age').value,
    };
    
    people.push(person);
    console.log(people)
    localStorage.setItem('person', JSON.stringify(people));
}

let outputBox = document.getElementById('table');

    function print(){
        people = JSON.parse(localStorage.getItem('person'))
        outputBox.innerHTML = '';
        people.forEach((data) =>{
            outputBox.innerHTML +=`
            <tr class="row">
            <td>${data.name}</td>
            <td>${data.surname}</td>
            <td>${data.age}</td> 
            </tr>
            `
        })
    }
    setInterval(function () {
        print();
    }, 100);

    function undo(){
        people.pop();
    }