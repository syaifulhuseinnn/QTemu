import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import HomePage from "./components/pages/HomePage/HomePage";

export default function App() {
  return (
    <Container className="p-0" fluid>
      <HomePage />
    </Container>
  );
}
