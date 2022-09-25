async function busca(){

    const section = document.querySelector('section');

    const posts = fetch('./foto.json');
    const fotos = fetch('./foto1.json');


    const [postsAll, fotosAll ] = await Promise.all([posts, fotos]);

    const postsJson = await postsAll.json();
    const fotosJson = await fotosAll.json();


    const novoel = postsJson.map( (post, index) => {
        return {...post, cover: fotosJson[index].url}
    });


   
    novoel.map(element => {
        section.innerHTML += `
        <div class="items">
        <p>${element.id}</p>
        <h1>${element.title}</h1>
        <img src="${element.cover}" alt="tess">
        </div>
        `
    })
}
busca()
        // <img src="${element.url}" alt="tess">