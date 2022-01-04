import Logo from '../assets/logo.png'
import styled from 'styled-components'

const AvatarCrop = () => {
    return (
        <Wrapper>
            <Image src={Logo} />
            <CropWrapper>
                <p>Crop</p>
                <p>Element</p>
                <Teste><SaveButton>Save</SaveButton></Teste>
            </CropWrapper>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    background: #F2F5F8;
    border-radius: 8px;
    width: 100%;
    padding: 32px;
    box-sizing: border-box;
    transition: height 0.2s ease;
`;
const Image = styled.img`
`;
const CropWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    margin-left: 32px;
`;
const Teste = styled.div`
    display: flex;
    justify-content: right;
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
