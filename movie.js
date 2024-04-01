// function card(movieImg, movieTitle, movieDesc, movieLink) {



//     let div = document.createElement("div")
//     let img = document.createElement("img")
//     let h1 = document.createElement("h1")
//     let h3 = document.createElement("h5")
//     let a = document.createElement("a")
//     a.setAttribute("href" , "https://sites.google.com/view/noddytiwari/product")
//     img.setAttribute("src", movieImg)
//     img.classList = "movie-img";

//     div.classList = "movie-card"
//     h1.innerHTML = movieTitle;
//     h3.innerHTML = movieDesc;
//     a.innerHTML = movieLink;

//     document.body.appendChild(div)
//     div.appendChild(img)
//     div.appendChild(h1)
//     div.appendChild(h3)
//     div.appendChild(a)

// }

// let movieData=[
//     {
//         movieImg:"https://myimg.click/images/2023/12/08/oie_861355jnvyKJ0C.jpg",
//         movieTitle:"The Marvels 2023",
//         movieDesc:"This is one of the best movies based on Action, Adventure 4K, 1080p & 720p.",
//         movieLink:"DOWNLOAD NOW"        
//     },
//     {
//         movieImg:"https://myimg.click/images/2023/11/30/Squid-Game-The-Challenge-2023.jpg",
//         movieTitle:"Squid Game ",
//         movieDesc:"Squid Game The Challenge 2023 WEB-DL Hindi Dual Audio ORG S01 4K, 1080p & 720p",
//         movieLink:"DOWNLOAD NOW"        
//     },
//     {
//         movieImg:"https://myimg.click/images/2020/01/10/Marjaavaan-2019.jpg",
//         movieTitle:"Marjaavaan 2019",
//         movieDesc:"Marjaavaan 2019 WEB-DL Hindi Full Movie Download 4K, 1080p & 720p.",
//         movieLink:"DOWNLOAD NOW"        
//     },
//     {
//         movieImg:"https://myimg.click/images/2023/12/08/oie_861355jnvyKJ0C.jpg",
//         movieTitle:"The Marvels 2023",
//         movieDesc:"This is one of the best movies based on Action, Adventure 4K, 1080p & 720p.",
//         movieLink:"DOWNLOAD NOW"        
//     },
//     {
//         movieImg:"https://myimg.click/images/2023/11/30/Squid-Game-The-Challenge-2023.jpg",
//         movieTitle:"Squid Game ",
//         movieDesc:"Squid Game The Challenge 2023 WEB-DL Hindi Dual Audio ORG S01 4K, 1080p & 720p",
//         movieLink:"DOWNLOAD NOW"        
//     },
//     {
//         movieImg:"https://myimg.click/images/2020/01/10/Marjaavaan-2019.jpg",
//         movieTitle:"Marjaavaan 2019",
//         movieDesc:"Marjaavaan 2019 WEB-DL Hindi Full Movie Download 4K, 1080p & 720p.",
//         movieLink:"DOWNLOAD NOW"        
//     },
// ]

// console.log(card);

// movieData.map((Element)=>{
//     return card(Element.movieImg,Element.movieTitle,Element.movieDesc,Element.movieLink)
// })
// function addnewmovie ()
// {
//     img =prompt("img link")
//     title =prompt(" title name")
//     price =prompt("price")
//     description = prompt("description")
//     card(movieImg, movieTitle, movieDesc, movieLink)
// }


// --------------------------------------------------------------

