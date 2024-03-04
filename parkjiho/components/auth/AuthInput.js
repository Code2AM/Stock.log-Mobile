import { Input, NativeBaseProvider, Stack, Text } from "native-base";
import React from "react";
import { Pressable } from "react-native";

const AuthInput = () => {
    const [show, setShow] = React.useState(false);

    return (
        <NativeBaseProvider>
            <Stack space={4} w="100%" alignItems="center">
                <Input
                    w={{
                        base: "75%",
                        md: "25%"
                    }}
                    placeholder="Email"
                />
                <Input
                    w={{
                        base: "75%",
                        md: "25%"
                    }}
                    type={show ? "text" : "password"}
                    InputRightElement={
                        <Pressable onPress={() => setShow(!show)}>
                            {/* Pressable 컴포넌트 안에 아이콘 또는 텍스트 등을 추가할 수 있습니다. */}
                        </Pressable>
                    }
                    placeholder="Password"
                />
            </Stack>
        </NativeBaseProvider>
    );
};

export default AuthInput;