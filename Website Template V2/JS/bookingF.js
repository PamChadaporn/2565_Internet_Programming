function normalbookingJ1(){
    let img = document.getElementById('J1')
    if(img.src.match("../Assets/chair.png")){
        img.src = "../Assets/booking.png"
    }else{
        img.src = "../Assets/chair.png"
    }
}