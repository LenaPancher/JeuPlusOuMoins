var chiffreMystere = Math.floor(Math.random() * Math.floor(100));

// var nbessaie = 0;

function devine () {

    var nbutilisateur = document.getElementById("nombre").value;

    var reponse = document.getElementById("reponse");

/*        if (nbessaie == 10) {
            reponse.textContent = "Trop tard, retentes ta chance, le nombre d'essaie est fini"
        }  */
        if (chiffreMystere == nbutilisateur) {
            reponse.textContent = "Correct, tu as trouvé !";
            // nbessaie ++;
        } else if (chiffreMystere < nbutilisateur) {
            reponse.textContent = "C'est moins !";
            // nbessaie ++;
        } else if (chiffreMystere > nbutilisateur) {
            reponse.textContent = "C'est plus !";
            // nbessaie ++;
        } else {
            reponse.textContent = "Euh, un problème de clavier ? Ce n'est pas un nombre !";
        }
    }

function recommence () {
    reponse.textContent = "";
    chiffreMystere = Math.floor(Math.random() * Math.floor(100));
}
