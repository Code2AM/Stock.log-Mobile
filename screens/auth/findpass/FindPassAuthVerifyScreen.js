
import { useNavigation } from "@react-navigation/native";
import { Box, Button, Center, FormControl, Heading, Input, Link, NativeBaseProvider, Text, VStack, useSafeArea } from "native-base";
import { useState } from "react";

export const FindPassAuthVerifyScreen = () => {
    const [ code, setCode ] = useState();
    const navigation = useNavigation();

    const handleResendCode = () => {
      
    }

    const handleConfirmCode = () => {
      
        navigation.navigate('FindPassStack', { screen: 'FindPassPassConfirmScreen' })
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
                            type={"code"}
                            placeholder={"인증번호를 입력해주세요"}
                            value={code}
                            onChangeText={setCode}
                        />
                    </FormControl>

                    <VStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            인증번호를 받지 못했습니까? {" "}
                        </Text>
                        <Link _text={{
                            color: "#B5D692",
                            fontWeight: "medium",
                            fontSize: "sm"
                        }}
                            onPress={handleResendCode}>
                            다시보내기
                        </Link>

                    </VStack>
                    
                    <Button
                        mt="2"
                        bgColor="#B5D692"
                        marginTop={10}
                        onPress={handleConfirmCode}>
                        확인
                    </Button>
                     
                </VStack>
                
            </Box>
        </Center>
    </NativeBaseProvider>

    )
}