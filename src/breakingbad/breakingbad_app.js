
/**
 * 
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async () => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();
    // console.log(data[0]);
    return data[0];
}


/**
* 
* @param {HTMLDivElement} element
*/
//! EMPIEZA POR MAYUSCULA PORQUE ES LA PARTE PRINCIPAL DE LA APLICACIÓN
export const BreakingBad = async (element) => {
    element.innerHTML = 'Loading..';
    
    // const quote = await fetchQuote();
    const quoteLabel = document.createElement('p');
    const authorLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerHTML = 'Next quote'


    // crear 3 elementos, data que recibimos de peticion http
    const renderQuote = ( data ) => {
        quoteLabel.innerHTML = data.quote;
        authorLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authorLabel, nextQuoteButton);
    }  

    // renderizar elementos function
    // const data = await fetchQuote();
    // renderQuote(data);

    fetchQuote()
        .then( data => renderQuote(data) );


    // boton funcionable
    nextQuoteButton.addEventListener('click', async () => {
        // quoteLabel.innerHTML = '';
        // authorLabel.innerHTML = '';
        element.innerHTML = 'Loading..';
        const data = await fetchQuote();
        renderQuote(data);
    });


    // if (quote) {
    //     element.innerHTML = 'Ya hay data!!';
    // }
}


