import { Button, Center, Link, Modal, Text, View, ZStack, useToast } from "native-base";
import { useState } from "react";
import { logout } from "../../../api/auth/LogoutAPI";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const LogoutButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 변수

    const { setIsSignedIn } = useStore(useAuth);

    const navigation = useNavigation();
    const toast = useToast();

    // 로그아웃 함수
    const handleLogout = async () => {
        await logout(navigation, toast, setIsSignedIn);

        setIsModalOpen(false);
    };

    return (
        <>
            <TouchableOpacity onPress={() => setIsModalOpen(true)} style={styles.button}>
                    <ZStack>
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons name="logout" style={styles.icon} size={30} />
                        </View>
                        <Text style={styles.text}>로그아웃</Text>
                    </ZStack>
            </TouchableOpacity>

            {/* 로그아웃 확인 모달 */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Content maxWidth="350" borderWidth={0}>
                    <Center mt={10}>
                        <Text fontSize="xl">정말 로그아웃하시겠습니까?</Text>
                    </Center>
                    <Modal.Footer mt={10}>
                        <Button w={"45%"} backgroundColor="#B5D692" mr={3} onPress={handleLogout}>확인</Button>
                        <Button w={"45%"} variant="ghost" onPress={() => setIsModalOpen(false)}>취소</Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 50, // 버튼 높이를 조정
        width: 400, // 버튼 너비를 조정
        marginTop: 25,
    },
    iconContainer: {
        marginRight: 10, // 아이콘과 텍스트 사이 간격 조정
        alignItems: 'center', // 아이콘을 수직 방향으로 가운데 정렬
    },
    icon: {
        // 아이콘 스타일 설정
        marginLeft: 30,
        marginTop: 7,
        color:"gray"
    },
    text: {
        fontSize: 15,
        marginLeft: 80,
        marginTop: 11,
        color:"gray"
    }
});

export default LogoutButton;