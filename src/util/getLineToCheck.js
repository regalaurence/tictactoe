export const getLineToCheck = (baseToincrement, increment, numberOfSquaresInTheLine) => {
    let initialArray = new Array(numberOfSquaresInTheLine).fill(null)
    let lineToCheck = initialArray.map((e, index) => baseToincrement + increment * index)
    return lineToCheck
}