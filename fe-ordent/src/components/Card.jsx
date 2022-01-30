import { Button, Card } from "react-bootstrap";
import "../App.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

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
                <Card.Text className="card-text-css">{e.summary}</Card.Text>
                <div
                  style={{
                    display: "inline-flex",
                    flexWrap: "wrap",
                    width: "90%",
                    height: "16px",
                  }}
                >
                  <div style={{ width: "50%" }}>
                    <p
                      style={{
                        color: "#0d81ed",
                      }}
                    >
                      Sponsored Ads
                    </p>
                  </div>
                  <div
                    style={{
                      margin: "auto",
                      width: "50%",
                      justifyContent: "space-evenly",
                      height: "16px",
                    }}
                  >
                    <FavoriteBorderOutlinedIcon className="icons-css" />
                    <LocalOfferOutlinedIcon className="icons-css" />
                    <ShareOutlinedIcon className="icons-css" />
                  </div>
                </div>
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
                <Card.Text className="card-text-css">{e.summary}</Card.Text>
                <div
                  style={{
                    display: "inline-flex",
                    flexWrap: "wrap",
                    width: "90%",
                    height: "16px",
                  }}
                >
                  <div style={{ width: "50%" }}>
                    <p
                      style={{
                        color: "#0d81ed",
                      }}
                    ></p>
                  </div>
                  <div
                    style={{
                      margin: "auto",
                      width: "50%",
                      justifyContent: "space-evenly",
                      height: "16px",
                    }}
                  >
                    <FavoriteBorderOutlinedIcon className="icons-css" />
                    <LocalOfferOutlinedIcon className="icons-css" />
                    <ShareOutlinedIcon className="icons-css" />
                  </div>
                </div>
              </Card.Body>
            </Card>
          );
        }
      })}
    </div>
  );
};
