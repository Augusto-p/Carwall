
function checboxcontrol(){
    var Selecionados = document.getElementsByClassName('checkbox_Select');
    for (var x =0; x < Selecionados.length; x++){
        var zip = new JSZip();
        if (Selecionados[x].checked) {
            var value = Selecionados[x].value;
            var cont = 0;
            while(cont != DataBase.length){
                if (DataBase[cont]['id'] == value){
                    urlBase = DataBase[cont]['SaveData'];
                    
                }
                cont = cont + 1;
            }    
            jsondata = LeerJSON(urlBase);
            nombre = jsondata[0]['name']+'jpg';
            base64 = jsondata[0]['base64'];     
            zip.file(nombre, base64, { base64: true });
            
        }
        
    }
}
function CreateHome(){
    RandomNums = RandomNums(9, 6928)
    for (num in RandomNums){
        CreateItem((DataBase[RandomNums[num]]).id);
    }
}

DataBase = LeerJSON('https://raw.githubusercontent.com/Augusto-p/Carwall/main/DataBase/Wallpapers.json')
CreateHome();


