
import {arr, indexOfRaund} from './CategoryPage.js'
const overlay = document.querySelector('.overlay')
// pictureArr


let currentHashRound = null

function getCurrentQustion(arr, raund, category){
   
    
    if(category === 'arrArt'){
        switch (raund) {
            case '01':
               return  arr.slice(0, 10)
                break;
            case '02':
                 return arr.slice(10, 20)
                break;
            case  '03':
                return arr.slice(20, 30)
                break;
            case  '04':
                return arr.slice(30, 40)
                break; 
            case  '05':
               return arr.slice(40, 50)
                break;    
            case  '06':
                return arr.slice(50, 60)
                break; 
            case  '07':
               return arr.slice(60, 70)
                break;
            case  '08':
                return arr.slice(70, 80)
                break;
            case  '09':
                return arr.slice(80, 90)
                break;
            case  '10':
                return arr.slice(90, 100)
                break;    
            case  '11':
                return arr.slice(100, 110)
                break;
            case  '12':
                return arr.slice(110, 120)
                break;        
        }    
       
    }
    if(category === 'arrPicture'){
        switch (raund) {
            case '01':
                return  arr.slice(120, 130)
                 break;
             case '02':
                  return arr.slice(130, 140)
                 break;
             case  '03':
                 return arr.slice(140, 150)
                 break;
             case  '04':
                 return arr.slice(150, 160)
                 break; 
             case  '05':
                return arr.slice(160, 170)
                 break;    
             case  '06':
                 return arr.slice(170, 180)
                 break; 
             case  '07':
                return arr.slice(180, 190)
                 break;
             case  '08':
                 return arr.slice(190, 200)
                 break;
             case  '09':
                 return arr.slice(200, 210)
                 break;
             case  '10':
                 return arr.slice(210, 220)
                 break;    
             case  '11':
                 return arr.slice(220, 230)
                 break;
             case  '12':
                 return arr.slice(230, 240)
                 break;      
            
        }
        
    }
   return arr
}

let isCorrect =false
// let indexOfRaund = 0
export const arrForScorePicture= {0:[],
    1:[],
    2:[],
    3:[],
    4:[],
    5:[],
    6:[],
    7:[],
    8:[],
    9:[],
    10:[],
    11:[],
    12:[],
}


let dotIndex = 0
let correctAnsver = null
let answerUser = null
export const answers = []

function shuffle(array) {
   return array.sort(() => Math.random() - 0.5);
  }
function createRandomObj (arr){
   let randomObj =  arr[Math.floor(Math.random() * arr.length)];
   return randomObj
}

function setArr (arr, newArr){
    while( newArr.length < 4){
        newArr.push(createRandomObj (arr))
    }
  return newArr
}
function isLength(arr){
    if(arr.length > 4){
       return arr.slice(0, 4)
    }
    else return arr
}
let index = 0

function isCorrectAnswer(correct, answerUser, i){
   
    if(correct===answerUser){
        arr['arrPicture'][indexOfRaund].correctAnsver +=1
        arrForScorePicture[indexOfRaund][i].isCorrect=true
        isCorrect=true
    }
    else{
        isCorrect=false
    }
    dotIndex++
}