let movieData = [
    {
        movieImg: "https://myimg.click/images/2023/12/08/oie_861355jnvyKJ0C.jpg",
        movieTitle: "The Marvels 2023",
        movieDesc: "This is one of the best movies based on Action, Adventure 4K, 1080p & 720p.",
        movieLink: "DOWNLOAD NOW"
    },
    {
        movieImg: "https://myimg.click/images/2023/11/30/Squid-Game-The-Challenge-2023.jpg",
        movieTitle: "Squid Game ",
        movieDesc: "Squid Game The Challenge 2023 WEB-DL Hindi Dual Audio ORG S01 4K, 1080p & 720p",
        movieLink: "DOWNLOAD NOW"
    },
    {
        movieImg: "https://myimg.click/images/2020/01/10/Marjaavaan-2019.jpg",
        movieTitle: "Marjaavaan 2019",
        movieDesc: "Marjaavaan 2019 WEB-DL Hindi Full Movie Download 4K, 1080p & 720p.",
        movieLink: "DOWNLOAD NOW"
    },
    {
        movieImg: "https://myimg.click/images/2023/12/08/oie_861355jnvyKJ0C.jpg",
        movieTitle: "The Marvels 2023",
        movieDesc: "This is one of the best movies based on Action, Adventure 4K, 1080p & 720p.",
        movieLink: "DOWNLOAD NOW"
    },
    {
        movieImg: "https://myimg.click/images/2023/11/30/Squid-Game-The-Challenge-2023.jpg",
        movieTitle: "Squid Game ",
        movieDesc: "Squid Game The Challenge 2023 WEB-DL Hindi Dual Audio ORG S01 4K, 1080p & 720p",
        movieLink: "DOWNLOAD NOW"
    },
    {
        movieImg: "https://myimg.click/images/2020/01/10/Marjaavaan-2019.jpg",
        movieTitle: "Marjaavaan 2019",
        movieDesc: "Marjaavaan 2019 WEB-DL Hindi Full Movie Download 4K, 1080p & 720p.",
        movieLink: "DOWNLOAD NOW"
    },
    {
        movieImg: "https://imgs.search.brave.com/UbfleO4FNNiJWPEMLmpF88gkhGzu58cR6c6E7hF8C5M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuY2RuLXNob3Au/Y29tL2NhbnZhc2Rp/c2NvdW50Mi1jb20v/YXNzZXRzL2ltZy9w/cm9kdWN0cy9wcmV2/aWV3cy9wb3N0ZXIv/dmlldy0wMS1jb21w/bGV0ZS02NmVmZTk1/NjY3LmpwZw",
        movieTitle: "Marjaavaan 2019",
        movieDesc: "Marjaavaan 2019 WEB-DL Hindi Full Movie Download 4K, 1080p & 720p.",
        movieLink: "DOWNLOAD NOW"
    },
    // {
    //     movieImg: "https://myimg.click/images/2023/11/30/Squid-Game-The-Challenge-2023.jpg",

    //     movieTitle: "Marjaavaan 2019",
    //     movieDesc: "Marjaavaan 2019 WEB-DL Hindi Full Movie Download 4K, 1080p & 720p.",
    //     movieLink: "DOWNLOAD NOW"
    // },
]

movieData.map((Element) => {
    return card(Element.movieImg, Element.movieTitle, Element.movieDesc, Element.movieLink)
})

function card
    (movieImg, movieTitle, movieDesc, movieLink) {
    let div = document.createElement("div");
    let img = document.createElement("img");;
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let a = document.createElement("a");

    document.body.appendChild(div)
    div.appendChild(img)
    div.appendChild(h1)
    div.appendChild(h2)
    div.appendChild(p)
    div.appendChild(a)

    //  div.classList = "movie-card"
    //  img.classList = "movie-img";
    img.setAttribute("class", "movie-img")
    div.setAttribute("class", "movie-card")

    img.setAttribute("src", movieImg)

    // h1.innerHTML = "movie name"
    h2.innerHTML = movieTitle;
    p.innerHTML = movieDesc;
    a.innerHTML = movieLink;
}


// console.log(card);
function addnewmovie() {
    let img1 = prompt("img link")
    let title1 = prompt(" title name")
    let description1 = prompt("description")
    let link1 = "DOWNLOAD NOW";

    //  card(img1, title1, description1, link1);

    if (img1 === "" && title1 === "" && description1 === "" && link1 === "") {
        alert("fill is reqired")


    }
    
 else  {
        card(img1, title1, description1, link1);
    }

}



