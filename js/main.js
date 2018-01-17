/* MIT License
*
* Copyright (c) 2018 Renaud
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
*/

// Fonction pour copier le lien
function copyLink(chapter, id) {
  // Stockage du lien formaté
  var link = "https://Renaud42.github.io/#" + chapter;
  // Création d'une entrée temporaire
  var $temp = $("<input>");

  $("body").append($temp);
  // Sélection du texte de cette entrée
  $temp.val(link).select();
  // Exécution de la commande "copier"
  document.execCommand("copy");
  // Suppression de l'entrée temporaire
  $temp.remove();
  // Remplacement du texte du div #chapter
  $("#chapter" + id + "copy").text("🔗 Lien du chapitre " + id + " copié dans le presse-papier !");
}

// Fonction de la barre de progression
function setProgress(progressId, value) {
    // Transformation en pourcentage
    value = (value > 100) ? 100 : ((value < 0) ? 0 : value);

    // Stockage de variables
    var progress = 0;
    var inputPercentage;
    var percentage;

    var percentageCircle = document.getElementById(progressId).getElementsByClassName("percentage-circle")[0];
    var percentageText = document.getElementById(progressId).getElementsByClassName("percentage-text")[0];

    var sleep = setInterval(circleAnimation, 25);

    // Fonction de l'animation du cercle
    function circleAnimation() {
        inputPercentage = (value / 100) * 382;
        percentage = (progress / 100) * 382;

        // Changement du texte de pourcentage
        percentageText.innerHTML = progress + " %";

        // Si le pourcentage est plus grand que le pourcentage entré alors on arrête, sinon on continue en incrémentant "progress"
        if (percentage >= inputPercentage) {
            // On annule la boucle "sleep"
            clearInterval(sleep);
        } else {
            // Incrémentation de "progress"
            progress++;

            // Ligne pour le style CSS du cercle
            percentageCircle.style.strokeDasharray = percentage + ', 1000';
        }
    }
}
