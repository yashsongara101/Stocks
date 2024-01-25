const investmentUtils = {
  getProfitAndLossByStock ( stock ) {
    return this.getCurrentStockValue(stock) - this.getInvestmentValue(stock);
  },
  getCurrentStockValue ( stock ) {
    const { ltp, quantity } = stock;
    return ltp * quantity;
  },
  getInvestmentValue ( stock ) {
    const { avgPrice, quantity } = stock;
    return avgPrice * quantity;
  },
  getTotalCurrentStockValue ( stocksList ) {
    return stocksList.reduce((value, curStock) => {
      return value + this.getCurrentStockValue(curStock)
    }, 0);
  },
  getTotalInvestmentValue (stocksList) {
    return stocksList.reduce((value, curStock) => {
      return value + this.getInvestmentValue(curStock)
    }, 0);
  },
  getTodaysProfitAndLoss ( stocksList ) {
    return stocksList.reduce((value, curStock) => {
      const { close, ltp, quantity } = curStock;
      return value + ( (close - ltp) * quantity );
    }, 0);
  }
}

export default investmentUtils;