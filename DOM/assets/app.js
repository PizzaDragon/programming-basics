function averageGrade(){
    let cijfer1 = document.getElementById('cijfer1').innerText;
    let cijfer2 = document.getElementById('cijfer2').innerText;
    let cijfer3 = document.getElementById('cijfer3').innerText;
    let cijfer4 = document.getElementById('cijfer4').innerText;
    
    let average = (Number(cijfer1) + Number(cijfer2) + Number(cijfer3) + Number(cijfer4))/4;
    return average;
}

averageGrade()

function writeToTheDom() {
    // 1 - waar
    let ph = document.getElementById('table');
    // h1 tag en dan tekst
    let trTag = document.createElement('tr');
    let text = document.createElement('td');
    let grade = document.createElement('td');
    text.innerText = 'Gemiddeld cijfer';
    grade.innerText = averageGrade();
    // toevoegen aan body
    trTag.appendChild(text);
    trTag.appendChild(grade);
    ph.appendChild(trTag);
};

writeToTheDom()

function backGroundColor() {
    let array = document.getElementsByTagName('li')
    for (let i = 1; i < array.length; i += 2) { 
        const element = array[i];
        element.style.background = 'red';
    }
}

backGroundColor()

function createImageElement(imgSrcName){
    let image = document.createElement('img')
    image.setAttribute('src', imgSrcName);
    document.body.appendChild(image)
}
createImageElement('Appel-jg.png')