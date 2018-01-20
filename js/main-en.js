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

// Function for copying link
function copyLink(chapter, id) {
  // Storing formatted link
  var link = "https://Renaud42.github.io/index-en.html/#" + chapter;
  // Creating temporary input
  var $temp = $("<input>");

  $("body").append($temp);
  // Selecting this entry text
  $temp.val(link).select();
  // Executing command "copy"
  document.execCommand("copy");
  // Deleting the temporary input
  $temp.remove();
  // Remplacing div content of #chapter
  $("#chapter" + id + "copy").text("🔗 Chapter " + id + " link copied into clipboard !");
}

// Function for the rounded progress bar
function setProgressValue(id, value) {
  $(function(){
      // Setting variables
      var newValue = value * 3.6 - 45;
      var leftValue = (value - 50) * 3.6 - 45;

      // Editing percentage text
      $(id + " .percentage").text(value + " %");

      // Manage CSS properties depending on value
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
