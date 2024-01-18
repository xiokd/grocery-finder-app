import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  CardMedia,
} from "@mui/material";

import placeholder from "../images/placeholder/placeholderstore.png";

function StoreCard() {
  return (
    <div class="store-card">
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={placeholder}
          alt="Placeholder Store"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
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
      </Card>
    </div>
  );
}

export default StoreCard;
