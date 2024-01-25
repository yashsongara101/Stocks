import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { InvestmentUtils, CommonUtils } from '../utils';
import { Divider } from "../components";
import colors from "../constants/colors";

import ArrowUp from '../assets/arrow_up.svg';
import ArrowDown from '../assets/arrow_down.svg';

const InvestmentSummary = ({holdings}) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <View style={styles.summaryContainerStyle}>
      <TouchableOpacity style={[styles.collapseIconContainerStyle]}
        onPress={() => {
          setCollapsed(!collapsed);
        }}>
          {collapsed ? <ArrowUp/> : <ArrowDown/>}
      </TouchableOpacity>
      {!collapsed && (
        <React.Fragment>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <Text style={[styles.titleStyle]}>{'Current Value'}</Text>
            <Text style={[styles.textValueStyle]}>{CommonUtils.convertNumberToRupeesFormat(InvestmentUtils.getTotalCurrentStockValue(holdings))}</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <Text style={[styles.titleStyle]}>{'Total Investment'}</Text>
            <Text style={[styles.textValueStyle]}>{CommonUtils.convertNumberToRupeesFormat(InvestmentUtils.getTotalInvestmentValue(holdings))}</Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <Text style={[styles.titleStyle]}>{`Today's Profit & Loss`}</Text>
            <Text style={[styles.textValueStyle]}>{CommonUtils.convertNumberToRupeesFormat(InvestmentUtils.getTodaysProfitAndLoss(holdings))}</Text>
          </View>
          <Divider/>
        </React.Fragment>
      )}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <Text style={[styles.titleStyle]}>{'Profit & Loss'}</Text>
        <Text style={[styles.textValueStyle]}>{CommonUtils.convertNumberToRupeesFormat(
          InvestmentUtils.getTotalCurrentStockValue(holdings) - InvestmentUtils.getTotalInvestmentValue(holdings)
        )}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  summaryContainerStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    gap: 16,
    backgroundColor: colors.white,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    elevation: 16,
  },
  titleStyle: {
    fontSize: 18,
    color: colors.black,
    fontWeight: 'bold'
  },
  textValueStyle: {
    fontSize: 18,
    color: colors.black
  },
  collapseIconContainerStyle: {
    alignItems: 'center',
  }
});

export default InvestmentSummary;
