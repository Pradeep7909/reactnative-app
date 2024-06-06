import { Dimensions } from "react-native";
import { getSafeAreaInsets } from 'react-native-safe-area-context';

class DeviceSize {
    static screenHeight = Dimensions.get('window').height;
    static screenWidth = Dimensions.get('window').width;
    static safeAreaTop = 44;
    static safeAreaBottom = 20;

    static async fetchSafeAreaInsets() {
        const insets = await getSafeAreaInsets();
        DeviceSize.safeAreaTop = insets.top;
        DeviceSize.safeAreaBottom = insets.bottom;
    }
}

export default DeviceSize;
