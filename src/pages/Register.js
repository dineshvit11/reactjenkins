import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
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

    if (!form.name) newErrors.name = "Name is required";

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

    alert("Register Successful ✅");
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
    Create Your Account
  </Typography>

  <Typography variant="body1" paragraph>
    Join our platform to explore a wide range of high-quality products and enjoy a smooth, hassle-free shopping experience. From trending items to daily essentials, everything you need is just a click away.
  </Typography>

  <Typography variant="body1" paragraph>
    Register now to unlock exclusive deals, faster checkout, and personalized recommendations tailored to your interests. Your account helps you manage orders, track deliveries, and save your favorite products easily.
  </Typography>

  <Typography variant="body1" paragraph>
    We ensure top-notch product quality and reliable service so you can shop with confidence. Thousands of users trust our platform for genuine products and best prices.
  </Typography>

  {/* 🔥 Features */}
  <Typography variant="body1" sx={{ lineHeight: 2 }}>
    ✔ Easy & Quick Signup <br />
    ✔ 100% Secure Platform <br />
    ✔ Fast & Smooth Checkout <br />
    ✔ Trusted by Thousands <br />
    ✔ Premium Product Quality
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
              Register
            </Typography>

            {/* ✅ FORM CONNECT */}
            <Box component="form" onSubmit={handleSubmit}>
              
              <TextField
                fullWidth
                label="Name"
                name="name"
                margin="normal"
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />

              <TextField
                fullWidth
                label="Email"
                name="email"
                margin="normal"
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />

              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                margin="normal"
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 2, py: 1.2 }}
              >
                Register
              </Button>

            </Box>
          </Box>
        </Grid>

      </Grid>
    </Container>
  );
}