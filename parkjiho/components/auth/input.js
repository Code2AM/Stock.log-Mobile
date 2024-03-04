import { Input, Stack } from "native-base";

const AuthInput = ({ type, placeholder, onChange, value }) => {

    return <Stack space={4} w="75%" maxW="300px" mx="auto">
        <Input variant="outline" placeholder={placeholder} type={type} onChange={onChange} value={value} />
      </Stack>;
  };

  export default AuthInput;