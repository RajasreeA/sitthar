import * as React from 'react';
import { useTheme } from '@mui/material/styles';
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
  const theme = useTheme();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

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
              <RemoveRedEyeIcon color="action" />
            </IconButton>
            <Typography variant="caption" color="text.secondary">
              {data.views}
            </Typography>
          </Box>
          <IconButton
            aria-label={isPlaying ? "pause" : "play"}
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <PauseCircleIcon sx={{ height: 38, width: 38 }} />
            ) : (
              <PlayCircleIcon sx={{ height: 38, width: 38 }} />
            )}
          </IconButton>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <IconButton aria-label="favorites">
              <FavoriteIcon />
            </IconButton>
            <Typography variant="caption" color="text.secondary">
              {data.likes}
            </Typography>
          </Box>
        </Box>
      </Box>
      <audio ref={audioRef} src="../assets/audio/audio.mp3" />
    </Card>
  );
}
