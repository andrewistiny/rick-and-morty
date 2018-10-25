//                                                                                       
//      /----\   /----\  /----------\  /----------\  /----\  /---/      /----------\  /-----\     /-----\                                                            
//      |    |   |    |  |    /-----/  |          |  |    | /   /       |    /-----/  |      \   /      |                                        
//      |    |   |    |  |    |        |    /-----/  |    |/   /        |    |        |       \-/       |                                       
//      |    \---/    |  |    \-----\  |    |        |    /   /         |    \-----\  |     \     /|    |                                         
//      |             |  |          |  |    |        |        |         |          |  |     |\---/ |    |                                  
//      |    /---\    |  |    /-----/  |    |        |    \   \         |    /-----/  |     |      |    |                                          
//      |    |   |    |  |    |        |    \-----\  |    |\   \        |    |        |     |      |    |                                         
//      |    |   |    |  |    \-----\  |          |  |    | \   \       |    \-----\  |     |      |    |                                       
//      \----/   \----/  \----------/  \----------/  \----/  \---\      \----------/  \-----/      \----/                                                            
//                                                                                       
//                                                                                       
const resultDiv = document.querySelector('#result');
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');
let pageNumber = 1;

previous.addEventListener('click', function(){
    if (pageNumber > 1) {
        pageNumber--;
        axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
        .then(function(response){
            console.log('*****ALL_DATA******', response.data.results);
            resultDiv.innerHTML = response.data.results.map(function(val) {
                return `
                <br>
                <div id = "characterBox">
                    <div class="name">${val.name}</div>
                    <img class="image"src='${val.image}' width="100px" height="auto">
                    <div class="species">${val.species}</div>
                    <div class="origin-name">${val.origin.name}</div>
                    <div class="status">${val.status}</div>
                </div>
                <br>
                `
            }).join(' ');
    
        })
        .catch(function(err){
            console.log('err', err);
        })
    }


});
next.addEventListener('click', function(){
    pageNumber++;
    axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
    .then(function(response){
        console.log('*****ALL_DATA******', response.data.results);
        resultDiv.innerHTML = response.data.results.map(function(val) {
            return `
            <br>
            <div id = "characterBox">
                <div class="name">${val.name}</div>
                <img class="image"src='${val.image}' width="100px" height="auto">
                <div class="species">${val.species}</div>
                <div class="origin-name">${val.origin.name}</div>
                <div class="status">${val.status}</div>
            </div>
            <br>
            `
        }).join(' ');

    })
    .catch(function(err){
        console.log('err', err);
    })

});
console.log('pageNumber', pageNumber);






axios.get('https://rickandmortyapi.com/api/character/?page=1')
    .then(function(response){
        console.log('*****ALL_DATA******', response.data.results);
        resultDiv.innerHTML = response.data.results.map(function(val) {
            return `
            <br>
            <div id = "characterBox">
                <div class="name">${val.name}</div>
                <img class="image"src='${val.image}' width="100px" height="auto">
                <div class="species">${val.species}</div>
                <div class="origin-name">${val.origin.name}</div>
                <div class="status">${val.status}</div>
            </div>
            <br>
            `
        }).join(' ');

    })
    .catch(function(err){
        console.log('err', err);
    })

    

      