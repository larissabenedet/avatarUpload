import { ReactComponent as IconMedia } from '../assets/media.svg'
import styled from 'styled-components'

const UploadMessage = () => {
    return (
        <>
            <TitleWrapper>
                <IconMedia />
                <Title>Organization Logo</Title>
            </TitleWrapper>
            <p>Drop the image here or click to browse.</p>
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

export default UploadMessage
