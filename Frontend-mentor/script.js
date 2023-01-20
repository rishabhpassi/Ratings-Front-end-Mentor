let submitBtn = document.getElementsByClassName("submit")[0];
submitBtn.addEventListener("click", function(){
    let x = document.getElementsByClassName("thanks-state")[0];
    let y = document.getElementsByClassName("show")[0];
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
    let rating = document.querySelector("input[name='Rating']:checked");
    if(rating){
        document.getElementById('rate').innerHTML=(rating.value);
    }
});
