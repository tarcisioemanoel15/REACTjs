async function busca() {
    const section = document.querySelector('section');

    // const btn = document.querySelector('.btn');

    const posts = fetch('./foto.json');
    const fotos = fetch('./foto1.json');

    const [postsAll, fotosAll] = await Promise.all([posts, fotos]);
    const postsJson = await postsAll.json();
    const fotosJson = await fotosAll.json();

    const novoel = postsJson.map((post, index) => {
        return { ...post, cover: fotosJson[index].url }
    });

    // return novoel;

    // btn.addEventListener('click', e => {
    //     const page = 0;
    //     const postsPrepage = 2;
    //     const allposts = postsAll;
    //     const postss = posts;

    //     const nextPage = page + postsPrepage;
    //     // console.log(page, postsPrepage, nextPage, nextPage + postsPrepage)
    //     const nextPosts = allposts.slice(nextPage, nextPage + postsPrepage);
    //     postss.push(...nextPosts)
    //     return { posts, page: nextPage }
    // })

    novoel.map(element => {
        section.innerHTML += `
        <div class="items">
        <p>ID: ${element.id}</p>
        <img src="${element.cover}" alt="tess">
        <h1>${element.title}</h1>
        </div>
        `
    })
}
busca();
        // <img src="${element.url}" alt="tess">