import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infobox.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}){
  const rainUrl="https://images.unsplash.com/photo-1522359767-31c3980dde91?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const hotUrl="https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const coldUrl="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const initUrl="https://images.unsplash.com/photo-1569142916960-885f868d6123?q=80&w=1838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  
    return(
     
        <div className="infobox1">
         <div>
         <div className="infobox">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
         

        sx={{ height: 140 }}
        image={info.humidity> 80 ? rainUrl:info.temp>20?hotUrl:coldUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity> 80 ? <ThunderstormIcon/>:info.temp>20?<WbSunnyIcon/>:<AcUnitIcon/>}
        
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>City :{info.city}</p>
          <p>feelsLike :{info.feelsLike}&#8451;</p>
          <p>TempMax :{info.temp_max}&#8451;</p>
          <p>TempMin :{info.temp_min}&#8451;</p>
          <p>Humidity:{info.humidity}</p>
          <p> The Weather outside is:  &nbsp;{info.weather} and temperature  feelsLike :{info.feelsLike}&#8451;</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    </div>
        </div>
    
)};