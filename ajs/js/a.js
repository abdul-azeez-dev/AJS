function ajsInclude() {
  var z, i, el, file, xh;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("ajs-include");
  for (i = 0; i < z.length; i++) {
    el = z[i];
    /*search for elements with a certain atrribute:*/
    file = el.getAttribute("src");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xh = new XMLHttpRequest();
      xh.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          el.innerHTML = this.responseText;
        }
        /* Remove the attribute, and call this function once more: */
        // ajsInclude();
        el.removeAttribute("src");
      };
      xh.open("GET", file, true);
      xh.send();
      /* Exit the function: */
      return;
    }
  }
}
function getAndRemove(el, atr) {
  var cond = el.getAttribute(atr);
  el.removeAttribute("ajs-if");
  return cond;
}
// self calling
ajsInclude();
function checkIf() {
  var z, i, el, con;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    el = z[i];
    con = getAndRemove(el,'ajs-if');
    if (con) {
      if (eval(con)) {
        return;
      } else {
        el.innerHTML = "";
      }
    }
  }
}
checkIf();
