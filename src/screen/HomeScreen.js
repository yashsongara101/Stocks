import React, { useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

import { InvestmentService } from "../services";
import { Divider } from "../components";
import { InvestmentSummary } from "../container";
import colors from "../constants/colors";
import StockListItem from "../components/listItems/StockListItem";

const HomeScreen = () => {
  const [holdings, setHoldings] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useState(() => {
    InvestmentService.getInvestments()
    .then(data => {
      setHoldings(data?.userHolding);
      setLoading(false);
    });
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'}
        backgroundColor={colors.primary}/>
      <View style={styles.containerStyle}>
        {isLoading ? (
          <ActivityIndicator style={[styles.loadingIndicatorStyle]}
            color={colors.primary}
            size={'large'}/>
        ) : (
          <React.Fragment>
            <FlatList data={holdings}
              keyExtractor={item => item?.symbol}
              ItemSeparatorComponent={() => <Divider/>}
              renderItem={({item}) => <StockListItem stock={item}/>}
              contentContainerStyle={styles.holdingsListStyle}
              showsVerticalScrollIndicator={false}/>

            <InvestmentSummary holdings={holdings}/>
          </React.Fragment>
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.screenBackground,
    position: 'relative',
    height: '100%'
  },
  holdingsListStyle: {
    paddingBottom: 96
  },
  loadingIndicatorStyle: {
    padding: 24
  }
});

export default HomeScreen;
