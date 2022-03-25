
// import './styles/style.css'
import {arr} from './CategoryPage.js'

let StartPage = {
    
    render : async () => {
        let view =  /*html*/`
            <section class="section startPage">
                <div class='container container-startPage'>
                    <a class='btn-setting' href="./#/settings"></a>
                    <h1 class='logo'></h1>
                    <div class="btn-container">
                        <a class = 'btn art-btn' href = "./#/category">Artist quiz</a>
                        <a class = 'btn picture-btn' href = "./#/category">Pictures quiz</a>
                    </div>
                </div>     
            </section>
        `
        return view
    },
    after_render: async () => {
        const btnArt = document.querySelector('.art-btn')
        btnArt.addEventListener('click', ()=>{
            arr.isSelected = 'arrArt'
        })
        const pictureBtn = document.querySelector('.picture-btn')
        pictureBtn.addEventListener('click', ()=>{
           arr.isSelected = 'arrPicture'
        })
    },
   
       
}

export default StartPage;