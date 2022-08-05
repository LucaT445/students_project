/**
 * Uses JavaScript template strings  to make HTML elements to store
 * images
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 * @param {*} data about each indivual photo
 * @returns template string representing image div tag.
 */
function buildCardsUsingStrings(data) {
    return `<div class="card">
                <img src="${data.thumbnailUrl}" alt="Fake photo for id: ${data.id}" />
            </div>`;
    
}

function fetchPhotos(){
    // where we will get photos from
    var url = "https://jsonplaceholder.typicode.com/albums/2/photos";
    //calling fetch with the URL, this will initiate a GET request on the URL
    fetch(url)
    // initial hanlder for repsonse
    .then((response) =>{
         // converting response to json, this is a promise and MUST be returned
        return response.json();
    }).then( (photos) => {
        let imgStorageHTML = '';
        // getting div tag by ID
        let imgStorageElement = document.getElementById('img-storage');
        // loop over all photos in response
        photos.forEach(photo => {
            // call build function
            imgStorageHTML += buildCardsUsingStrings(photo);
        });
        imgStorageElement.innerHTML = imgStorageHTML;
        
    })
    .catch((error) =>{
        console.log(error);
    });
}

// calling fetch photos when page is loaded.
fetchPhotos();