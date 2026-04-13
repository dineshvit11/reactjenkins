import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Container,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import products from "../data/products.json";

export default function Home() {
  const first10 = products.slice(0, 12); // 🔥 better fill
  const navigate = useNavigate();

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1400px", // ✅ same as products
        margin: "0 auto",
      }}
    >
      {/* Intro */}
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Our Online Store
        </Typography>

        <Typography variant="body1">
          Explore our latest products with best deals and offers.
        </Typography>
      </Box>

      {/* ✅ PERFECT GRID */}
      <Grid
        container
        spacing={0}
        sx={{
          gap: "16px", // ✅ clean equal gap
        }}
      >
        {first10.map((item) => {
          const finalPrice =
            item.price -
            (item.price * item.discountPercentage) / 100;

          return (
            <Grid
              item
              key={item.id}
              sx={{
                width: "calc((100% - 80px) / 6)", // ✅ exact 6 columns
                display: "flex",
              }}
            >
              <Card
                onClick={() => navigate(`/product/${item.id}`)}
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  boxShadow: 2,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 4,
                  },
                }}
              >
                {/* Image */}
                <CardMedia
                  component="img"
                  image={item.thumbnail || item.images?.[0]}
                  alt={item.title}
                  sx={{
                    height: 180,
                    objectFit: "cover",
                  }}
                />

                {/* Content */}
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: 1.5,
                  }}
                >
                  <Box>
                    <Typography
                      variant="subtitle2"
                      fontWeight="bold"
                      sx={{ minHeight: 40 }}
                    >
                      {item.title}
                    </Typography>

                    <Typography variant="caption" color="text.secondary">
                      {item.category}
                    </Typography>

                    <Typography variant="body2">
                      ⭐ {item.rating}
                    </Typography>

                    <Typography mt={0.5} fontWeight="bold">
                      ₹{finalPrice.toFixed(0)}
                      <span
                        style={{
                          textDecoration: "line-through",
                          marginLeft: 6,
                          color: "gray",
                          fontSize: "12px",
                        }}
                      >
                        ₹{item.price}
                      </span>
                    </Typography>

                    <Typography color="green" variant="caption">
                      {item.discountPercentage}% OFF
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    size="small"
                    sx={{ mt: 1 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      alert("Added to cart");
                    }}
                  >
                    Add
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}