let num
let turn
set_first_move()

function set_first_move(){
    num = Math.floor(Math.random() * 2) + 1;
    if (num == 1){
        turn = false
    }
    else{
        turn = true
    }
}

// let turn = false
let chosen_buttons = ["blue-block", "red-block"]

function choose_block(id){
    let button = document.getElementById(id)
    // check if button has a chosen button class or not
    if (!chosen_buttons.includes(button.getAttribute("class"))){
        // if not, sets a class for it
        // blue's turn
        if (turn){
            button.setAttribute("class", "red-block")
            button.innerHTML = '<img src="assets/images/X.png" class="image">'
            turn = false
            change_playground_color()
        }
        // red's turn
        else{
            button.setAttribute("class", "blue-block")
            button.innerHTML = '<img src="assets/images/O.png" class="image">'
            turn = true
            change_playground_color()
        }
        
    }
}

function change_playground_color(){
    let playground = document.getElementById("playground")
    let turn_sign = document.getElementById("turn-div")
    // for red
    if (turn){
        document.getElementById("turn-image-O").style.display = "none"
        document.getElementById("turn-image-X").style.display = "block"
        playground.style.backgroundColor = "#ff615e"
        turn_sign.style.backgroundColor = "#ffcdccff"
        // turn_image.setAttribute("src", "../assets/images/X.png")
    }
    // for blue
    else{
        document.getElementById("turn-image-X").style.display = "none"
        document.getElementById("turn-image-O").style.display = "block"
        playground.style.backgroundColor = "#3ec5f4"
        turn_sign.style.backgroundColor = "#bceeffff"
        // turn_image.setAttribute("src", "../assets/images/O.png")
    }
}

function reset_game(){
    console.log("ok!!!");
    
}

function start_display_none(){
    document.getElementById("start-div").style.display = "none"
    let turn_div = document.getElementById("turn-div")
    turn_div.style.display = "flex"

}

function reset(params) {
    
}

change_playground_color()