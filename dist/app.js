"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*async function fetchCharacters() {
    const response = await fetch("http://localhost:8081/product");
    const data = await response.json() as Product;;
    console.log(data);
    displayCharacters(data);
}*/
const fetchURL = 'http://localhost:8081/product';
function fetchPosts(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield fetch(url);
            if (!response.ok) {
                throw new Error('Error en la respuesta');
            }
            return yield response.json();
        }
        catch (error) {
            console.log('Petición incorrecta');
        }
    });
}
function showPost() {
    return __awaiter(this, void 0, void 0, function* () {
        let posts = yield fetchPosts(fetchURL);
        console.log(posts);
        displayCharacters(posts);
    });
}
function displayCharacters(characters) {
    if (characters == undefined)
        return;
    console.log(characters.id);
    const container = document.getElementById('characterController');
    if (container) {
        for (let elements of characters) {
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
console.log('characterController');
showPost();
