(function(win, doc) {
  "use strict";

  var changeColor = function changeColor(color, text) {
    var tdElements = doc.querySelectorAll("tr a, td");
    for (i = 0; i < tdElements.length; i++) {
      tdElements[i].style.color = color;
      text ? (tdElements[i].textContent = text)
        : (tdElements[i].textContent = "Insere texto");
    }
  };

})(window, document);
