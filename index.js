let people = [];

function addPerson (){
    let person = {
        name: document.getElementById('name').value,
        surname: document.getElementById('surname').value,
        age: document.getElementById('age').value,
    };
    
    people.push(person);
    console.log(people)
}

let outputBox = document.getElementById('table');

    function print(){
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