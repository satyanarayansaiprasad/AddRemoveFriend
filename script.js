var myStatus = document.querySelector("h5");
var Btn = document.querySelector("#add");
var check = 0;

Btn.addEventListener("click", function(){

    if(check === 0){
        myStatus.innerHTML = "Friends";
        Btn.innerHTML = "Remove Friend";
        myStatus.style.color = "green";
        check = 1;
    } else{
        myStatus.innerHTML = "stranger";
        Btn.innerHTML = "Add Friend";
        myStatus.style.color = "red";
        check = 0;
    }
    

});