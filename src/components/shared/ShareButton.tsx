
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from 'react-share'
import { Flex } from '@chakra-ui/react'

const base_Url="http://localhost:5173"

interface ShareButtonProps{
    quote:string,
    slug:string
}

const ShareButton = ({quote,slug}:ShareButtonProps) => {
    return (
      <Flex gap={2} px={8} justifyContent={"flex-end"}> 
        <FacebookShareButton url={`${base_Url}/blogs/${slug}`}  title={quote}>
            <FacebookIcon size={32} round />
        </FacebookShareButton>

        < EmailShareButton url={`${base_Url}/blogs/${slug}`} title={quote}>
            <EmailIcon size={32} round />
        </ EmailShareButton>

        <TwitterShareButton url={`${base_Url}/blogs/${slug}`} title={quote}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      </Flex>

        
    )
}

export default ShareButton