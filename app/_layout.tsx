import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "./redux/store";
import UserProvider from "./context/UserProvider";

const MainApplication = () => (
    <Provider store={store}>
        <Stack screenOptions={{
            headerShown: true
        }} />
    </Provider>)

export default MainApplication