document.getElementById("checkall").addEventListener("change", function(){
    var checkboxes = document.querySelectorAll(".slavecheckbox");
    for(var i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = this.checked;
    }
})

document.getElementById("create-pengumuman").addEventListener("click", function(){
    var tambahkan = document.getElementById("tambahkan");

    if(tambahkan.style.display == "none"){
        tambahkan.style.display = "block";
    }else{
        tambahkan.style.display = "none";
    }
});

/**

document.getElementById("checkall").addEventListener("change", function(){
    var checkboxes = document.querySelectorAll(".slavecheckbox");
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

 */