import { Container } from "shards-react";

const Footer = () => {
  return (
    <Container className="text-center">
      <p>© {new Date().getFullYear()} Kaustubh Sonawane</p>
    </Container>
  );
};

export default Footer;
