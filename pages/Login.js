import { NativeBaseProvider } from "native-base"
import AuthInput from "../parkjiho/components/auth/AuthInput"
import AuthButton from "../parkjiho/components/auth/AuthButton"

const Login = () => {

    return(
       
        <NativeBaseProvider>
            <AuthInput />
            <AuthButton />
        </NativeBaseProvider>
        
    )
}
export default Login;