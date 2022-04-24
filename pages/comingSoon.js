import {useState} from "react"
import tw from "tailwind-styled-components"
import Link from 'next/link'


const Search = () => {

    const [pickup, setPickup] = useState("");
    const [dropoff, setDropoff] = useState("");

    return (
    <Wrapper>
        <ButtonContainer>
            <Link href={"/"} passHref>
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
            </Link>
        </ButtonContainer>

        
            <ConfirmButtonContainer>
                COMING SOON!
            </ConfirmButtonContainer>
    
    </Wrapper>
)
}


export default Search

const Wrapper = tw.div`
bg-gray-200 h-screen
`
const ButtonContainer = tw.div`
bg-white px-4
`

const BackButton = tw.img`
h-12 cursor-pointer
`

const ConfirmButtonContainer = tw.div`
bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl
`