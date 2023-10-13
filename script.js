let numTurns = 0, message = "", cardsChosen = [], cardsChosenId = [], cardsWon = [];

document.addEventListener('DOMContentLoaded', () => {

    
    const cardArray = [
        {
            name: 'parannoul',
            img: 'images/parannoul.jpg'
        },
        {
            name: 'parannoul',
            img: 'images/parannoul.jpg'
        },
        {
            name: 'totoro',
            img: 'images/totoro.jpg'
        },
        {
            name: 'totoro',
            img: 'images/totoro.jpg'
        },
        {
            name: 'darkness',
            img: 'images/darkness.jpg'
        },
        {
            name: 'darkness',
            img: 'images/darkness.jpg'
        },
        {
            name: 'gudetama',
            img: 'images/gudetama.jpg'
        },
        {
            name: 'gudetama',
            img: 'images/gudetama.jpg'
        },
        {
            name: 'joker',
            img: 'images/joker.jpg'
        },
        {
            name: 'joker',
            img: 'images/joker.jpg'
        },
        {
            name: 'queen',
            img: 'images/queen.jpg'
        },
        {
            name: 'queen',
            img: 'images/queen.jpg'
        },
        {
            name: 'jack',
            img: 'images/jack.jpg'
        },
        {
            name: 'jack',
            img: 'images/jack.jpg'
        },
        {
            name: 'king',
            img: 'images/king.jpg'
        },
        {
            name: 'king',
            img: 'images/king.jpg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

   
    const grid = document.querySelector('.grid')

    const numTurnsDisplay = document.getElementById('numTurnsDisplay');
    const messageDisplay = document.getElementById('messageDisplay');

    const createBoard = () => {
        const grid = document.querySelector('.grid');
        
        for (let i = 0; i < 16; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/card.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    };
    
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId.name])
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 200)
        }
    }

    function checkForMatch() {
        numTurns++;
        numTurnsDisplay.textContent = numTurns;
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        const cardNameOne = cardArray[optionOneId].name;
        const cardNameTwo = cardArray[optionTwoId].name;

        cardNameOne === cardNameTwo
    ? (function () {
          messageDisplay.textContent = "Match Made In Heaven";
          cards[optionOneId].removeEventListener('click', flipCard);
          cards[optionTwoId].removeEventListener('click', flipCard);
          cardsWon.push(cardNameOne);
      })()
    : (function () {
          cards[optionOneId].setAttribute('src', 'images/card.jpg');
          cards[optionTwoId].setAttribute('src', 'images/card.jpg');
          messageDisplay.textContent = "Nuh uh";
      })();
        cardsChosen = []
        cardsChosenId = []

        if (cardsWon.length === cardArray.length / 2) {
            messageDisplay.textContent = `You have matched them all in ${numTurns} turns`; 
        }

    }
    createBoard();
})
