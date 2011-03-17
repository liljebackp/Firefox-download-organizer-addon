downloadmanager.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ downloadmanager.showFirefoxContextMenu(e); }, false);
};

downloadmanager.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-downloadmanager").hidden = gContextMenu.onImage;
};

window.addEventListener("load", function () { downloadmanager.onFirefoxLoad(); }, false);
