import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const INT_URL = "https://images.unsplash.com/photo-1673191898695-8252d409d82c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"


    const HOT_URL = "https://images.unsplash.com/photo-1730723720863-2703bfd5b470?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGhvdCUyMHdlYXRoZXIlMjB3aXRoJTIwc3VufGVufDB8fDB8fHww";

    const COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const RAIN_URL = "https://images.unsplash.com/photo-1638253910847-b98cac8387c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
             <CardMedia
              sx={{ height: 140 }}
              image={
                info.humidity > 80 
                ? RAIN_URL 
                : info.temp > 15 
                ? HOT_URL 
                : COLD_URL
              }
              title="green iguana"
            />
           <CardContent>
             <Typography gutterBottom variant="h5" component="div">
               {info.city} {
                info.humidity > 80 
                ? <ThunderstormIcon /> 
                : info.temp > 15 
                ? <WbSunnyIcon />
                : <AcUnitIcon />
               }
             </Typography>
             <Typography variant="body2" color= "text.secondary" component={"span"}>
               <p>Temprature = {info.temp}&deg;C</p>
               <p>Humidity = {info.humidity}</p>
               <p>Min Temp = {info.tempMin}&deg;C</p>
               <p>Max Temp = {info.tempMax}&deg;C</p>
               <p>The Weather feels like {info.feelsLike}&deg;C</p>
               <p>The Weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
             </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    );
}