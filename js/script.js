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
    execute_game_rules()
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
    setTimeout(()=>{
        console.log("worked!!!!");
        for(let i=1;i<=9;i++){
            console.log("button-" + i);
            let element = document.getElementById("button-" + i)
            element.setAttribute("class", "game-button")
            element.innerHTML = ''
        }
        set_first_move()
        change_playground_color()
    }, 100)
    for(let i=1;i<=9;i++){
        console.log("button-" + i);
        let element = document.getElementById("button-" + i)
        element.setAttribute("class", "game-button")
        element.innerHTML = ''
    }
}

function start_display_none(){
    change_playground_color()
    document.getElementById("start-div").style.display = "none"
    document.getElementById("turn-div-fake-space").style.display = "none"
    let turn_div = document.getElementById("turn-div")
    turn_div.style.display = "flex"
}


function win_message(winner){
    let message = document.getElementById(winner)
    message.style.display = "flex"
    message.style.animation = "open-banner 0.5s forwards"
    message.style.animationPlayState = "running"
    setTimeout(()=>{
        message.style.animation = "close-banner 0.5s forwards"
        message.style.animationPlayState = "running"
        
        setTimeout(()=>{
        message.style.display = "none"
        }, 500)
    }, 5000)
}

function check_rows_complete(){
    // ----------
    let bag = []
    for(let i=1;i<=3;i++){
        if (document.getElementById("button-" + i).className == "blue-block"){
            bag.push(true)
        }
    }
    if (bag.length == 3){
        reset_game();
        win_message("blue-win-banner");
        return 0;
    }

    bag = []
    for(let i=1;i<=3;i++){
        if (document.getElementById("button-" + i).className == "red-block"){
            bag.push(true)
        }
    }
    if (bag.length == 3){
        reset_game();
        win_message("red-win-banner");
        return 0
    }

    // ----------
    bag = []
    for(let i=4;i<=6;i++){
        if (document.getElementById("button-" + i).className == "blue-block"){
            bag.push(true)
        }
    }
    if (bag.length == 3){
        reset_game();
        win_message("blue-win-banner");
        return 0
    }

    bag = []
    for(let i=4;i<=6;i++){
        if (document.getElementById("button-" + i).className == "red-block"){
            bag.push(true)
        }
    }
    if (bag.length == 3){
        reset_game();
        win_message("red-win-banner");
        return 0
    }
    // ----------
    bag = []
    for(let i=7;i<=9;i++){
        if (document.getElementById("button-" + i).className == "blue-block"){
            bag.push(true)
        }
    }
    if (bag.length == 3){
        reset_game();
        win_message("blue-win-banner");
        return 0
    }

    bag = []
    for(let i=7;i<=9;i++){
        if (document.getElementById("button-" + i).className == "red-block"){
            bag.push(true)
        }
    }
    if (bag.length == 3){
        reset_game();
        win_message("red-win-banner");
        return 0
    }
}

function check_columns_complete(){
    // ----------
    let bag = []
    for(let i=1;i<=7;i+=3){
        if (document.getElementById("button-" + i).className == "blue-block"){
            bag.push(true)
        }
    }
    if (bag.length == 3){
        reset_game();
        win_message("blue-win-banner");
        return 0
    }

    bag = []
    for(let i=1;i<=7;i+=3){
        if (document.getElementById("button-" + i).className == "red-block"){
            bag.push(true)
        }
    }
    if (bag.length == 3){
        reset_game();
        win_message("red-win-banner");
        return 0
    }

    // ----------
    bag = []
    for(let i=2;i<=8;i+=3){
        if (document.getElementById("button-" + i).className == "blue-block"){
            bag.push(true)
        }
    }
    if (bag.length == 3){
        reset_game();
        win_message("blue-win-banner");
        return 0
    }

    bag = []
    for(let i=2;i<=8;i+=3){
        if (document.getElementById("button-" + i).className == "red-block"){
            bag.push(true)
        }
    }
    if (bag.length == 3){
        reset_game();
        win_message("red-win-banner");
        return 0
    }
    // ----------
    bag = []
    for(let i=3;i<=9;i+=3){
        if (document.getElementById("button-" + i).className == "blue-block"){
            bag.push(true)
        }
    }
    if (bag.length == 3){
        reset_game();
        win_message("blue-win-banner");
        return 0
    }

    bag = []
    for(let i=3;i<=9;i+=3){
        if (document.getElementById("button-" + i).className == "red-block"){
            bag.push(true)
        }
    }
    if (bag.length == 3){
        reset_game();
        win_message("red-win-banner");
        return 0
    }
}

function check_diagonals_complete(){
    // ----------
    let bag = []
    for(let i=1;i<=9;i+=4){
        if (document.getElementById("button-" + i).className == "blue-block"){
            bag.push(true)
        }
    }
    if (bag.length == 3){
        reset_game();
        win_message("blue-win-banner");
        return 0
    }

    bag = []
    for(let i=1;i<=9;i+=4){
        if (document.getElementById("button-" + i).className == "red-block"){
            bag.push(true)
        }
    }
    if (bag.length == 3){
        reset_game();
        win_message("red-win-banner");
        return 0
    }

    // ----------
    bag = []
    for(let i=3;i<=7;i+=2){
        if (document.getElementById("button-" + i).className == "blue-block"){
            bag.push(true)
        }
    }
    if (bag.length == 3){
        reset_game();
        win_message("blue-win-banner");
        return 0
    }

    bag = []
    for(let i=3;i<=7;i+=2){
        if (document.getElementById("button-" + i).className == "red-block"){
            bag.push(true)
        }
    }
    if (bag.length == 3){
        reset_game();
        win_message("red-win-banner");
        return 0
    }
}

function execute_game_rules(){
    check_rows_complete()
    check_columns_complete()
    check_diagonals_complete()

    let bag = []
    for(let i=1;i<=9;i++){
        if (document.getElementById("button-" + i).className != "game-button"){
            bag.push(true)
        }
    }
    if (bag.length == 9){
        console.log("draw");        
        reset_game();
        win_message("draw-banner");
    }
}


// change_playground_color()

// setInterval(execute_game_rules, 2000)

// win_message("draw-banner")