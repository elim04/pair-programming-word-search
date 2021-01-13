function reverseString(str) {
  
    var rString = str.split("").reverse().join("");
    return rString;
}

const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (let r of horizontalJoin) {
        let rev = reverseString(r);
        if (rev.includes(word)) return true
    }

   

    const verticalJoin = transpose(letters);
    const horizontalJoin2 = verticalJoin.map(lv => lv.join(''))
    for (let v of horizontalJoin2) {
        if(v.includes(word)) return true
    }
    for (let p of horizontalJoin2) {
        let rev = reverseString(p);
        if (rev.includes(word)) return true
    }
    
    return false

}



const transpose = function(matrix) {
    const newMatr = [];
    for (let x = 0; x < matrix[0].length; x++) {
      newMatr.push([]);
      for (let y = 0; y < matrix.length; y++){
        newMatr[x].push(matrix[y][x])
      }
    }
    return newMatr;
};




module.exports = wordSearch


