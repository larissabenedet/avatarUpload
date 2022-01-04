import Logo from '../assets/logo.png'
import styled from 'styled-components'

const AvatarCrop = () => {
    return (
        <Wrapper>
            <Image src={Logo} />
            <CropWrapper>
                <p>Crop</p>
                <p>Element</p>
                <SaveButton>Save</SaveButton>
            </CropWrapper>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
`;
const Image = styled.img`
`;
const CropWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 32px;
`;
const SaveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--dark);
    border-radius: 16px;
    color: #FFF;
    border: none;
    font-size: 0.875rem;
    line-height: 1.563rem;
    cursor: pointer;
    padding: 3px 40px;
    box-sizing: border-box;
    margin-top: 30px;
`;

export default AvatarCrop
