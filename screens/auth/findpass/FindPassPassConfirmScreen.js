import { useNavigation, useRoute } from "@react-navigation/native";
import { Box, Button, Center, FormControl, HStack, Heading, Icon, Input, Link, NativeBaseProvider, Pressable, Text, VStack, useToast } from "native-base";
import React, { useEffect, useState } from "react";
import { changePasswordRequest } from "../../../api/auth/AuthAPI";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const FindPassPassConfirmScreen = () => {

    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState(null);
    const [show, setShow] = React.useState(false);

    const navigation = useNavigation();
    const route = useRoute();
    const toast = useToast();

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

        if (passwordCheck) {

            const data = {
                email: email,
                password: password,
            }

            const result = await changePasswordRequest(data);

            toast.show({
                title: result,
                duration: 1800,
                placement: "top",
                avoidKeyboard: true,
            })

            navigation.navigate('AuthStack', { screen: 'LoginScreen' })

        }
        else {
            toast.show({
                title: "비밀번호가 다릅니다! 비밀번호를 다시 입력해주세요",
                duration: 1800,
                placement: "top",
                avoidKeyboard: true,
            })
        }


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
                                value={password}
                                onChangeText={setPassword}
                                type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                                </Pressable>} placeholder="Password"
                            />
                        </FormControl>

                        <FormControl>
                            <Input
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
                                    <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
                                </Pressable>} placeholder="Password"
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