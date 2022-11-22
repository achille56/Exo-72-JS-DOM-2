let divNT = document.getElementsByClassName("name-tag");

    for (let x = 0 ; x < divNT.length ; x++) {
        let newElement = document.createElement("p");
        newElement.innerHTML = "HELLO WORLD !";
        divNT[x].append(newElement);
    }









