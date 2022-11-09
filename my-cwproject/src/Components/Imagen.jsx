import { Flex, Spacer,Image } from '@chakra-ui/react'
import MoreTravels from './MoreTravels'
import Options from './Options'
function Imagen(){
return (
    <div>
        <Flex>
            <Image src='https://www.orbitz.com/_dms/header/logo.svg?locale=en_US&siteid=70201&2'/>
            
            <MoreTravels />
            <Spacer/>
            <Options/>
        </Flex>
    </div>
)
}
export default Imagen