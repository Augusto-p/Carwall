fetch("https://raw.githubusercontent.com/Augusto-p/Carwall/main/wallpapers.json").then(
    function (u) { return u.json(); }).then(function (json) {var data = json;})
    //.then(response => response.json())
    //.then(json => console.log(json));

function checboxcontrol(){
    if (document.getElementById('IMG1').click){
       console.log(data[0].Marca);
        alert('anda')

    }
    else{
        alert('fail')
        console.log(data[0].Marca);
    }
}
