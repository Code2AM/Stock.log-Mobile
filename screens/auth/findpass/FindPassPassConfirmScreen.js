import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, FormControl, HStack, Heading, Input, Link, NativeBaseProvider, Text, VStack } from "native-base";
import { useState } from "react";

export const FindPassPassConfirmScreen = () => {
    const [ password , setPassword ] = useState();
    const [ confirmPassword , setConfirmPassword ] = useState();

    const navigation = useNavigation();

    const handleChangPass = async () => {
  
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
                            {/* <FormControl.Label>Email</FormControl.Label> */}
                            <Input
                                type={"password"}
                                placeholder={"비밀번호"}
                                value={password}
                                onChangeText={setPassword}
                            />
                        </FormControl>

                        <FormControl>
                            {/* <FormControl.Label>Email</FormControl.Label> */}
                            <Input
                                type={"confirmPassword"}
                                placeholder={"비밀번호 확인"}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                        </FormControl>

                        <VStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="#B5D692" _dark={{
                            color: "warmGray.200"
                        }}>
                            비밀번호가 일치합니다
                        </Text>

                        <Button
                            mt="2"
                            bgColor="#B5D692"
                            marginTop={10}
                            onPress={handleChangPass}>
                           확인
                        </Button>

                        
                    </VStack>
                        {/* <HStack mt="6" justifyContent="center">
                            <Text fontSize="sm" color="coolGray.600" _dark={{
                                color: "warmGray.200"
                            }}>
                                아이디가 없으신가요? {" "}
                            </Text>
                            <Link _text={{
                                color: "#B5D692",
                                fontWeight: "medium",
                                fontSize: "sm"
                            }}
                                onPress={handleSignUp}>
                                회원가입
                            </Link>

                        </HStack> */}
                    </VStack>

                </Box>
            </Center>
        </NativeBaseProvider>
    )
}