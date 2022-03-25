import {arr, indexOfRaund} from './CategoryPage.js'
const overlay = document.querySelector('.overlay')

// artArr


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
 const liDot = [
    {class: 'dot'},
    {class: 'dot'},
    {class: 'dot'},
    {class: 'dot'},
    {class: 'dot'},
    {class: 'dot'},
    {class: 'dot'},
    {class: 'dot'},
    {class: 'dot'},
    {class: 'dot'}
]

let currentHashRound = null
let isCorrect = false

let dotIndex = 0
let correctAnsver = null
let answerUser = null
export const answers = []
export const arrForScore= {0:[],
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

export let index = 0

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


function isCorrectAnswer(correct, answerUser, i){
   
    if(correct===answerUser){
        liDot[dotIndex].class = 'dot-active'
        arr['arrArt'][indexOfRaund].correctAnsver +=1
        arrForScore[indexOfRaund][i].isCorrect=true
        isCorrect=true
        
    } else{
        isCorrect=false
    }
    dotIndex++
}

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
   
   let modal =document.querySelector('.modal') 
  
    modal.classList.remove('active');
    overlay.classList.remove('active');

 }
 function uniq(a) {
    const prims = {"boolean":{}, "number":{}, "string":{}}, objs = [];

    return a.filter(function(item) {
        var type = typeof item;
        if(type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objs.indexOf(item) >= 0 ? false : objs.push(item);
    });
 }

function getUrl(){
    let urlApi = window.location.href.split('/')
    
    let raundNum = urlApi[urlApi.length-1]
    return raundNum
}

const getImg = async () => {
    
    let quastionArr = []
    
    let url =  'https://raw.githubusercontent.com/adzinetskatsiaryna/dataImages/main/data.json'
    let response = await fetch (url)
    const items = await response.json();
    // let urlApi = window.location.href.split('/')
    // console.log(urlApi)
    // let raundNum = urlApi[urlApi.length-1]
    currentHashRound = getUrl()
    let correctAnsvers = getCurrentQustion(items, currentHashRound,  arr.isSelected)  
    let x = correctAnsvers[index]
    if(x){
        correctAnsver = x
    }
   
    if(arrForScore[indexOfRaund].length>10){
        arrForScore[indexOfRaund].length=0
    } arrForScore[indexOfRaund].push(correctAnsver)
     
   
    quastionArr.push(correctAnsver)
    index ++
    setArr(items, quastionArr)
    
    quastionArr=uniq(quastionArr)
    if(quastionArr.length < 4 ){
        quastionArr = setArr(items, quastionArr)
    }
    quastionArr = isLength(quastionArr)
    return  shuffle(quastionArr)
   
   };

   const renderPage = async ()=>{
    
    let pictures = await getImg() 
    
    let i = (correctAnsver.imageNum)
    
    let view  
       
        view = `
        <section class="section section-art">
            <div class='container'>
                <header></header>
                <p class = "text-quastion">Кто автор этой картины?</p>
                <div class="big-picture" style="background-image: url(https://raw.githubusercontent.com/adzinetskatsiaryna/imagesArtQuiz/main/img/${i}.jpg)">
                    <ul class = "dots">${liDot.map(li=>`<li class="${li.class}"></li>`).join('')}</ul>
                </div>
                <ul class = 'content-art'>${pictures.map(p=>`<li class="card-artist" data-num = ${p.imageNum}>${p.author}</li>`).join('')}</ul>

            </div>
            <div class="modal" data-modal="1">
                <div class = "container">
                    <div class="modal-picture" style="background-image: url(https://raw.githubusercontent.com/adzinetskatsiaryna/imagesArtQuiz/main/img/${i}.jpg)">
                   <span id='span-modal'></span>    
                    </div>
                    <p class="modal-title">${correctAnsver.name}</p>
                    <p class="modal-subtitle">${correctAnsver.author}, <span class="modal-text">${correctAnsver.year}</span></p>
                    <a  href = './#/quastionart/${currentHashRound}' class="modal-btn-next">next</a>
                </div>
            </div>

            <div class="modal" data-modal="2">
                <div class = "container">
                    <div class = "modal-congratulations">
                             
                    </div>
                    <p class="modal-title">Congratulations!</p>
                    <div class="modal-answers">
                        <span>${arr["arrArt"][indexOfRaund].correctAnsver}</span>
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
  

let QuastionPageArt = {
    
    render: renderPage,
    after_render: async () => {
        
        const modalBtnNext = document.querySelector('.modal-btn-next')
        const modal2BtnNext = document.querySelector('.modal2-btn-next')
        const modals = document.querySelectorAll('.modal')
        const answer = document.querySelectorAll('.card-artist')
        modalBtnNext.addEventListener('click', function(){
            
            closeModal()
            renderContent()
        })
        modal2BtnNext.addEventListener('click', ()=>{
            arr.isSelected = 'arrArt'
            overlay.classList.remove('active');
            
        })
        const modalBtnHome = document.querySelector('.modal-btn-home')
        modalBtnHome.addEventListener('click' , closeModal)
        
        answer.forEach(a=>{a.addEventListener('click', (e)=>{
            let urlApi = window.location.href.split('/')
            let raundNum = urlApi[urlApi.length-1] 
            let currentRaund = arr['arrArt'].find(el=>el.id===raundNum)
            currentRaund.iscliked=true
            answerUser = e.target
            let data = answerUser.dataset.num 
            if(answers.length === 10){
               
                liDot.forEach(li=>li.class='dot')
                answers.length=0
                correctAnsver = null
                index=0
                dotIndex=0
                answerUser = null 
                openModal(modals[1])
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
    content.innerHTML = await QuastionPageArt.render();
    await QuastionPageArt.after_render();
    
}

export default QuastionPageArt