function uniq (a) {
    const prims = {"boolean":{}, "number":{}, "string":{}}, objs = [];

    return a.filter(function(item) {
        var type = typeof item;
        if(type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
  }
  

const getImg = async () => {
   
    let quastionArr = []
    
    let url =  'https://raw.githubusercontent.com/adzinetskatsiaryna/dataImages/main/data.json'
    let response = await fetch (url)
    const items = await response.json();
    let urlApi = window.location.href.split('/')
    let raundNum = urlApi[urlApi.length-1] 
    let correctAnsvers = getCurrentQustion(items, raundNum, arr.isSelected) 
    currentHashRound = raundNum
    let x = correctAnsvers[index]
    if(x){
        correctAnsver = x
    }
    if(arrForScorePicture[indexOfRaund].length>10){
        arrForScorePicture[indexOfRaund].length=0
    } arrForScorePicture[indexOfRaund].push(correctAnsver)
     
    index ++
    quastionArr.push(correctAnsver)
    setArr(items, quastionArr)
    
    quastionArr=uniq(quastionArr)
    if(quastionArr.length < 4 ){
       quastionArr= setArr(items, quastionArr)
    }
    quastionArr = isLength(quastionArr)
    return  shuffle(quastionArr)
   
   };

   //modal

   function openModal(el) {
    const span = document.querySelector('#span-modal')
    let modalId = el.getAttribute('data-modal'),
    modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
    modalElem.classList.add('active');
    overlay.classList.add('active');
    
    if(isCorrect){
        span.classList.add("picture-correct-answer")
        span.classList.remove("picture-uncorrect-answer")
    }else{
        span.classList.add("picture-uncorrect-answer")
        span.classList.remove("picture-correct-answer")
    }
    
 };
 function closeModal(e) {
    
   let parentModal = this.closest('.modal');
   parentModal.classList.remove('active');
   overlay.classList.remove('active');
 }

async function getPicture(i) {  
    const img = new Image();
      url = `https://raw.githubusercontent.com/adzinetskatsiaryna/imagesArtQuiz/main/img/${i}.jpg`;
     return img.src = `${url}` 
   }

   const renderPage = async ()=>{
    
    let pictures = await getImg() 
    let i = (correctAnsver.imageNum)
    
    let view     
        view = `
        <section class="section section-piqtures">
            <div class='container'>
                <header></header>
                <p class="quastion-picture-title">Какую картину создал ${correctAnsver.author}?</p>
                <ul class = "content-picture">${pictures.map(p=>`<li class = "card-picture" data-num = ${p.imageNum} style="background-image: url(https://raw.githubusercontent.com/adzinetskatsiaryna/imagesArtQuiz/main/img/${p.imageNum}.jpg)"></li>`).join('')}</ul>
            </div>

            <div class="modal" data-modal="1">
                <div class = "container">
                    <div class="modal-picture" style="background-image: url(https://raw.githubusercontent.com/adzinetskatsiaryna/imagesArtQuiz/main/img/${i}.jpg)">
                    <div class="span-js"></div>
                    <span id='span-modal'></span>    
                    </div>
                    <p class="modal-title">${correctAnsver.name}</p>
                    <p class="modal-subtitle">${correctAnsver.author}, <span class="modal-text">${correctAnsver.year}</span></p>
                    <a  href = './#/quastionpicture/${currentHashRound}' class="modal-btn-next">next</a>
                </div>
            </div>

            <div class="modal" data-modal="2">
                <div class = "container">
                    <div class = "modal-congratulations">
                             
                    </div>
                    <p class="modal-title">Congratulations!</p>
                    <div class="modal-answers">
                        <span>${arr["arrPicture"][indexOfRaund].correctAnsver}</span>
                        <span>/ 10</span>
                    </div>
                    <div class="modal-btn-container">
                        <a href = "./#/" class="modal-btn-home">Home</a>
                        <a  href = './#/category' class="modal2-btn-next">NextQuiz</a>
                    </div>    
                </div>
            </div>
        </section>
    `
    return view 
   }
  

let QuastionPagePicture = {
    
    render: renderPage,
    after_render: async () => {
        const modalBtnNext = document.querySelector('.modal-btn-next')
        const modal2BtnNext = document.querySelector('.modal2-btn-next')
        const modals = document.querySelectorAll('.modal')
        const answer = document.querySelectorAll('.card-picture')
        modalBtnNext.addEventListener('click', closeModal)
        modalBtnNext.addEventListener('click', renderContent)
        modal2BtnNext.addEventListener('click', ()=>{
            arr.isSelected = 'arrPicture'
            overlay.classList.remove('active');
            
        })
       
        //modal2BtnNext.addEventListener('click', closeModal)
        //modal2BtnNext.addEventListener('click', renderContent)
        const modalBtnHome = document.querySelector('.modal-btn-home')
        modalBtnHome.addEventListener('click' , closeModal)
        
      
        answer.forEach(a=>{a.addEventListener('click', (e)=>{
            let urlApi = window.location.href.split('/')
            let raundNum = urlApi[urlApi.length-1] 
            let currentRaund = arr['arrPicture'].find(el=>el.id===raundNum)
            currentRaund.iscliked=true
            answerUser = e.target
            let data = answerUser.dataset.num 
           
            if(answers.length === 10){
                
                answers.length=0
                correctAnsver = null
                answerUser = null
                index=0
                // openModal(modals[0])
                openModal(modals[1])
                //indexOfRaund +=1
            } answers.push(data)
           if(correctAnsver){
               
            isCorrectAnswer(correctAnsver.imageNum, data, index-1)
            openModal(modals[0])
           } else{
               return
           }
            
        })})
      
    
    }
}

const renderContent = async () => {

    const content = null || document.getElementById('page-container');
    content.innerHTML = ''
    content.innerHTML = await QuastionPagePicture.render();
    await QuastionPagePicture.after_render();
  
}

export default QuastionPagePicture