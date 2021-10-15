
// const record = [
//     {year: "2018", result: "L"},
//     {year: "2017", result: "W"},
//     {year: "2016", result: "N/A"}
//     //...
//   ]

  function superbowlWin(array) {
   const newArray = array.find(array => array.result === "W")
   //v if newArray = True ; happenes once we find  "find()" what its looking for 
    if(newArray){
        return  newArray.year 
    }else {
        return undefined
    }
  }

  
  