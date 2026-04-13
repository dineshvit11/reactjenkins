import { Container, Typography, Box } from "@mui/material";

export default function About() {
  return (
    <Container maxWidth={false} disableGutters>
      
      {/* 🔥 Wrapper for spacing */}
      <Box sx={{ px: 4, py: 4 }}>
        
        <Typography variant="h4" mb={3} fontWeight="bold">
          About Us
        </Typography>

        <Typography variant="body1" paragraph>
          Welcome to our eCommerce platform, a modern digital marketplace built to provide customers with a seamless, efficient, and enjoyable shopping experience. Our journey began with a simple idea: to make high-quality products accessible to everyone while maintaining affordability and convenience. Today, we proudly serve a growing community of users who trust us for their everyday shopping needs.
        </Typography>

        <Typography variant="body1" paragraph>
          Our platform offers a wide range of products across multiple categories, including fashion, footwear, accessories, and lifestyle essentials. Each product is carefully selected to ensure quality, durability, and style. Whether you are looking for trendy clothing, comfortable shoes, or everyday essentials, we aim to provide options that suit every taste and budget.
        </Typography>

        <Typography variant="body1" paragraph>
          We believe that shopping should be simple and enjoyable. That is why our website is designed with a clean and user-friendly interface, making it easy for users to browse products, compare prices, and make purchases with just a few clicks. From responsive design to fast-loading pages, every aspect of our platform is optimized for performance and usability.
        </Typography>

        <Typography variant="body1" paragraph>
          Customer satisfaction is at the core of everything we do. We strive to provide excellent service by ensuring fast order processing, secure transactions, and reliable delivery. Our team continuously works to improve the platform by listening to customer feedback and implementing new features that enhance the overall shopping experience.
        </Typography>

        <Typography variant="body1" paragraph>
          Technology plays a crucial role in our operations. Our platform is built using modern web technologies that ensure scalability, security, and high performance. We use efficient data management, optimized APIs, and responsive design principles to deliver a smooth experience across devices, whether you are browsing from a desktop, tablet, or mobile phone.
        </Typography>

        <Typography variant="body1" paragraph>
          We are also committed to transparency and trust. All product information, including pricing, discounts, and availability, is clearly displayed to help customers make informed decisions. Our pricing strategy is designed to offer the best value, with regular discounts and special offers to make shopping even more rewarding.
        </Typography>

        <Typography variant="body1" paragraph>
          Our vision is to become a leading eCommerce platform that customers rely on for quality products and exceptional service. We aim to continuously expand our product range, improve logistics, and introduce innovative features that make online shopping more convenient and personalized.
        </Typography>

        <Typography variant="body1" paragraph>
          In addition to providing great products, we are focused on building long-term relationships with our customers. We understand that trust is earned through consistent quality and reliable service. That is why we are dedicated to maintaining high standards in every aspect of our business, from product selection to customer support.
        </Typography>

        <Typography variant="body1" paragraph>
          Our platform is not just about buying and selling products; it is about creating a complete shopping experience. From discovering new trends to enjoying exclusive deals, we want every visit to our website to be valuable and satisfying. We continuously innovate to ensure that our users always have access to the best features and services.
        </Typography>

        <Typography variant="body1" paragraph>
          Thank you for choosing our platform as your trusted online shopping destination. We are committed to delivering excellence, value, and convenience every day. As we grow, we look forward to serving you better and becoming a part of your everyday lifestyle.
        </Typography>

      </Box>
    </Container>
  );
}