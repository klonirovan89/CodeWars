function giveChange(amount) {
  let amount1 = [];
  let a = amount1[5] = Math.floor(amount/100);
  let b = amount1[4] = Math.floor((amount - (a*100)) / 50);
  let c = amount1[3] = Math.floor((amount - ((a*100) + (b*50))) / 20);
  let d = amount1[2] = Math.floor((amount - ((a*100) + (b*50)+(c*20))) / 10);
  let e = amount1[1] = Math.floor((amount - ((a*100) + (b*50) + (c*20) + (d*10))) / 5);
  let f = amount1[0] = Math.floor((amount - ((a*100) + (b*50) + (c*20) + (d*10) + (e*5))) / 1);
  return amount1;
  }
  giveChange(365)