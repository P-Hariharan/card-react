import React from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <div className="home">
      <Card className="card" style={{ width: "15rem" }}>
        <Card.Img variant="top" src="src/components/home/photo/paris.jpg" />
        <Card.Body>
          <Card.Title>PARIS</Card.Title>
          <Card.Text>
            Paris enchants with the Eiffel Tower, Louvre Museum's art,
            Notre-Dame Cathedral, Seine River's charm, and the delightful
            Montmartre district.
          </Card.Text>
          <Button variant="primary">View Package</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src="src/components/home/photo/london.jpg" />
        <Card.Body>
          <Card.Title>LONDON</Card.Title>
          <Card.Text>
            Buckingham Palace, Tower of London, Thames River, British Museum,
            London Eye's view. Embrace Soho's vibe, Covent Garden's charm, Tower
            Bridge's allure.
          </Card.Text>
          <Button variant="primary">View Package</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src="src/components/home/photo/america.jpg" />
        <Card.Body>
          <Card.Title>AMERICA</Card.Title>
          <Card.Text>
            America dazzles with NYC's energy, Grand Canyon's grandeur, Statue
            of Liberty, Golden Gate Bridge, and Yellowstone's natural wonders.
          </Card.Text>
          <Button variant="primary">View Package</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "15rem" }}>
        <Card.Img variant="top" src="src/components/home/photo/dubai.jpg" />
        <Card.Body>
          <Card.Title>DUBAI</Card.Title>
          <Card.Text>
            Dubai beckons with the Burj Khalifa's height, Palm Jumeirah's
            luxury, desert safaris, bustling souks, and futuristic entertainment
            and architecture.
          </Card.Text>
          <Button variant="primary">View Package</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
