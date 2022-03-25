"use strict";

import StartPage    from './StartPage.js'
import CategoryPage        from './CategoryPage.js'
import Error404     from './Error404.js'
import QuastionPagePicture from './QuastionPagePicture.js'
import SettingsPage from './SettingsPage.js'
import QuastionPageArt from './QuastionPageArt.js'
import Bottombar    from './Bottombar.js' 
import Utils        from './Utils.js'
import ScorePage from './ScorePage.js';

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/'             : StartPage,
    '/category'    : CategoryPage,
    '/quastionpicture/:id': QuastionPagePicture,
    '/quastionart/:id': QuastionPageArt,
    '/settings'    : SettingsPage,
    '/score' : ScorePage
};


// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

    // Lazy load view element:
    const content = null || document.getElementById('page-container');
    const footer = null || document.getElementById('footer-container');
    
    // Render the Header and footer of the page
   
    // await Navbar.after_render();
    footer.innerHTML = await Bottombar.render();
    await Bottombar.after_render();

    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
  
    
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404
    content.innerHTML = await page.render();
    await page.after_render();
  
}

window.addEventListener('hashchange', router);

window.addEventListener('load', router);
