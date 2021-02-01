import { getIncrement } from './getIncrement';

export const getBases = (numberOfSquaresInTheLine) => {
    let horizontalIncrement = getIncrement(numberOfSquaresInTheLine, "horizontal")
    let verticalIncrement = getIncrement(numberOfSquaresInTheLine, "vertical")
    let diagonalLeftIncrement = getIncrement(numberOfSquaresInTheLine, "diagonalLeft")
    let diagonalRightIncrement = getIncrement(numberOfSquaresInTheLine, "diagonalRight")


    let horizontalBasesEmpty = new Array(numberOfSquaresInTheLine).fill(null)
    let verticalBasesEmpty = new Array(numberOfSquaresInTheLine).fill(null)
    let horizontalBasesIncremented = horizontalBasesEmpty.map((e, index) => e + horizontalIncrement * index)
    let verticalBasesIncremented = verticalBasesEmpty.map((e, index) => e + verticalIncrement * index)
    let diagonalBaseLeft = [horizontalBasesIncremented[0]]
    let diagonalBaseRight = [horizontalBasesIncremented[horizontalBasesIncremented.length - 1]]

    let bases = {
        horizontal: {
            bases: horizontalBasesIncremented,
            increment: verticalIncrement
        },
        vertical: {
            bases: verticalBasesIncremented,
            increment: horizontalIncrement
        },
        diagonalLeft: {
            bases: diagonalBaseLeft,
            increment: diagonalLeftIncrement
        },
        diagonalRight: {
            bases: diagonalBaseRight,
            increment: diagonalRightIncrement
        },
    }

    return bases
}