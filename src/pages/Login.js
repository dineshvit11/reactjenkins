import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email";

    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6)
      newErrors.password = "Min 6 characters";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    alert("Login Successful ✅");
  };

  return (
    <Container maxWidth={false} disableGutters>
      <Grid
        container
        sx={{
          minHeight: "80vh",
          alignItems: "flex-start",
          pt: 5,
          px: 3,
        }}
        spacing={6}
      >

        {/* LEFT TEXT */}
        <Grid item xs={12} md={6}>
      <Box sx={{ maxWidth: 800 }}>
  <Typography variant="h4" mb={2} fontWeight="bold">
    Login your account
  </Typography>

  <Typography variant="body1" paragraph>
    Join our platform to explore a wide range of products and enjoy a seamless shopping experience. Discover top-quality items, exclusive deals, and a user-friendly interface designed to make your journey smooth and enjoyable.
  </Typography>

  <Typography variant="body1" paragraph>
    With your account, you can track orders, save your favorite products, and receive personalized recommendations tailored to your preferences. Our system ensures a fast and secure checkout process every time.
  </Typography>

  <Typography variant="body1" paragraph>
    We are committed to providing excellent customer service and reliable delivery. Sign in now to stay updated with the latest offers, new arrivals, and special discounts crafted just for you.
  </Typography>

  {/* ✅ NEW PARA 1 */}
  <Typography variant="body1" paragraph>
    Our products are carefully selected to ensure the highest quality and value for our customers. From everyday essentials to premium collections, we guarantee durability, style, and satisfaction in every purchase.
  </Typography>

  {/* ✅ NEW PARA 2 */}
  <Typography variant="body1" paragraph>
    Thousands of customers trust our platform for authentic products and unbeatable prices. Experience the difference with our best-in-class offerings and make every purchase worthwhile.
  </Typography>
</Box>
        </Grid>

        {/* RIGHT FORM */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxWidth: 400,
              mx: "auto",
              p: 4,
              borderRadius: 3,
              boxShadow: 3,
              backgroundColor: "#fff",
            }}
          >
            <Typography variant="h5" mb={2} textAlign="center">
              Login
            </Typography>

            {/* ✅ FORM ADD */}
            <Box component="form" onSubmit={handleSubmit}>
              
              <TextField
                fullWidth
                label="Email"
                name="email"                // ✅ important
                margin="normal"
                onChange={handleChange}    // ✅ important
                error={!!errors.email}
                helperText={errors.email}
              />

              <TextField
                fullWidth
                label="Password"
                name="password"            // ✅ important
                type="password"
                margin="normal"
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />

              <Button
                type="submit"              // ✅ important
                variant="contained"
                fullWidth
                sx={{ mt: 2, py: 1.2 }}
              >
                Login
              </Button>

            </Box>
          </Box>
        </Grid>

      </Grid>
    </Container>
  );
}