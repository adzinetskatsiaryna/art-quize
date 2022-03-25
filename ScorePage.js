
import {arrForScore, index} from './QuastionPageArt.js'
import{indexOfRaund, arr} from './CategoryPage.js'
import {arrForScorePicture} from './QuastionPagePicture.js'


const renderPage = async ()=>{
    
   
        if(arrForScore[indexOfRaund].length===11){
            arrForScore[indexOfRaund] = arrForScore[indexOfRaund].slice(0, 10)
         }

        if(arrForScorePicture[indexOfRaund].length===11){
            arrForScorePicture[indexOfRaund]=arrForScorePicture[indexOfRaund].slice(0, 10)
        }
      
    
    let view
    
        if(arr.isSelected === 'arrArt'){
         view =  /*html*/`
            <section class="section scorePage">
               
                <header>
                <div class="header-score-container"> <h1 class="logo-mini"></h1>
                <span class="score-subtitle">Score</span>
                <a  class="category-link" href = "./#/">Home</a> </div>               
               
                <a class='btn-setting score-settings' href="./#/settings"></a>
                </header>
                   <div class = "score-contente-container">
                   <ul class="score-quastion">${arrForScore[indexOfRaund].map(q=>`
                   <li data-num=${q.imageNum}  
                   class=${(q.isCorrect === 'false') ?`score-quastion-card` :`not-filtter` } style="background-image: url(./assets/images/${q.imageNum}.jpg)"><span class="score-title-round">Raund ${indexOfRaund+1}</span></li>`).join('')}

                   </ul>
                   </div> 
                  
                 
            </section>
        `}
        
        if(arr.isSelected==="arrPicture"){
        view = `
            <section class="section scorePage">
               
                <header>
                <div class="header-score-container"> <h1 class="logo-mini"></h1>
                <span class="score-subtitle">Score</span>
                <a  class="category-link" href = "/#/">Home</a> </div>               
               
                <a class='btn-setting score-settings' href="/#/settings"></a>
                </header>
                   <div class = "score-contente-container">
                   <ul class="score-quastion">${arrForScorePicture[indexOfRaund].map(q=>`
                   <li  data-num=${q.imageNum}  class=${(q.isCorrect === 'false') ?`score-quastion-card` :`not-filtter` }
                   style="background-image: url(./assets/images/${q.imageNum}.jpg)">
                   <span class="score-title-round">Raund ${indexOfRaund+1}</span></li>`).join('')}

                   </ul>
                   </div> 
                  
                 
            </section>
        `}
        return view
    
}

let ScorePage = {
    render: renderPage,
    after_render: async () => {
       
    },
   
       
}

export default ScorePage;