let mainTittle = document.getElementById("mainTittle");
mainTitle.style.opacity = 1;

let subTittle = document.getElementsByClassName("lead");
subTittle[0].style.opacity = 1;
// exemple de fonction noméé que l'on pourrait utiliser mais trop complexe
function changeEventStatus() {
    alert("test");
}
  // je recupère dans un tableau tous les élements de class list-groupe-item
let listItems = document.getElementsByClassName("list-group-item");
 // pour chaque li de la liste je fais quelque chose...
for(let listItem of listItems) {
    // j'ajoute une fonction declenchée au click
    listItem.onclick = function() {
        // on ajoute la class "isDone" si elle n'est pas sur le li,
        // on la retire si elle y est
    this.classList.toggle("isDone");
    this.innerHTML += "<span class='badge bg-danger floay-end'>X</span>"
    };  
}