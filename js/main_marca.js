var muestra = 0
function cargardata(marca, datamarcas) {
    var obj = datamarcas.filter(obj => ("'"+(obj.Marca).toUpperCase()+"'") == marca.toUpperCase());
    obj = obj[0]
    const titulo = document.getElementById('title')
    titulo.textContent = obj.Marca
    const sede = document.getElementById('SedeIn')
    sede.textContent = obj.Sede
    const fundadores = document.getElementById('FundadoresIn')
    fundadores.textContent = encodeUTF(obj.Fundadores)
    const año = document.getElementById('AñoIn')
    año.textContent = obj.Año
    const walls = document.getElementById('WallpersIn')
    walls.textContent = obj.NWallpapers
    const spanban = document.getElementById('bandera')
    spanban.className = "icon-"+obj.Bandera.toLowerCase()
    var parts = obj.Partes
    for (let i = 1; i <= parts; i++) {
        const part = document.createElement("span")
        part.className = 'path'+i
        spanban.appendChild(part)
    }
    //<span class="icon-itali-flag bandera"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
}
function crateLayout(DataBase, marca, muestra) {
    marca = marca.replaceAll("'","")
    var resultado = DataBase.filter(obj => ((obj.Marca).toUpperCase()) == marca.toUpperCase());
    if (((resultado.length) - muestra) > 0){
        if ((!!document.getElementById('botonvermas')) == false){
            const boton = document.createElement("button")
            boton.click = 'boton()'
            boton.id = 'botonvermas'
            boton.textContent = '+'
            const div = document.getElementById('botondemas');
            div.appendChild(boton)
            FuncionMostrarMas()
          
        } else if ((((resultado.length) - muestra) < 9)) {
            if ((!!document.getElementById('botonvermas')) == true) {
                const div = document.getElementById('botondemas');
                div.removeChild(document.getElementById('botonvermas'))
            }
        } 
            
        
        cont = muestra
        if (resultado.length-muestra > 9){
            fin = cont + 9
        }else{
            fin = resultado.length
        }
        for (muestra ; muestra < fin;muestra++) {
            CreateItem((resultado[muestra]).id)
        }
    }else{
        if ((!!document.getElementById('botonvermas')) == true) {
            const div = document.getElementById('botondemas');
            div.removeChild(document.getElementById('botonvermas'))
        }
    }
    
}
function FuncionMostrarMas() {
    var botonmas = document.getElementById("botonvermas");
    botonmas.onclick = function() {
        muestra = muestra + 9
        crateLayout(DataBase, Marca, muestra)
    }



}

function setTitle(Marca) {
    var Marca = (Marca.replaceAll("'", ""))
    const titulo = document.getElementById('titulo');
    titulo.textContent = Marca;
}
function selectBoxFuncion(Selcionados) {
    for(i in Selcionados){
        id = Selcionados[i];
        var boxs = document.getElementsByClassName('checkbox_Select')
        for (i in boxs) {
            const box = boxs[i];
            if (box.value == id) {
                box.checked = true;

            }
        }
    }    
}

var Marca = getParameterByName('Marca');
setTitle(Marca)
DataBase = LeerJSON('https://raw.githubusercontent.com/Augusto-p/Carwall/main/DataBase/Wallpapers.json')
datamarcas = LeerJSON('https://raw.githubusercontent.com/Augusto-p/Carwall/main/DataBase/Marcas.json')
cargardata(Marca, datamarcas)
crateLayout(DataBase, Marca, muestra);
generateNameZip(getParameterByName('Package'));
selectBoxFuncion(getListaDeSelecionados(getParameterByName('Select')))

