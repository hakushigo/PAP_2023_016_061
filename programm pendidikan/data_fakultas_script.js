document.getElementById("checkall-fakultas").addEventListener("change", function(){
    var checkboxes = document.querySelectorAll(".check-fakultas");
    for(var i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = this.checked;
    }
})

document.getElementById("create-fakultas").addEventListener("click", function(){
    var tambahkan = document.getElementById("tambahkan-fakultas");

    if(tambahkan.style.display == "none"){
        tambahkan.style.display = "block";
    }else{
        tambahkan.style.display = "none";
    }
});

document.getElementById("create-prodi").addEventListener("click", function(){
    var tambahkan = document.getElementById("tambahkan-prodi");

    if(tambahkan.style.display == "none"){
        tambahkan.style.display = "block";
    }else{
        tambahkan.style.display = "none";
    }
});

function open(id){
    var el = document.getElementById(id);
    
    if(el.style.display == 'none'){
        el.style.display = 'block'
    }else{
        el.style.display = 'none'
    }

}