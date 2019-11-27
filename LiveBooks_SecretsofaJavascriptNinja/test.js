
function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    var root =  Math.sqrt(sq);

    console.log(root)
    
    if (Number.isInteger(root)){
        root++
        console.log(root)
        return (root*root)
    }



    return -1;
  }

  console.log(findNextSquare(114))