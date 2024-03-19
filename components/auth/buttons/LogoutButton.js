import { Button, Center, Link, Modal, Text, useToast } from "native-base";
import { useState } from "react";
import { logout } from "../../../api/auth/LogoutAPI";
import { useNavigation } from "@react-navigation/native";

const LogoutButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 변수

    const navigation = useNavigation();
    const toast = useToast();

    // 로그아웃 함수
    const handleLogout = async () => {
        await logout(navigation, toast);

        setIsModalOpen(false);
    };

    return (
        <>
            {/* 로그아웃 버튼 */}
            <Button variant={Link} onPress={() => setIsModalOpen(true)} w={"100%"} h={"20%"} size={"lg"}>로그아웃</Button>

            {/* 로그아웃 확인 모달 */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Content maxWidth="350" borderWidth={0}>
                    <Center mt={5}>
                        <Text fontSize="xl" fontWeight="bold">로그아웃</Text>
                    </Center>
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

export default LogoutButton;