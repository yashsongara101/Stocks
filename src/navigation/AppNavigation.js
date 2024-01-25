import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screen";
import colors from "../constants/colors";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.primary
          },
          headerTintColor: colors.white,
          animation: 'fade_from_bottom'
        }}>
        <Stack.Screen name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'Upstox Holding'
          }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;