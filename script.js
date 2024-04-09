const main = document.querySelector("main");
const aside = document.querySelector("aside");
let api;
var darkModeOn = false;


const darkMode = () =>{
    if(!darkModeOn){
        aside.style.backgroundColor = '#000';
        for(let i = 0; i < document.querySelectorAll(".aside__container-div").length; i++){
            document.querySelectorAll(".aside__container-div")[i].style.color = 'white';
            document.querySelectorAll(".aside__container-div")[i].classList.replace("aside__container-div-light","aside__container-div-dark")
        }
        document.querySelector(".aside__container").style.backgroundColor = '#000';
        document.querySelector("aside input").style.backgroundColor = '#000';
        document.querySelector("aside input").style.color = '#fff';
        document.querySelector(".logo").removeChild(document.querySelector(".logo img"));
        let img = document.createElement("IMG");
        document.querySelector(".logo").appendChild(img);
        fetch("logodark.png").then(res => res.blob()).then(res => img.src = URL.createObjectURL(res));
        main.style.backgroundColor = '#000';
        document.querySelector(".ig").style.color = '#ddd';
        document.querySelector(".moon").style.color = '#fff';
        document.querySelector(".paintroller").style.color = '#fff';
        try{
            let numberOfClonedDivs;
            numberOfClonedDivs = document.querySelectorAll(".aside__container-div--cloned").length;
            for(let i = 0; i < numberOfClonedDivs; i++){
                document.querySelectorAll(".aside__container-div--cloned")[i].style.backgroundColor = '#000';
                document.querySelectorAll(".aside__container-div--cloned")[i].style.color = '#fff';
            }
        }catch(e){};

        for(let i = 0; i < document.querySelectorAll(".catcontainer").length; i++){
            document.querySelectorAll(".catcontainer")[i].style.backgroundColor = '#000';
            document.querySelectorAll(".catcontainer")[i].style.color = '#fff';
            document.querySelectorAll(".catcontainer")[i].style.outlineColor = '#ddd';
            document.querySelectorAll(".catcontainer__divImg")[i].style.borderBottom = 'solid 1px #ddd';
            try{
                document.querySelectorAll(".pre")[i].style.backgroundColor = '#222';
            }catch(e){}
        }

        let scrollBarRule = document.createElement("STYLE");
        try{
            document.head.removeChild(".scrollbarstyle");
        }catch(e){}
        scrollBarRule.classList.add("scrollbarstyle");
        scrollBarRule.innerHTML = `
            .aside__container::-webkit-scrollbar{
                background-color: #030303;
            }
            .aside__container::-webkit-scrollbar-thumb{
                background-color: #fff;
                border: solid #030303 3px;
                border-radius: 100px;
            }
            .aside__container::-webkit-scrollbar-thumb:hover{
                border: solid #030303 3px;
                border-radius: 100px;
                background-color: #ddd;
            }
        `;
        setTimeout(() => {
            document.head.appendChild(scrollBarRule);
        }, 40);


        darkModeOn = true;
    }else{
        aside.style.backgroundColor = '#fff';
        for(let i = 0; i < document.querySelectorAll(".aside__container-div").length; i++){
            document.querySelectorAll(".aside__container-div")[i].style.color = '#000';
            document.querySelectorAll(".aside__container-div")[i].classList.replace("aside__container-div-dark","aside__container-div-light");
        }
        document.querySelector(".aside__container").style.backgroundColor = '#fff';
        document.querySelector("aside input").style.backgroundColor = '#fff';
        document.querySelector("aside input").style.color = '#000';
        document.querySelector(".logo").removeChild(document.querySelector(".logo img"));
        let img = document.createElement("IMG");
        document.querySelector(".logo").appendChild(img);
        fetch("logo.png").then(res => res.blob()).then(res => img.src = URL.createObjectURL(res));
        main.style.backgroundColor = '#fff';
        document.querySelector(".ig").style.color = '#222';
        document.querySelector(".moon").style.color = '#000';
        document.querySelector(".paintroller").style.color = '#000';

        

        try{
            let numberOfClonedDivs;
            numberOfClonedDivs = document.querySelectorAll(".aside__container-div--cloned").length;
            for(let i = 0; i < numberOfClonedDivs; i++){
                document.querySelectorAll(".aside__container-div--cloned")[i].style.backgroundColor = '#fff';
                document.querySelectorAll(".aside__container-div--cloned")[i].style.color = '#000';
            }
        }catch(e){};

        for(let i = 0; i < document.querySelectorAll(".catcontainer").length; i++){
            document.querySelectorAll(".catcontainer")[i].style.backgroundColor = '#fff';
            document.querySelectorAll(".catcontainer")[i].style.color = '#000';
            document.querySelectorAll(".catcontainer")[i].style.outlineColor = '#222';
            document.querySelectorAll(".catcontainer__divImg")[i].style.borderBottom = 'solid 1px #222';
            try{
                document.querySelectorAll(".pre")[i].style.backgroundColor = '#ddd';
            }catch(e){}
        }

        let scrollBarRule = document.createElement("STYLE");
        try{
            document.head.removeChild(".scrollbarstyle");
        }catch(e){}
        scrollBarRule.classList.add("scrollbarstyle");
        scrollBarRule.innerHTML = `
            .aside__container::-webkit-scrollbar{
                transition: background .2s;
                background-color: #fcfcfc;
            }
            .aside__container::-webkit-scrollbar-thumb{
                border: solid #fcfcfc 3px;
                border-radius: 100px;
                transition: background .2s;
                background-color: #8b8b8b;
            }
            .aside__container::-webkit-scrollbar-thumb:hover{
                border: solid #fcfcfc 3px;
                border-radius: 100px;
                background-color: #767676;
            }
        `;
        setTimeout(() => {
            document.head.appendChild(scrollBarRule);
        }, 40);

        darkModeOn = false;
    }
}

