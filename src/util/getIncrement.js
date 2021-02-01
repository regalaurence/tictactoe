export const getIncrement = (numberOfSquaresInTheLine, direction) => {
    if (direction === "horizontal") {
        return 1
    }
    else if (direction === "vertical") {
        return numberOfSquaresInTheLine
    }
    else if (direction === "diagonalLeft") {
        return numberOfSquaresInTheLine + 1
    }
    else if (direction === "diagonalRight") {
        return numberOfSquaresInTheLine - 1
    }
}