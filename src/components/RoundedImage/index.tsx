import { Image } from './styles'

type Props = {
    src: string
    hasError?: boolean
}

const RoundedImage = ({ src, hasError }: Props) => {
    return (
        <Image hasError={hasError} src={src}/>
    )
}

export default RoundedImage
