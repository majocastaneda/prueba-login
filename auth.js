import AsyncStorage from "@react-native-async-storage/async-storage";

export const _setStorageToken = async (item, selectedValue) => {

    try {
        await AsyncStorage.setItem (item, selectedValue);
    } catch (error) {
        console.log('AsyncStorage error: ' + error.message);
    }
}

export const _getStorageToken = async (item) => {
    try {
        const jsonValue = await AsyncStorage.getItem(item)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (error) {
            console.log('AsyncStorage error:' + error.message);
    }
}
