import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  CardMedia,
  Checkbox,
} from "@mui/material";

import placeholder from "../images/placeholder/placeholderstore.png";

function StoreCard() {
  return (
    <div className="store-card">
      <Card sx={{ display: "flex", alignItems: "center" }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={placeholder}
          alt="Placeholder Store"
        />
        <Box sx={{ display: "flex", flexDirection: "column", width: "20vw" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6">
              Placeholder Store
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="div"
            >
              Brief description about the store
            </Typography>
          </CardContent>
        </Box>
        <Box sx={{width: "10vw"}} />
        <Box height={50} width={50}>
          <Checkbox/>
        </Box>
        <Box sx={{width: "1vw"}} />
      </Card>
    </div>
  );
}

export default StoreCard;
