// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const SUBMIT_BUTTON_HTML = document.getElementById("submit-button");
const CONTACT_PAGE_HTML = document.getElementById("contact-page");


// When run, this removes all children from the "contact-page" id section.
function submit(){
    while (CONTACT_PAGE_HTML.firstChild){
        CONTACT_PAGE_HTML.removeChild(CONTACT_PAGE_HTML.firstChild);
    }

    // Creates an element "p" and changes its fontsize to 24px. Changes its innerhtml too, and adds to the "contact-page" main
    var p = document.createElement("p");
    p.style.fontSize = "24px";
    p.innerHTML = "Thank you for your message!";
    CONTACT_PAGE_HTML.appendChild(p);
    
}

SUBMIT_BUTTON_HTML.addEventListener("click", submit); // when the "good dog!" button is clicked, call the function