const clean = () => {
    const catcontainerDivs = document.querySelectorAll(".catcontainer").length;
    for(let i = 0; i < catcontainerDivs; i++){
        // console.log(document.querySelectorAll(".catcontainer").length)
        document.querySelectorAll(".catcontainer")[i].classList.add("catcontainerremove");
        setTimeout(() => {
            main.removeChild(document.querySelectorAll(".catcontainer")[0]);
        }, 200);
    }
}
document.querySelector(".paintroller").addEventListener("click",clean)
addEventListener("load",async()=>{

    await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&limit=100",{
        method: 'GET',
        headers: {'x-api-key': 'live_LpcOOa2VUTBXwXsRz3h1r3iyjibZtUVDGvyna8TkQy814hIixStPaRWwYvxf6r39'}
    }).then(res => res.json()).then(res => {
        api = res;
        document.querySelector(".aside__loading").style.display = 'none'; //HIDES LOADING DIV
        document.querySelector(".moon").addEventListener("click",darkMode);
        let catnames = [];
        const emojis = ['🐈','😹','😺','😻','😼','🙀','😿','😽'];
        for(let i = 0; i < 100; i++){
            try{
                catnames[i] = res[i].breeds[0].name;
            }catch(e){}
        }

        var unique = catnames.filter(function(elem, index, self) {
            return index === self.indexOf(elem);
        });

        for(let i = 0; i < unique.length; i++){
            let div = document.createElement("DIV");
            div.classList.add("aside__container-div");
            div.classList.add("aside__container-div-light");
            let p = [];
            p[0] = document.createElement("P");
            p[0].textContent = emojis[Math.floor(Math.random() * 8)];
            p[1] = document.createElement("P");
            try{
                p[1].textContent = unique[i];
            }catch(e){}

            div.appendChild(p[0]);
            div.appendChild(p[1]);
            div.addEventListener("mousedown",e => createDivOnClick(e,i));
            document.querySelector(".aside__container").appendChild(div);
        }

        const searchBox = document.querySelector(".aside__searchbox input");
        let searchedCats;
        const search = () => {
            if(searchBox.value != ''){
                searchedCats = unique.filter(catname => { //CREATES AN ARRAY WITH JUST THE DESIRED CATS
                for(let i = 0; i < searchBox.value.length; i++){
                    if(!catname.includes(searchBox.value[i].toLowerCase()) && !catname.includes(searchBox.value[i].toUpperCase())) break;
                    else {
                        if(i == searchBox.value.length - 1) return catname;
                    }
                }

                for(let i = 0; i < document.querySelector(".aside__container").children.length; i++){ //REMOVES ALL DIVS FROM ASIDE CONTENT
                    document.querySelector(".aside__container").innerHTML = '';
                }
                })
            }else{
                searchedCats = unique;
                for(let i = 0; i < document.querySelector(".aside__container").children.length; i++){ //REMOVES ALL DIVS FROM ASIDE CONTENT
                    document.querySelector(".aside__container").innerHTML = '';
                }
            }

            for(let i = 0; i < searchedCats.length; i++){ //ADDS DESIRED CATS
                let div = document.createElement("DIV");
                div.classList.add("aside__container-div");
                if(darkModeOn) div.classList.add("aside__container-div-dark");
                else div.classList.add("aside__container-div-light");
                let p = [];
                p[0] = document.createElement("P");
                p[0].textContent = emojis[Math.floor(Math.random() * 8)];
                p[1] = document.createElement("P");
                try{
                    p[1].textContent = searchedCats[i];
                }catch(e){}
                if(darkModeOn) div.style.color = '#fff';
            
                div.appendChild(p[0]);
                div.appendChild(p[1]);
                div.addEventListener("mousedown",e => createDivOnClick(e,i));
                document.querySelector(".aside__container").appendChild(div);
            }
        }
        document.querySelector(".aside__searchbox input").addEventListener("input",search);
    });
    

})



