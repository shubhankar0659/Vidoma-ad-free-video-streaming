import {Stack,Box} from '@mui/material';
import {VideoCard,ChannelCard} from './';


const Videos = ({videos,direction}) => {
  if(!videos?.length) return 'Loading....';
  return (
    <Stack direction={direction || "row" } flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item,idx) => ( //if its a video then display the video else display channel
        <Box key={idx}>
        {item.id.videoId && <VideoCard video ={item}/>} 
        {item.id.channelId && <ChannelCard channelDetail ={item}/>}
      </Box>
      ))}
    </Stack>
  )
}

export default Videos