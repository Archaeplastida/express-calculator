/*Helper functions for calculator.js*/

class Statistic {
    static mean(numsList) {
        let sum = 0;
        for (let num of numsList) sum += num;
        return sum / numsList.length;
    }

    static median(numsList) {
        numsList.sort((a, b) => a - b);
        if (numsList.length % 2) return numsList[Math.floor(numsList.length / 2)];
        else return (numsList[(numsList.length / 2) - 1] + numsList[numsList.length / 2]) / 2;
    }

    static mode(numsList) {
        const occurrencesTracker = {}, listOfModes = [];
        let greatest_val;
        for (let num of numsList) {
            if (occurrencesTracker[num]) occurrencesTracker[num]++;
            else occurrencesTracker[num] = 1;
        }

        for (let x = 0; x < 2; x++) {
            Object.entries(occurrencesTracker).forEach(([k, v]) => {
                if (!x) {
                    if (greatest_val === undefined) greatest_val = v;
                    else if (v > greatest_val) greatest_val = v;
                } else if (v === greatest_val) listOfModes.push(Number(k));
            })
        }
        return listOfModes;
    }
}

module.exports = Statistic