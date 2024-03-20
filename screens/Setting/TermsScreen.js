import { Box, Center, NativeBaseProvider, ScrollView, Text } from "native-base";

const TermsScreen = () => {
    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box p={4}>
                    <Center>
                        <Text fontSize="xl" fontWeight="bold">제 1 조 (목적)</Text>
                    </Center>
                    <Text mt={2}>
                        본 약관은 Stock.log(이하 "서비스"라 함)을(를) 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                    </Text>

                    <Center mt={10}>
                        <Text fontSize="xl" fontWeight="bold">제 2 조 (정의)</Text>
                    </Center>
                    <Text mt={2}>
                        "서비스"란 회사가 제공하는 주식 매매일지 작성, 주식 정보 제공 등의 서비스를 의미합니다.
                        "이용자"란 본 약관에 따라 "서비스"를 이용하는 자를 의미합니다.
                    </Text>

                    <Center mt={10}>
                        <Text fontSize="xl" fontWeight="bold"> 제 3 조 (약관의 효력 및 변경)</Text>
                    </Center>

                    <Text mt={2}>
                        본 약관은 "서비스"를 이용하고자 하는 모든 이용자에게 적용됩니다.
                        회사는 필요 시 본 약관을 변경할 수 있으며, 변경된 약관은 "서비스" 내에 공지함으로써 효력을 발생합니다. 변경된 약관에 대한 이용자의 이의제기가 없는 경우 이를 승인한 것으로 간주됩니다.
                    </Text>

                    <Center mt={10}>
                        <Text fontSize="xl" fontWeight="bold">  제 4 조 (이용계약의 성립)</Text>
                    </Center>

                    <Text mt={2}>
                        "서비스" 이용계약은 이용자가 본 약관에 동의하고 회사의 이용신청 양식을 작성하여 제출함으로써 성립됩니다.
                        회사는 이용신청에 대해 승인 여부를 결정하며, 승인된 경우 이를 이용자에게 통지합니다.
                    </Text>

                    <Center mt={10}>
                        <Text fontSize="xl" fontWeight="bold">제 5 조 (서비스 이용)</Text>
                    </Center>

                    <Text mt={2}>
                        이용자는 회사가 제공하는 "서비스"를 본 약관 및 관련 법령을 준수하여 이용하여야 합니다.
                        이용자는 본 "서비스"를 상업적인 목적으로 사용하거나 제3자에게 임의로 이용권한을 부여할 수 없습니다.
                        회사는 이용자가 본 약관을 위반하거나 관련 법령을 위반할 경우 이용자의 "서비스" 이용을 제한할 수 있습니다.
                    </Text>

                    <Center mt={10}>
                        <Text fontSize="xl" fontWeight="bold"> 제 6 조 (서비스의 제공)</Text>
                    </Center>

                    <Text mt={2}>
                        회사는 이용자에게 안정적이고 지속적인 "서비스"를 제공하기 위해 최선의 노력을 다할 것입니다.
                        회사는 "서비스"의 품질 향상 및 안정성 확보를 위해 필요한 경우 사전 공지 후 일시적으로 서비스의 제공을 중단할 수 있습니다.
                    </Text>

                    <Center mt={10}>
                        <Text fontSize="xl" fontWeight="bold"> 제 7 조 (서비스의 변경 및 중단)</Text>
                    </Center>

                    <Text mt={2}>
                        회사는 "서비스"의 변경 및 중단이 필요한 경우 사전 공지 후 변경 또는 중단할 수 있습니다.
                        회사는 "서비스"의 변경 또는 중단으로 발생하는 손해에 대해 책임을 지지 않습니다.
                    </Text>

                    <Center mt={10}>
                        <Text fontSize="xl" fontWeight="bold">   제 8 조 (개인정보보호)
                        </Text>
                    </Center>

                    <Text mt={2}>
                        회사는 이용자의 개인정보를 보호하기 위해 최선을 다하며, 관련 법령 및 회사의 개인정보처리방침에 따라 개인정보를 처리합니다.
                        이용자의 개인정보보호에 대한 자세한 사항은 회사의 개인정보처리방침을 참조하시기 바랍니다.
                    </Text>

                    <Center mt={10}>
                        <Text fontSize="xl" fontWeight="bold">제 9 조 (책임 제한)</Text>
                    </Center>

                    <Text mt={2}>
                        회사는 천재지변, 정전, 해킹 등 부득이한 사유로 인한 서비스의 중단에 대해 책임을 지지 않습니다.
                        회사는 이용자가 "서비스"를 이용함으로써 발생하는 손해에 대해 일체의 책임을 지지 않습니다.
                    </Text>

                    <Center mt={10}>
                        <Text fontSize="xl" fontWeight="bold"> 제 10 조 (분쟁해결)</Text>
                    </Center>

                    <Text mt={2}>
                        본 약관에 명시되지 않은 사항에 대하여는 관련 법령과 회사의 내부규정에 따릅니다.
                    </Text>

                    <Center mt={10}>
                        <Text fontSize="xl" fontWeight="bold"> 제 11 조 (준거법 및 관할법원)</Text>
                    </Center>

                    <Text mt={2}>
                        본 약관에 명시된 사항에 대한 해석 및 분쟁해결에 관한 관할법원은 대한민국의 관할법원으로 합니다.
                    </Text>
                    <Text mt={5}>
                        부칙

                        본 약관은 2024년 3월 19일부터 시행됩니다.
                    </Text>

                </Box>
            </ScrollView>
        </NativeBaseProvider>
    )
}

export default TermsScreen;