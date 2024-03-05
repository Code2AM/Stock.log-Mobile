import { Button } from "native-base"

const SettingListBtn = ( { title, onPress } ) => {
    
    return(
        <Button variant="ghost" onPress={onPress}>
            {title}
        </Button>
    )
    
}

export default SettingListBtn;