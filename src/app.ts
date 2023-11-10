/*async function fetchCharacters() {
    const response = await fetch("http://localhost:8081/product");
    const data = await response.json() as Product;;
    console.log(data);
    displayCharacters(data);
}*/
const fetchURL = 'http://localhost:8081/product';

interface Product {
    id: number;
    description: string;
    category: string;
}

interface Product extends Array<Product>{
}

async function fetchPosts(url: string){
    try{
        let response = await fetch(url);
        if(!response.ok){
            throw new Error('Error en la respuesta')
        }
        return (await response.json() as Product)
    }catch(error){
        console.log('Petición incorrecta')
    }
}

async function showPost() {
    let posts:Product | undefined = await fetchPosts(fetchURL);
    displayCharacters(posts);
}

function displayCharacters(characters: Product|undefined):void {
   if(characters == undefined) return
   console.log(characters.id);
   const container = document.getElementById('characterController');
   if(container){
    for(let elements of characters){
        container.innerHTML += `
        <div class= "character-card">
        <h2> ID: "${elements.id}"</h2>
        <h3> Description: "${elements.description}"</h3>
        <p> Category: "${elements.category}"</p>
        </div>
        `;
    }
   }
}

showPost();