const removeFromArray = function(originalArray,...removeArray) {
    for (let removeArrayIndex = 0; removeArrayIndex<removeArray.length; removeArrayIndex++){
        for (let  originalArrayIndex= 0; originalArrayIndex < originalArray.length; originalArrayIndex++){
            if (removeArray[removeArrayIndex]===originalArray[originalArrayIndex]){
                originalArray.splice(originalArrayIndex,1,);
            }
        }
    }
return originalArray;

};

// Do not edit below this line
module.exports = removeFromArray;
