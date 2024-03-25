let questOne = {
    question: "Question : Quel pays a remporté la Coupe du Monde de Chess Boxing en 1956?",
    options: [
        "a) Madagascar",
        "b) Antarctique",
        "c) L'île de Pâques",
        "d) Ça existe ?",
    ],
    image: "./assets/img/chess-boxing.jpg"
    // d
}
questOne.goodAnswer = questOne.options[3]



let questTwo = {
    question: "Question : Qui est l'auteur du célèbre roman 'Les Aventures d'un Pingouin dans l'Espace'?",
    options: [
        "a) Jules Verne",
        "b) George Orwell",
        "c) Un pingouin anonyme",
        "d) Albert Einstein",
    ],
    image: "./assets/img/pingouin-spatial.jpg"
    // c
}
questTwo.goodAnswer = questTwo.options[2]


let questThree = {
    question: "Question : Quel est l'animal de compagnie préféré de Napoléon Bonaparte?",
    options: [
        "a) Son bien aimé cheval 'Marengo'",
        "b) Le requin lutin",
        "c) Le Glaucus atlanticus",
        "d) La crevette-mante religieuse",
    ],
    image: "./assets/img/napoleon-bonaparte.png"
    // a
}

questThree.goodAnswer = questThree.options[0]


let questFour = {
    question: "Question : Quelle est la langue parlée par les extraterrestres selon les experts en ufologie?",
    options: [
        "a) Klingon",
        "b) Esperanto",
        "c) Le français",
        "d) Le 'Bip-Bip' intergalactique",
    ],
    image: "./assets/img/ovni.png"
    // d
}

questFour.goodAnswer = questFour.options[3]



let questFive = {
    question: "Question : Quel est le plat traditionnel des pirates pendant leurs voyages en mer?",
    options: [
        "a) Des hamburgers",
        "b) Des sushis",
        "c) Je ne sais pas, mais moi, j'aime bien la raclette",
        "d) Des tacos au fromage de chèvre spatial",
    ],
    image: "./assets/img/pirates-mange.jpg"
    // c
}
questFive.goodAnswer = questFive.options[2]


let gameover = false
let index = 0
let questTable = [questOne, questTwo, questThree, questFour, questFive]
let randomTable = randomQuest(questTable)
let counter = 0


displayQuestion(randomTable)


function randomQuest(array) {
    let i = array.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }
    return array;
}



function displayQuestion(arr) {
    document.querySelector('#show-image').src = arr[index].image
    document.querySelector("#quest-title").innerHTML = arr[index].question
    for (let i = 0; i <= arr[index].options.length - 1; i++) {
        console.log(arr[index].options[i]);
        document.querySelectorAll('.select-opt')[i].innerHTML = arr[index].options[i]
    }
    /* OU   
     arr.forEach(el.index)=> {
        document.querySelectorAll('.container)[index].innerHTML = el
    })*/
}


function reply(el) {
    if (gameover == false) {
        /*OU METTRE ICI
         if (gameover == true) {
            return
        }
         */

        let result = document.querySelector('#result')
        let gif = document.querySelector('#gif-result')

        if (el.innerHTML == randomTable[index].goodAnswer) {
            let goodGif = './assets/img/good-gif.gif'
            gif.src = goodGif
            result.innerHTML = "Bravo!";
            result.style.color = "green"
            counter++
        } else {
            result.innerHTML = "Faux!";
            result.style.color = "red"
            let goodGif = './assets/img/wrong-gif.gif'
            gif.src = goodGif
        }
        if (index >= randomTable.length - 1) {
            gameover = true
            setTimeout(() => {
                document.querySelector('#result').innerHTML = "Score : " + counter
                document.querySelector('#result').style.color = "#00d4ff"
                let goodGif = './assets/img/whoa-gif.gif'
                gif.src = goodGif
            }, 2000);
        } else {
            index++;
            setTimeout(() => {
                gif.src = ""
                result.innerHTML = "";
                displayQuestion(randomTable)
            }, 2000)
        }
    }
}



