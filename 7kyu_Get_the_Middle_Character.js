function getMiddle(s){
    let b = Array.from(s)
    let i=b.length
    let number=Math.trunc(i/2)
    if(i % 2 == 0){
          return console.log(b[i/2-1]+b[i/2])
        }
        if(i % 2 != 0){
            return console.log(b[number])
          }
    }
        getMiddle("testt")

        
