function loadJSON() {
    var filePath = 'https://raw.githubusercontent.com/Augusto-p/Carwall/main/data/wallpapers.json';
    var json = loadTextFileAjaxSync(filePath, "application/json");

    return JSON.parse(json);
    
}
function loadTextFileAjaxSync(filePath, mimeType) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    if (mimeType != null) {
        if (xmlhttp.overrideMimeType) {
            xmlhttp.overrideMimeType(mimeType);
        }
    }
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        return xmlhttp.responseText;
    }
    else { 
        return null;
    }
}
function randonums(){
    out = [];
    var i = 0;
    while (i != 9){
        var Aleatorio = Math.floor(Math.random() * 6928);
        if ((out.indexOf(Aleatorio)) == -1){
            out.push(Aleatorio);
            i = i +1;
        }
    }
    return out
}

function checboxcontrol(){
    var lala = document.getElementsByClassName('checkbox_Select');
    for (lol in lala){
        lol = lala[lol]
        laid = lol.id.toString();
        if (document.getElementById(laid).clicked){
            console.log("hola ando");
        }
        else{
            console.log("failll")
        }
        
    }
    
    
    
       
 
    

    //if (document.getElementById('IMG1').click){
      // console.log(data[0].Marca);
        //alert('anda')

    //}
    //else{
      //  alert('fail')
        //console.log(data[0].Marca);
    //}
}

function motorOne(){
    numerosA = randonums()
    for(num in numerosA){
        num = numerosA[num]
        // creasion de elementos
        //previw
        const previw = document.createElement("div");
        previw.className = "previw";
        const imgpreview = document.createElement("img");
        imgpreview.className = "imgpreview";
        imgpreview.src = DataBase[num].URL;
        imgpreview.alt = DataBase[num].Autor;
        //texto wallpaper
        const texto_wallpaper = document.createElement("div");
        texto_wallpaper.className = "texto_wallpaper";
        const divin1 = document.createElement("div");
        const divin2 = document.createElement("div");
        const h3_1_1 = document.createElement("h3");
        h3_1_1.textContent = "Marca:";
        const h3_2_1 = document.createElement("h3");
        h3_2_1.textContent = DataBase[num].Marca;
        const h3_3_1 = document.createElement("h3");
        h3_3_1.textContent = ":" + DataBase[num].Dimenciones;
        const h3_1_2 = document.createElement("h3");
        h3_1_2.textContent = "Modelo:";
        const h3_2_2 = document.createElement("h3");
        h3_2_2.textContent = DataBase[num].Modelo;
        const h3_3_2 = document.createElement("h3");
        h3_3_2.textContent = ":" + DataBase[num].Relacion;
        h3_1_1.className = "h3_text";
        h3_2_1.className = "h3_text";
        h3_3_1.className = "icon-Dimenciones h3_text";
        h3_1_2.className = "h3_text";
        h3_2_2.className = "h3_text";
        h3_3_2.className = "icon-display h3_text";
        const check = document.createElement("input");
        check.className = "checkbox_Select";
        check.type = "checkbox";
        /*check.id = DataBase[num].id*/
        //organizacion
        divin1.appendChild(h3_1_1);
        divin1.appendChild(h3_2_1);
        divin1.appendChild(h3_3_1);
        divin2.appendChild(h3_1_2);
        divin2.appendChild(h3_2_2);
        divin2.appendChild(h3_3_2);
        texto_wallpaper.appendChild(divin1);
        texto_wallpaper.appendChild(divin2);
        texto_wallpaper.appendChild(check);
        previw.appendChild(imgpreview);
        //item
        const item = document.createElement("div");
        item.className = "item";
        item.appendChild(previw);
        item.appendChild(texto_wallpaper);
        let wallpaper = document.getElementById("Wallpepers");
        wallpaper.appendChild(item);


    }

    
}
DataBase = loadJSON()
motorOne() 


