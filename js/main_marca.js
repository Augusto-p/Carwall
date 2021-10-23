var muestra = 0
function cargardata(marca, datamarcas) {
    var obj = datamarcas.filter(obj => ("'"+(obj.Marca).toUpperCase()+"'") == marca.toUpperCase());
    obj = obj[0]
    const titulo = document.getElementById('title')
    titulo.textContent = obj.Marca
    const sede = document.getElementById('SedeIn')
    sede.textContent = obj.Sede
    const fundadores = document.getElementById('FundadoresIn')
    fundadores.textContent = obj.Fundadores
    const año = document.getElementById('AñoIn')
    año.textContent = obj.Año
    const walls = document.getElementById('WallpersIn')
    walls.textContent = obj.NWallpapers
    
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
        for (muestra ; muestra < (cont + 9);muestra++) {
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
function selectBoxFuncion(id) {
    var box = document.getElementsByClassName('checkbox_Select')
    var resultado = box[0].value
    console.log(resultado)
    
}

var Marca = getParameterByName('Marca');

DataBase = LeerJSON('https://raw.githubusercontent.com/Augusto-p/Carwall/main/DataBase/Wallpapers.json')
datamarcas = LeerJSON('https://raw.githubusercontent.com/Augusto-p/Carwall/main/DataBase/Marcas.json')
cargardata(Marca, datamarcas)
crateLayout(DataBase, Marca, muestra);

selectBoxFuncion('13APrKVYptJBaAYR4fYrQp_mB5RkzDUs7')