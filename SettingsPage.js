// import './styles/style.css'

let SettingsPage = {
    
    render : async () => {
        let view =  /*html*/`
            <section class="section settingsPage">
                
                    <header>
                        <span class = "setting-arrow"></span>
                        <span class="settings-title">Settings</span>
                        <a class="btn-settin-close" href="./#/"></a>
                    </header>

                    <div class="setting-container">
                        <div class="range-box">
                            <p>Volume</p>
                            <input type = "range" class="settings-range">
                        </div>    
                        <div>
                            <span class="mute-close"></span>
                            <span class="mute-on"></span>
                        </div>
                        <div class="settigs-time-box">
                            <p>Time game</p>
                            <span class='setting-on-of'>On/Off</span>
                            <input type="checkbox" class="input-on-off">
                        </div>
                
                        
                        <div class="settigs-timer-box">
                            <p>Time to answer</p>
                            <div class="timer-btn-box"> 
                                <span class="btn-decrease-time">-</span>
                                <input type="number" readonly class="input-add-time" value="5" min="5" max="30" step="5" >
                                <span class="btn-add-time">+</span>
                            </div>
                            
                        </div>
                    </div>
                    <div class="setting-container-btns">
                        <button class = "btn-setting-defualt">Default</button>
                        <button class = "btn-setting-save">Save</button>
                    </div>
                     
            </section>
        `
        return view
    },
    after_render: async () => {
       
    },
   
       
}

export default SettingsPage;