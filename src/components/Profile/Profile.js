import { useContext } from "react";
import { Container, Card, ListGroup } from "react-bootstrap";
import AppContext from "./../../context/AppContext";
const Profile = () => {
  const { user } = useContext(AppContext);

  return (
    <section className="pt-4">
      <Container>
        <h1>Profile</h1>
        <Card className="mt-4">
          <Card.Header>User Profile</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Name: {user.name}</ListGroup.Item>
            <ListGroup.Item>Email: {user.email}</ListGroup.Item>
            <ListGroup.Item>City: {user.city}</ListGroup.Item>
            <ListGroup.Item>Country: {user.Country}</ListGroup.Item>
            <ListGroup.Item>Age: {user.Age}</ListGroup.Item>
            <ListGroup.Item>Designation: {user.designation}</ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </section>
  );
};

export default Profile;
