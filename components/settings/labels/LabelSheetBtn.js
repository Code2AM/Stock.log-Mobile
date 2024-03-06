import { Actionsheet, Box, Button, Text, useDisclose } from "native-base";

function LabelSheetBtn({ value }) {
    const {
      isOpen,
      onOpen,
      onClose
    } = useDisclose();
    return <>
        <Button onPress={onOpen} shadow={2}>
            {value}
        </Button>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Box w="100%" h={60} px={4} justifyContent="center">
              <Text fontSize="16" color="gray.500" _dark={{
              color: "gray.300"
            }}>
                Albums
              </Text>
            </Box>
            <Actionsheet.Item>{1}</Actionsheet.Item>
            <Actionsheet.Item>삭제</Actionsheet.Item>
            <Actionsheet.Item onPress={onClose}>취소</Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </>;
  }
export default LabelSheetBtn