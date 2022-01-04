import { ReactComponent as IconMedia } from '../assets/media.svg'
import styled from 'styled-components'

type Props = {
    type: 'default' | 'error'
}

const UploadMessage = ({ type }: Props) => {

    const showMessage = (typeMessage: string) => {
        if (typeMessage === 'default') {
            return (<>
                <TitleWrapper>
                    <IconMedia />
                    <Title>Organization Logo</Title>
                </TitleWrapper>
                <p>Drop the image here or click to browse.</p>
            </>)
        } else {
            return (<>
                <ErrorMessage>Sorry, the upload failed.</ErrorMessage>
                <TryMessage>Try again</TryMessage>
            </>)
        }
    }
    return showMessage(type)
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
const ErrorMessage = styled.p`
    font-size: 1rem;
    line-height: 1.813rem;
    font-weight: normal;
    color: var(--red);
    letter-spacing: -0.02em;
`;
const TryMessage = styled.p`
    font-size: 1rem;
    line-height: 1.813rem;
    font-weight: 500;
    color: var(--dark);
    text-decoration: underline;
    letter-spacing: -0.02em;
`;

export default UploadMessage
