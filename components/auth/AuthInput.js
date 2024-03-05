import { Input, NativeBaseProvider, Stack, Text } from "native-base";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

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