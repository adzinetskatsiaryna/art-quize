let Bottombar = {
    render: async () => {
        let view =  /*html*/`
        <footer class="footer">
            <div class="container">
              <a href='https://github.com/adzinetskatsiaryna' target="_blank">Adzinets Katsiaryna</a> 
              <a href =  href="https://rs.school/js/"  target="_blank">Rs School</a> 
              <span>2021</span>
            </div>
        </footer>
        `
        return view
    },
    after_render: async () => { }

}

export default Bottombar;