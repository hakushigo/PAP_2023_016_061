document.getElementById("checkall-lembaga").addEventListener("change", function(){
    var checkboxes = document.querySelectorAll(".check-lembaga");
    for(var i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = this.checked;
    }
})

document.getElementById("create-lembaga").addEventListener("click", function(){
    var tambahkan = document.getElementById("tambahkan-lembaga");

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