import { Box, Button, NativeBaseProvider, Text } from "native-base"


export const SocialLogin = () => {


    return (
        <>
            <NativeBaseProvider>
                <Text>
                    <Box flex={1} justifyContent="center" alignItems="center">
                        <Button size="sm" variant="outline" colorScheme="secondary">
                            카카오 로그인
                        </Button>
                    </Box>
                </Text>
            </NativeBaseProvider>
        </>
    )
}


