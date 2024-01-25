import { View } from "react-native";

import colors from "../constants/colors";

const Divider = ({
  color = colors.screenBackground
}) => {
  return (
    <View style={{
      backgroundColor: color,
      height: 1
    }}></View>
  );
}

export default Divider;