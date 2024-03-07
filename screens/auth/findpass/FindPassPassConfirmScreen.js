import { useNavigation, useRoute } from "@react-navigation/native";
import { Box, Button, Center, FormControl, HStack, Heading, Input, Link, NativeBaseProvider, Text, VStack } from "native-base";
import { useEffect, useState } from "react";

export const FindPassPassConfirmScreen = () => {

    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState(null);

    const navigation = useNavigation();
    const route = useRoute();

    // 전달받은 이메일을 저장
    const { data } = route.params;
    const email = data.email;

    // 비밀번호 동적으로 체크
    useEffect(() => {
        if (confirmPassword) {
            // 일치하면 true를 반환
            setPasswordCheck(password === confirmPassword);
        } else {
            setPasswordCheck(null);
        }
    }, [confirmPassword, password]);

    const handleChangPass = async () => {

        // FIXME
        // 비밀번호 변경 API 필요

        navigation.navigate('AuthStack', { screen: 'LoginScreen' })
    }

    return (
        <NativeBaseProvider>
            <Center w="100%" h="100%">
                <Box safeArea p="2" py="8" w="90%" maxW="290">
                    <Heading
                        size="xl"
                        fontWeight="600"
                        color="#414141"

                        marginBottom={12}
                        _dark={{
                            color: "warmGray.50"
                        }}>
                        비밀번호 찾기
                    </Heading>

                    <VStack space={3} mt="5" >
                        <FormControl>
                            <Input
                                type={"password"}
                                placeholder={"비밀번호"}
                                value={password}
                                onChangeText={setPassword}
                            />
                        </FormControl>

                        <FormControl>
                            <Input
                                type={"confirmPassword"}
                                placeholder={"비밀번호 확인"}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                        </FormControl>

                        <VStack mt="6" justifyContent="center">

                            {passwordCheck ? (
                                <Text fontSize="sm" color="#B5D692" _dark={{ color: "warmGray.200" }}>
                                    비밀번호가 일치합니다
                                </Text>
                            ) : passwordCheck === false ? (
                                <Text fontSize="sm" color="#E53935" _dark={{ color: "warmGray.200" }}>
                                    비밀번호가 다릅니다
                                </Text>
                            ) : null}

                            <Button
                                mt="2"
                                bgColor="#B5D692"
                                marginTop={10}
                                onPress={handleChangPass}>
                                확인
                            </Button>

                        </VStack>

                    </VStack>

                </Box>
            </Center>
        </NativeBaseProvider>
    )
}