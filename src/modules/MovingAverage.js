class MovingAverage {

    constructor(){

    }

    predict(previousPrices, nextCount){

        let newPrices = previousPrices;
        let currentPrice = previousPrices[previousPrices.length - 1];

        newPrices.push(this.calculateNextSMA(previousPrices));

        for (let x = 1; x < nextCount; x++){
            newPrices.push(this.calculateNextEMA(newPrices, currentPrice));
        }

        return newPrices;
    }

    calculateNextSMA(previousPrices){

        let sum = 0;
        let nextPrice = 0;

        for (let x = 0; x < previousPrices.length; x++){
            sum += previousPrices[x];
        }
        nextPrice = sum / previousPrices.length;

        return nextPrice;
    }

    calculateNextEMA(previousPrices, currentPrice){

        let nextPrice = 0;
        let multiplier = Math.random();

        nextPrice = ((currentPrice - previousPrices[previousPrices.length - 1]) * multiplier) + previousPrices[previousPrices.length - 1];

        return nextPrice;
    }
}

export default MovingAverage;