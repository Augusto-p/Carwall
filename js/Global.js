function CreateItem(ID){
    var obj = DataBase.filter(obj => (obj.id) == ID);
    var data = obj[0]
    const previw = document.createElement("div");
    previw.className = "previw";
    const imgpreview = document.createElement("img");
    imgpreview.className = "imgpreview";
    imgpreview.src = data.URL;
    imgpreview.alt = data.Autor;
    imgpreview.id = data.id+"img"
    //texto wallpaper
    const texto_wallpaper = document.createElement("div");
    texto_wallpaper.className = "texto_wallpaper";
    const divin1 = document.createElement("div");
    const divin2 = document.createElement("div");
    const h3_1_1 = document.createElement("h3");
    h3_1_1.textContent = "Marca:";
    const h3_2_1 = document.createElement("h3");
    h3_2_1.textContent = data.Marca;
    const h3_3_1 = document.createElement("h3");
    h3_3_1.textContent = ":" + data.Dimenciones;
    const h3_1_2 = document.createElement("h3");
    h3_1_2.textContent = "Modelo:";
    const h3_2_2 = document.createElement("h3");
    h3_2_2.textContent = data.Modelo;
    const h3_3_2 = document.createElement("h3");
    h3_3_2.textContent = ":" + data.Relacion;
    h3_1_1.className = "h3_text";
    h3_2_1.className = "h3_text";
    h3_3_1.className = "icon-Dimenciones h3_text";
    h3_1_2.className = "h3_text";
    h3_2_2.className = "h3_text";
    h3_3_2.className = "icon-display h3_text";
    const check = document.createElement("input");
    check.className = "checkbox_Select";
    check.type = "checkbox";
    check.value = data.id;
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
    item.id = data.id
    item.appendChild(previw);
    item.appendChild(texto_wallpaper);
    let wallpaper = document.getElementById("Wallpepers");
    wallpaper.appendChild(item);


}
function RemoveItem(identificador){
    const Wallpeper = document.getElementById('Wallpepers');
    Wallpeper.removeChild(identificador);
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function LeerJSON(filePath) {
    var json = LeerTextFileByAjaxSinc(filePath, "application/json");
    return JSON.parse(json);

}
function Ira(marca) {
    marca = "'" + marca + "'"
    var paquetname = document.getElementById('name_pack').value
    if (paquetname == "") {
        paquetname = null;
    }
    var Selecionados = document.getElementsByClassName('checkbox_Select');
    var SelecionadosLista = []
    for (var x = 0; x < Selecionados.length; x++) {
        if (Selecionados[x].checked) {
            SelecionadosLista.push(Selecionados[x].value);
        }
    }
    var url = 'Marcas.html?Marca=' + marca + '&Paquete=' + paquetname + '&Select=' + SelecionadosLista;
    const link = document.createElement('a');
    link.setAttribute('href', url)
    link.click()
}
function LeerTextFileByAjaxSinc(filePath, mimeType) {
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

function RandomNums(cantidad, Hasta) {
    out = [];
    var i = 0;
    while (i != cantidad) {
        var Aleatorio = Math.floor(Math.random() * Hasta);
        if ((out.indexOf(Aleatorio)) == -1) {
            out.push(Aleatorio);
            i = i + 1;
        }
    }
    return out
}

function checkbutonF(){
    console.log('hola')
}
