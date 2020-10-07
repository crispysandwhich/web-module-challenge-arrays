function addFlavor(flavor, arr){
    flavor = String(flavor)
    let newList = [...arr]
    newList.unshift(flavor)
    console.log(newList)
    return newList;
}

console.log(addFlavor('sherpert', ))