let circleDOM = [];
for(let i = 0; i < 120; i++){ // CREATE BG DOTS
    let circle = document.createElement("DIV");
    circleDOM[i] = circle;
    let rand = Math.floor(Math.random() * (5 - 3) + 3);
    let randClass = Math.floor(Math.random() * 5)
    let colors = ['#555','#777','#aaa','#ccc']
    switch(randClass){
        case 0: circle.classList.add("circlebg"); break;
        case 1: circle.classList.add("circlebg2"); break;
        case 2: circle.classList.add("circlebg3"); break;
        case 3: circle.classList.add("circlebg4"); break;
        case 4: circle.classList.add("circlebg5"); break;
    }

    circle.style.width = `${rand}px`;
    circle.style.height = `${rand}px`;
    circle.style.backgroundColor = `${colors[Math.floor(Math.random() * 5)]}`;
    circle.style.position = 'absolute';
    circle.style.top = `${Math.random() * main.offsetHeight}px`;
    circle.style.left = `${Math.random() * main.offsetWidth}px`;
    circle.style.borderRadius = '50%';
    main.appendChild(circle);

}





const createDivOnClick = (e,nChild) => {
    let target;
    if(e.target.nodeName == 'P') target = e.target.parentElement;
    else target = e.target;
    let node = document.querySelectorAll(".aside__container-div")[nChild].cloneNode(true);
    let fatherNode = document.createElement("DIV");
    fatherNode.appendChild(node);
    fatherNode.classList.add("aside__container-div--clonedheader");
    let div = document.createElement("DIV");
    div.classList.add("pre");
    fatherNode.appendChild(div);
    if(window.innerWidth > 800) {
        fatherNode.style.top = `${target.offsetTop - document.querySelector(".aside__container").scrollTop}px`;
        fatherNode.style.left = `${target.offsetLeft + main.offsetWidth}px`;
    }else{
        fatherNode.style.top = `${target.offsetTop + main.offsetHeight}px`;
        fatherNode.style.left = `${target.offsetLeft - document.querySelector(".aside__container").scrollLeft}px`;
    }

    if(darkModeOn){
        node.style.backgroundColor = '#000';
        node.style.color = '#fff';
        div.style.backgroundColor = '#222';
    }else{
        node.style.backgroundColor = '#fff'
    }

    node.style.zIndex = 500;
    node.classList.replace("aside__container-div","aside__container-div--cloned");
    node.classList.add = "mydiv";

    let justCreated = true;
    dragElement(fatherNode,justCreated,target);
    main.appendChild(fatherNode);
}


