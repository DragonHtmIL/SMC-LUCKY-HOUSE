function openCollection(evt, collectionName) {
  var i, collectioncontiner, collectiontab;
  collectioncontiner = document.getElementsByClassName("collection-continer");
  for (i = 0; i < collectioncontiner.length; i++) {
    collectioncontiner[i].style.right = "-100%";
  }
  collectiontab = document.getElementsByClassName("collectiontab");
  for (i = 0; i < collectiontab.length; i++) {
    collectiontab[i].className = collectiontab[i].className.replace(" active", "");
  }
  document.getElementById(collectionName).style.right = "0%";
  evt.currentTarget.className += " active";
};