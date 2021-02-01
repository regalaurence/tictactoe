import { getBases } from './getBases';
import { getLineToCheck } from './getLineToCheck';

export const getAllLinesToCheck = (number) => {
    const basesToIncrement = getBases(number)
    let basesToIncrementValues = Object.values(basesToIncrement)
    let allLines = []
    basesToIncrementValues.forEach(({ bases, increment }) => {
         bases.forEach(base => {
             const basesToAdd = getLineToCheck(base, increment, number)
             allLines.push(basesToAdd)
        })
    })
    return allLines
}