const createCatContainer = (catName,left,top,elmntwidth,elmnt) => {
    let statsList = [];
    let cat;
    for(n in api){
        // console.log(`n:${n}\n${api[n].breeds[0].name}\ncatName: ${catName}`)
        if(api[n].breeds[0].name == catName){
            cat = api[n];
            break;
        }
    }
    for(n in cat.breeds[0]){
        if(cat.breeds[0][n] >= 0 && cat.breeds[0][n] < 6 && cat.breeds[0][n] != ' '){
            statsList.push([cat.breeds[0][n],n]);
        }
    }
    if(statsList[0][1] == 'alt_names'){ //JAVANESE BUG
        statsList = statsList.splice(1)
    }
    statsList = statsList.sort();
    statsList.reverse();
    for(n in statsList){
        if(statsList[n][0] == 0){
            statsList = statsList.splice(0,n);
        }
    }
    for(n in statsList){
        let letter = statsList[n][1][0].toUpperCase();
        statsList[n][1] = statsList[n][1].replace("_"," ");
        statsList[n][1] = letter + statsList[n][1].slice(1);
    }
    let fragmentoCatContainer = document.createDocumentFragment();
    let container = document.createElement("DIV");
    container.classList.add("catcontainer");

    let divImg = document.createElement("DIV");
    divImg.classList.add("catcontainer__divImg");
    let img = document.createElement("IMG");
    img.src = cat.url;
    img.classList.add("catcontainer__divImg-img");
    img.classList.add("catcontainerheader");
    divImg.appendChild(img);

    let catcontainerInfo = document.createElement("DIV");
    catcontainerInfo.classList.add("catcontainer__info");
    let h2 = document.createElement("H2");
    h2.textContent = cat.breeds[0].name;
    catcontainerInfo.appendChild(h2);
    let catcontainerInfoStats = document.createElement("DIV");
    catcontainerInfoStats.classList.add("catcontainer__info-stats");
    let fragmentoContenedor = document.createDocumentFragment();
    for(n in statsList){
        let fragmento = document.createDocumentFragment();
        let p = document.createElement("P");
        p.textContent = statsList[n][1];
        fragmento.appendChild(p);
        for(let i = 0; i < statsList[n][0]; i++){
            let point = document.createElement("DIV");
            point.classList.add("point");
            fragmento.appendChild(point);
        }
        let catcontainerInfoStatsDiv = document.createElement("DIV");
        catcontainerInfoStatsDiv.classList.add("catcontainer__info-stats-div");
        catcontainerInfoStatsDiv.appendChild(fragmento);
        fragmentoContenedor.appendChild(catcontainerInfoStatsDiv);
    }
    catcontainerInfoStats.appendChild(fragmentoContenedor);
    catcontainerInfo.appendChild(catcontainerInfoStats);
    fragmentoCatContainer.appendChild(divImg);
    fragmentoCatContainer.appendChild(catcontainerInfo);
    container.appendChild(fragmentoCatContainer);
    container.style.left = `${left - (230 - elmntwidth) / 2}px`;
    container.style.top = `${top}px`;
    container.style.opacity = 0;
    container.style.transform = 'scale(0%)';

    if(darkModeOn){
        container.style.backgroundColor = '#000';
        container.style.color = '#fff';
        container.style.outlineColor = '#ddd';
        divImg.style.border = 'solid 1px #ddd';
    }

    let x = document.createElement("I");
    x.classList.add("fa-solid");
    x.classList.add("fa-xmark");
    x.addEventListener("click", ()=>{
        container.classList.add("catcontainerremove");
        setTimeout(() => {
            main.removeChild(container);
        }, 200);
    })
    container.appendChild(x);
    main.appendChild(container);
    dragElement(container,false);
    img.addEventListener("load",()=>{
        container.style.opacity = 1;
        if(window.innerWidth > 800) container.style.transform = 'scale(100%)';
        else container.style.transform = 'scale(70%)';
        document.querySelector(".aside__container-div--clonedheader").style.transform = 'scale(0%)';
        setTimeout(() => {
            try{
                main.removeChild(elmnt);
            }catch(e){
                main.removeChild(main.lastChild)
            }
        }, 300);
    })
}

function dragElement(elmnt,justCreated,target) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  const elmntPreDiv = elmnt.children[1];
  let elmntClassListLenght = elmnt.classList.length;
  if (document.querySelector(elmnt.classList[elmntClassListLenght - 1] + "header")) {
    // if present, the header is where you move the DIV from:
    document.querySelector(elmnt.classList[elmntClassListLenght - 1] + "header").onmousedown = dragMouseDown;
  } else if (elmnt.children[0].children[0].classList.contains("catcontainerheader")){
    elmnt.children[0].children[0].onmousedown = dragMouseDown;
  }
  else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
    if(justCreated){
        elmnt.addEventListener("mouseenter",dragMouseDown);
        justCreated = false;
    }
  }

  function dragMouseDown(e) {
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    elmnt.removeEventListener("mouseenter",dragMouseDown);

    if(!elmnt.classList.contains("catcontainer")){
        let elmntLeft = elmnt.style.left;
        elmntLeft = elmntLeft.replace("px","");
        if(elmntLeft < main.clientWidth - elmnt.clientWidth){ //IF ELMNT IS ON MAIN
            elmntPreDiv.classList.add("preAnim")
        }else{
            elmntPreDiv.classList.replace("preAnim","preAnimDelete");

            setTimeout(() => {
                elmntPreDiv.classList.remove("preAnimDelete");
            }, 300);
    }
    }
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    
    let elmntLeft = elmnt.style.left;
    elmntLeft = elmntLeft.replace("px","");
    if(elmntLeft < main.clientWidth - elmnt.clientWidth && !elmnt.classList.contains("catcontainer")){ //IF ELMNT IS ON MAIN
        createCatContainer(target.children[1].textContent,elmnt.offsetLeft,elmnt.offsetTop,elmnt.clientWidth,elmnt);
    }
  }
}