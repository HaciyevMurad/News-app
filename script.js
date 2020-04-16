
const btn = document.querySelector('button');
const container = document.querySelector('.container')

function getPosts(cb) {
    const request = new XMLHttpRequest();

    request.open("GET", 'https://jsonplaceholder.typicode.com/posts');


    request.addEventListener('load', () => {

        const response = JSON.parse(request.responseText)
        cb(response);

    });

    request.addEventListener('error', () => {
        console.log('error');
    });


    request.send();
}
btn.addEventListener('click', () => {
    getPosts((response) => {
        const fragment = document.createDocumentFragment();
        response.forEach(element => {
            const card = document.createElement('div');
            card.classList.add('card');
            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            const cardTitile = document.createElement('h5');
            cardTitile.classList.add("card-title");
            cardTitile.textContent = element.title;
            const cardText = document.createElement('p');
            cardText.classList.add("card-text");
            cardText.textContent = element.body;

            cardBody.append(cardTitile);
            cardBody.append(cardText);
            card.append(cardBody);
            fragment.append(card)
        });
        container.append(fragment)

    });
});


