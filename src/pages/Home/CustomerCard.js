import './CustomerCard.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

const CustomerCard = ({ rating, name, review, avatar, food }) => {
  return (
    <Card sx={{ borderRadius: '8pt' }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={avatar}/>
        }
        sx={{fontFamily: 'Markazi Text'}}
        title={name}
        subheader={<Rating value={rating} readOnly />}
      />
      <CardMedia
        component="img"
        height="194"
        image={food}
        alt="Paella dish"
        sx={{ borderRadius: 0}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{fontFamily: 'Karla'}}>
          {review}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomerCard;