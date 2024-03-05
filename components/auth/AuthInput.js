import { Input, NativeBaseProvider, Stack } from "native-base";
import React from "react";


const AuthInput = ( {placeholder, type} ) => {

    return (
        <NativeBaseProvider>
            <Stack w="100%" alignItems="center">
                <Input
                    w={{
                        base: "75%",
                        md: "25%"
                    }}
                    type={type}
                    placeholder={placeholder}
                />
            </Stack>
        </NativeBaseProvider>
    );
};

export default AuthInput;