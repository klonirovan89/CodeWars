function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
 return birds.filter(word => word != "African" && word != "Roman Tufted" && word != "Toulouse" && word != "Pilgrim" && word != "Steinbacher");
};
