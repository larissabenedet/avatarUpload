import { ReactComponent as IconMedia } from '../assets/media.svg'
import styled from 'styled-components'
import { useAvatarContext } from '../contexts/AvatarContext'

const UploadMessage = () => {
    const { croppedFile } = useAvatarContext()
    return (
        <>
            {croppedFile &&
                <ImageWrapper>
                    <Image src={croppedFile} />
                </ImageWrapper>
            }
            <TextContainer>
                <TitleWrapper>
                    <IconMedia />
                    <Title>Organization Logo</Title>
                </TitleWrapper>
                <p>Drop the image here or click to browse.</p>
            </TextContainer>
        </>
    )
}

const TitleWrapper = styled.div`
    display: flex;
    align-items: center;

    & svg {
        display: flex;
        align-items: center;
    }
`;
const Title = styled.h1`
    font-size: 0.875rem;
    line-height: 1.563rem;
    font-weight: 500;
    margin-left: 12px;
    color: var(--gray06);
`;
const ImageWrapper = styled.div`
    max-width: 114px;
    margin-right: 32px;

    @media (max-width: 768px) {
        margin-bottom: 16px;
    }
`;
const Image = styled.img`
    max-width: 100%;
    border-radius: 57px;
`;
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default UploadMessage
