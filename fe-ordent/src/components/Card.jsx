import { Button, Card } from "react-bootstrap";
import "../App.css";
export const CardComponent = ({ data }) => {
  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
      else return true;
    }
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((e, index) => {
        if (isPrime(index + 1)) {
          return (
            <Card
              style={{
                width: "420px",
                height: "479px",
                margin: "30px 29px",
                background: "#FFFFFF",
                boxShadow: "0px 8px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "8px",
                justifyContent: "center",
              }}
            >
              <Card.Img className="card-img" src={e.cover} />
              <Card.Body>
                <Card.Title className="card-title">{e.title}</Card.Title>
                <Card.Text className="card-text">{e.summary}</Card.Text>
                <Card.Text
                  style={{
                    color: "#0d81ed",
                    fontWeight: "bold",
                    fontFamily: "DM Sans",
                    marginLeft: "0",
                  }}
                >
                  Sponsored Ads
                </Card.Text>
              </Card.Body>
            </Card>
          );
        } else {
          return (
            <Card
              style={{
                width: "420px",
                height: "479px",
                margin: "30px 29px",
                background: "#FFFFFF",
                boxShadow: "0px 8px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "8px",
                justifyContent: "center",
              }}
            >
              <Card.Img className="card-img" src={e.cover} />
              <Card.Body>
                <Card.Title className="card-title">{e.title}</Card.Title>
                <Card.Text className="card-text">{e.summary}</Card.Text>
              </Card.Body>
            </Card>
          );
        }
      })}
    </div>
  );
};
