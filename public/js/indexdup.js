(function main(){
    const root = document.getElementById('data-container');

    const imageUrl = "https://jsonplaceholder.typicode.com/albums/2/photos";

    const getImages = async () => {
        const data = await fetch('http://localhost:3000/images').then(res => res.json());
        return data;
    }
    const constructHtml = async () => {
        const data = await getImages();
        console.log(data.data)
        const currentData = data.data
        console.log(currentData[0].link)
        const rootTemplate = currentData.forEach((item) => {
            const cardContainer = document.createElement('div');
            const imgContainer = document.createElement('div');
            const titleHtml = document.createElement('p');
            const imgItem = document.createElement('img');
            const titleNode = document.createTextNode(item.title);
            cardContainer.setAttribute('class', 'card');
            imgContainer.setAttribute('class', 'card-img');
            titleHtml.setAttribute('class', 'card-title');
            titleHtml.appendChild(titleNode);
            imgItem.setAttribute('src', `/public/images/${item.link.slice(12)}`);
            imgItem.setAttribute('alt', `sample image`);
            imgItem.setAttribute('style', "height:250px; width:250px");
            imgContainer.appendChild(imgItem);
            cardContainer.appendChild(imgContainer);
            cardContainer.appendChild(titleHtml);
            root.appendChild(cardContainer);
            // return (`
            // <div class="card">
            //     <div class="card-img">
            //     <img src="${url}"/>
            //     </div>
            //     <p class="card-title">${title}</p>
            // <div>
            // `)
        });                          


        // console.log(rootTemplate);
       // root.innerHTML = rootTemplate;

    }

    constructHtml();    

})();