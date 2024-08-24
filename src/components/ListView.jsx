import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material"; // or 'react-router-dom' if you use react-router
import MediaControlCard from "./Card";
import COLORS from "../constants/Colors";

// Utility function to format numbers with suffixes
const formatNumber = (num) => {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1) + 'B';
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + 'M';
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + 'K';
  } else {
    return num;
  }
};

export default function ListView({ data }) {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
      <Box sx={{ p: 2 }}>
        <MediaControlCard
          data={{ views: data.views, likes: data.likes }}
          viewStatus={true}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          p: 2,
          width: '100%',
        }}
      >
        <CardContent>
          <Typography component="div" variant="h5" color={COLORS.blue} sx={{ textAlign: 'left' }}>
            {data.title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ textAlign: 'left', color: 'black', display: 'flex', alignItems: 'center' }}
          >
            {data.subtitle}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ textAlign: 'left', color: 'black', display: 'flex', alignItems: 'center' }}
          >
            Views:
            <Typography
              variant="subtitle1"
              color="grey.700"
              component="span"
              sx={{ ml: 1 }} // margin-left for spacing
            >
              {formatNumber(data.Views)}
            </Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ textAlign: 'left', color: 'black', display: 'flex', alignItems: 'center' }}
          >
            Collections:
            <Typography
              variant="subtitle1"
              color="grey.700"
              component="span"
              sx={{ ml: 1 }} // margin-left for spacing
            >
              <Link href={data.collections[0].url} color="inherit" sx={{ mr: 1 }} target="_blank"    rel="noopener noreferrer">
                {data.collections[0].name}
              </Link>
              <Link href={data.collections[1].url} color="inherit" target="_blank"    rel="noopener noreferrer">
                {data.collections[1].name}
              </Link>
            </Typography>
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ textAlign: 'left', color: 'black' }}
          >
            LibriVox - Founded in 2005 - is a community of volunteers from all over the
            world who record public domain texts: poetry, short stories, whole
            books, even dramatic works, in many different languages. All LibriVox
            recordings are in the public domain in the USA and available as free
            downloads on the internet. If you are not in the USA, please check
            your country's copyright law before downloading. Please visit the
            LibriVox website for more information.
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
