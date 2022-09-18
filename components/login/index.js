import { View , Text} from "react-native";
import Inputvalue from "./input";
import BackButton from "../BackButton";
const Login = ()=>{
    return (
        <View>
            <Inputvalue  placeholder = "Email" autoCorrect = {false} type = {false}/>
            <Inputvalue  placeholder = "Password" autoCorrect = {true} type = {true}/>
            <BackButton title = "Login" color = "white" backgroundColor = "blue"/>
            <BackButton title = "Forgot the password ?" />
            <BackButton title = "Register" />
        </View>
    )
}
export default Login;