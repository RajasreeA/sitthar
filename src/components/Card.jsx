import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardImage from '../assets/images/CardImage.png';
import COLORS from '../constants/Colors.jsx';

export default function MediaControlCard({ data }) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch(error => {
          console.error('Audio play failed:', error);
        });
        setIsPlaying(true);
      }
    }
  };

  React.useEffect(() => {
    // Log if audioRef is null or has issues
    if (audioRef.current) {
      console.log('Audio element is ready.');
    } else {
      console.error('Audio element is not available.');
    }
  }, [audioRef]);

  return (
    <Card sx={{ p: 1, border: "1px solid lightgrey" }}>
      <CardMedia
        component="img"
        sx={{ width: '100%' }}
        image={CardImage}
        alt="அழுகணிச் சித்தர் பாடல்"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {(data.title || data.subtitle) && (
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h6" color={COLORS.blue}>
              {data.title}
            </Typography>
            <Typography variant="subtitle1" color="text.primary" component="div">
              {data.subtitle}
            </Typography>
          </CardContent>
        )}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <IconButton aria-label="views">
              <RemoveRedEyeIcon sx={{ color: 'black' }} />
            </IconButton>
            <Typography variant="caption" color="text.primary">
              {data.views}
            </Typography>
          </Box>
          <IconButton
            aria-label={isPlaying ? "pause" : "play"}
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <PauseCircleIcon sx={{ height: 38, width: 38, color: 'black' }} />
            ) : (
              <PlayCircleIcon sx={{ height: 38, width: 38, color: 'black' }} />
            )}
          </IconButton>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <IconButton aria-label="favorites">
              <FavoriteIcon sx={{ color: 'black' }} />
            </IconButton>
            <Typography variant="caption" color="text.primary">
              {data.likes}
            </Typography>
          </Box>
        </Box>
      </Box>
      <audio ref={audioRef} src="/assets/audio/audio.mp3" preload="auto" />
    </Card>
  );
}
