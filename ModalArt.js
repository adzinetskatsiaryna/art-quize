

let ModalArt = {
    render: async () => {
        let view 
        view =  /*html*/`
           
                <div class = "modal-picture">
                сюда приходит адрес картины и ответ (true or false)
                    <span>true</span>
                    <span>false</span>
                    <a href ="">Next</a>
                </div>
                

             
        `
        return view
    },
    after_render: async () => {
        
     }

}

export default ModalArt;