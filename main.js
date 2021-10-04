

document.addEventListener('DOMContentLoaded' , ()=>{


  var showes = document.querySelector(".divrest")
  var btn = document.querySelector(".center")
  var Hello = document.querySelector(".Hello")
  var userName = document.querySelector("#Name")

  showes.style.display='none';




  btn.addEventListener('click' , ()=>{
    let name = prompt("Enter Your Name ")

    if (name) {
     userName.innerHTML = name
    }else{
     userName.innerHTML = "Undefind"
      
    }




    if (showes.style.display === 'none') {
      showes.style.display = 'block';
    } else {
      showes.style.display = 'none';
    }
    btn.remove()



  })
    //card option 
    const cardArray=[

        {
            name: 'smiley-1',
            img: 'images/smiley-1.png'
          },
          {
            name: 'smiley-2',
            img: 'images/smiley-2.png'
          },
          {
            name: 'smiley-3',
            img: 'images/smiley-3.png'
          },
          {
            name: 'smiley-4',
            img: 'images/smiley-4.png'
          },
          {
            name: 'smiley-5',
            img: 'images/smiley-5.png'
          },
          {
            name: 'smiley-6',
            img: 'images/smiley-6.png'
          },
          {
            name: 'smiley-1',
            img: 'images/smiley-1.png'
          },
          {
            name: 'smiley-2',
            img: 'images/smiley-2.png'
          },
          {
            name: 'smiley-3',
            img: 'images/smiley-3.png'
          },
          {
            name: 'smiley-4',
            img: 'images/smiley-4.png'
          },
          {
            name: 'smiley-5',
            img: 'images/smiley-5.png'
          },
          {
            name: 'smiley-6',
            img: 'images/smiley-6.png'
          }
    ]

    const grid = document.querySelector('.grid')
    var cardChosen = []
    var cardChosenId = []
    var resultDisplay = document.querySelector("#result")
    var cardWon=[]


    cardArray.sort(()=> 0.5 - Math.random())
    createBoard()

    //create your board

    function createBoard(){

        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src','images/smiley-0.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)  
        }
    }

    //flip the card
    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardChosen.push(cardArray[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute('src',cardArray[cardId].img)
        if (cardChosen.length ===2) {
            setTimeout(checkForMatch ,300)
        }
    }

    //check For Match function

    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId= cardChosenId[0]
        const optionTwoId= cardChosenId[1]

        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/smiley-0.png')
            cards[optionTwoId].setAttribute('src', 'images/smiley-0.png')
            alert('You have clicked the same image!')
          }
          else if (cardChosen[0] === cardChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', cardArray[optionOneId].img)
            cards[optionTwoId].setAttribute('src', cardArray[optionOneId].img)
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardWon.push(cardChosen)
          } else {
            cards[optionOneId].setAttribute('src', 'images/smiley-0.png')
            cards[optionTwoId].setAttribute('src', 'images/smiley-0.png')
            alert('Sorry, try again')
          }

        cardChosen = []
        cardChosenId = []

        console.log(resultDisplay,"Asdasd")

        resultDisplay.textContent=cardWon.length
        if (cardWon.length === cardArray.length/2) {
            resultDisplay.textContent= "congratulations ! You Found Them All  "
            Hello.remove()
        }




    }


     
})