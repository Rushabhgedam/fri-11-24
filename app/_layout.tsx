import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "./redux/store";
import UserProvider from "./context/UserProvider";

const MainApplication = () => (
    <UserProvider >
        <Stack screenOptions={{
            headerShown: false
        }} />
    </UserProvider>)

export default MainApplication