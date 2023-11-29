import React from "react";
import { Card } from "react-bootstrap";
import { data } from "../data/newswireData";

const Newswire = () => {
  return (
    <>
      <div className="h2 text-white text-align-center mx-6">Newswire</div>
      <div className="d-flex w-100 flex-wrap justify-content-center align-items-center">
        {data?.map((item) => (
          <Card
            style={{
              width: "28%",
              backgroundColor: "black",
              margin: "1%",
              borderRadius: "10px",
            }}
          >
            <Card.Img
              variant="top"
              style={{ borderRadius: "10px" }}
              src={item.pic}
            />
            <Card.Body>
              <div className="d-flex text-white justify-content-between">
                <Card.Title style={{ fontSize: "22px" }}>
                  {item.title}
                </Card.Title>
                <Card.Subtitle className="my-1">
                  {item.release_date}
                </Card.Subtitle>
              </div>
              <Card.Text className="h3 text-white my-5">
                {item.description}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
        <br />
      </div>
      <div
        style={{
          textAlign: "center",
          textDecoration: "underline",
          color: "white",
          cursor: "pointer",
          textDecorationThickness: "10%",
          textDecorationColor: "yellow",
        }}
        className="h5"
      >
        View More
      </div>
    </>
  );
};

export default Newswire;
