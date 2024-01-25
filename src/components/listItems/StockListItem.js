import { StyleSheet, Text, View } from "react-native";

import { CommonUtils, InvestmentUtils } from "../../utils";
import colors from "../../constants/colors";

const StockListItem = ({
  stock
}) => {
  const { avgPrice, symbol, ltp, quantity } = stock;
  const todayPnL = InvestmentUtils.getProfitAndLossByStock(stock);

  return (
    <View style={styles.containerStyle}>
      <View style={styles.containerSubviewStyle}>
        <Text style={styles.titleStyle}>{symbol}</Text>
        <Text>
          {`LTP: `}
          <Text style={{
            fontWeight: 'bold',
            color: colors.black
          }}>{CommonUtils.convertNumberToRupeesFormat(ltp)}</Text>
        </Text>
      </View>
      <View style={styles.containerSubviewStyle}>
        <Text>{`Qty: ${quantity}`}</Text>
        <Text>
          {`P/L: `}
          <Text style={{
            color: todayPnL > 0 ? colors.green : colors.red
          }}>{CommonUtils.convertNumberToRupeesFormat(todayPnL)}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.white,
    padding: 16,
    gap: 16
  },
  containerSubviewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleStyle: {
    fontSize: 18,
    color: colors.black,
    fontWeight: 'bold'
  }
});

export default StockListItem;
