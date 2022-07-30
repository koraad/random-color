
const colorCode = document.getElementById('color-code')
const submitButton = document.getElementById('submit-btn')
const normalButton = document.getElementById('normal-btn')
const hexButton = document.getElementById('hex-btn')
const hexLetters = [0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F']




submitButton.onclick = ()=> {
    
    if(normalButton.classList.contains('active')) {
        
        colorsArray = ['#FF5733', '#4AB725', '#25B7B5', '#A325B7', '#B72525', '#BBAB26'];

        let randomNumNormalIndex = randomNumber(colorsArray);
        changeColor(colorsArray[randomNumNormalIndex])
  
    } else if (hexButton.classList.contains('active')){

        
        let randoms='#'
        
        for(let i=0; i<6; i++) {
            randoms += hexLetters[randomNumber(hexLetters)]
        }

        changeColor(randoms)
    } else {
        alert('Please select a verison as "Hex" or "Normal" first')
    }
}

function randomNumber(array) {
    return Math.floor(Math.random() * array.length)
}

function changeColor(random) {
    colorCode.innerText = random;

    document.body.style.backgroundColor = random;
}

function normalMode() {
    alert('Normal version selected')
    normalButton.classList.add('active')
    hexButton.classList.remove('active')
    hexButton.disabled = false
    normalButton.disabled = true
}


function hexMode() {
    alert('Hex version selected')
    hexButton.classList.add('active')
    normalButton.classList.remove('active')
    hexButton.disabled = true
    normalButton.disabled = false
}



