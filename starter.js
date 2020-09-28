// starter.js

//console.log("Hey");

//on ecoute le chargement 
//avec un attribut evenementiel
//onload = init;
// OU avec la methode addEventListener()
addEventListener("load",init);

function init(evt){
    console.log(evt.target)
    document.getElementById("output").innerHTML ="Hey !";
}

// INLINE FUNCTIONS / ANONYMOUS FUNCTION
let maFonction = function(){
    console.log("Hey from an inline function");
};

//  invoc de la fct 
maFonction();

// On déclare un objet
var clientModel = {
	// Attributs (ou propriétés)
	nom : "Bob",
	scoreFid : 100,
	
	//Méthodes
	afficher : function(){
		console.log("Nom ==> " + this.nom + " Score ==> " + this.scoreFid);
	},
	
	addPoints : function(points){
		this.scoreFid += points;
	}
}

// On affiche les données (l'état de l'objet (object state))
clientModel.afficher();

// On donne 10 points à Bob
clientModel.addPoints(10);

// On affiche les données (l'état de l'objet (object state))
clientModel.afficher();
