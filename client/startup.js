 /**
  * Helper function for DOM manipulation
  * to the document
  * @param type accepts a type of html element (div,header,img etc.)
  * @param attrs is a object for the attributes of the html element
  */
 function newEl(type, attrs = {}) {
    const el = document.createElement(type);
    for (let attr in attrs) {
        const value = attrs[attr];
        if (attr == 'innerText') el.innerText = value;
        else el.setAttribute(attr, value);
    }
    return el;
}

/**
 * The function gets the api titles
 * Calls the hideSpinner() method after success response
 * Uses the newEl() helper to display the fetched titles
 */
async function submit() {
    const res = await fetch('http://localhost:3001/titles')
    const titles = await res.json();

    if (res) {
        hideSpinner();
    }
   
    const ctr = document.querySelector('.list-group');
    for (let i = 0; i < titles.length; i++) {
        const card = newEl('li', { class: 'list-group-item bg-dark' });
        const title = newEl('p', { innerText: titles[i] });
        card.appendChild(title);
        ctr.appendChild(card);
        console.log('this is a line');
    }
}

submit();

/**
 * Displays a CSS spinner while the data is being fetched,
 * after a succsessfull call the function hides the div,
 * that displays the loading screen
 */
function hideSpinner() {
    document.querySelector('.card-header').innerText = 'Reddit home page posts';
    document.querySelector('.loading').style.display = 'none';

}