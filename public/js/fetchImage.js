function buildCardsUsingStrings(data) {
    return `<div class="card">
                <img src="${data.thumbnailUrl}" alt="Fake photo for id: ${data.id}" />
            </div>`;
}

function fetchPhotos(){
    // where we will get photos from
    var url = "http://localhost:3000/images";
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