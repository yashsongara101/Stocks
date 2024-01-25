const commonUtils = {
  convertNumberToRupeesFormat ( value, fractionDigits = 2 ) {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: fractionDigits,
    }).format(value)
  }
}

export default commonUtils;