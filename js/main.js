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

// Fonction pour la barre de progression
function setProgressValue(id, value) {
  $(function(){
      // Déclaration de variables
      var newValue = value * 3.6 - 45;
      var leftValue = (value - 50) * 3.6 - 45;

      // Changement du texte de pourcentage
      $(id + " .percentage").text(value + " %");

      // Gestion des propriétés CSS en fonction de la valeur
      if(value >= 0 && value <= 50) {
        $(id + " .right .spinner").css({
          "transform" : "rotate(" + newValue + "deg)"
        });
        $(id + " .left .spinner").css({
          "transform" : "rotate(-45deg)"
        });
      } else if(value >= 50 && value <= 100) {
        $(id + " .right .spinner").css({
          "transform" : "rotate(135deg)"
        });
        setTimeout(function(){
          $(id + " .left .spinner").css({
            "transform" : "rotate(" + leftValue + "deg)"
          });
        }, 300);
      }
  });
}
