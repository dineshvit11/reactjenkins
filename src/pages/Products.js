import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Container,
  Box,
  TextField,
} from "@mui/material";
import { useState } from "react";
import products from "../data/products.json";

export default function Products() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const itemsPerPage = 12;

  // ✅ filter
  const filteredProducts = products.filter((item) =>
    `${item.title} ${item.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // ✅ pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      {/* Heading + Search */}
      <Box
        sx={{
          mt: 4,
          mb: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          All Products
        </Typography>

        <TextField
          placeholder="Search..."
          size="small"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          sx={{ width: 250 }}
        />
      </Box>

      {/* GRID */}
      <Grid
        container
        spacing={0}
        sx={{
          gap: "16px",
          justifyContent: "flex-start",
        }}
      >
        {currentProducts.map((item) => {
          const finalPrice =
            item.price -
            (item.price * item.discountPercentage) / 100;

          return (
            <Grid
              item
              key={item.id}
              sx={{
                width: "calc((100% - 80px) / 6)",
                display: "flex",
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  boxShadow: 2,
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.thumbnail || item.images?.[0]}
                  alt={item.title}
                  sx={{
                    height: 180,
                    objectFit: "cover",
                  }}
                />

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

                    <Typography variant="caption">
                      {item.category}
                    </Typography>

                    <Typography variant="body2">
                      ⭐ {item.rating}
                    </Typography>

                    <Typography mt={0.5} fontWeight="bold">
                      ₹{finalPrice.toFixed(0)}
                    </Typography>
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    size="small"
                    sx={{ mt: 1 }}
                  >
                    Add
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* 🔥 COMPACT PAGINATION */}
      <Box
        sx={{
          mt: 4,
          mb:2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            p: 1,
            borderRadius: 2,
            boxShadow: 2,
            backgroundColor: "#fff",
            width: "fit-content",
          }}
        >
          {/* Prev */}
          <Button
            size="small"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </Button>

          {/* Numbers */}
          {[...Array(totalPages)].map((_, i) => (
            <Button
              key={i}
              size="small"
              variant={page === i + 1 ? "contained" : "outlined"}
              onClick={() => setPage(i + 1)}
              sx={{
                minWidth: "32px",
                px: 1,
                borderRadius: "6px",
              }}
            >
              {i + 1}
            </Button>
          ))}

          {/* Next */}
          <Button
            size="small"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Container>
  );
}