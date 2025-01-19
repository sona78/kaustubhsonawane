import { Card, CardImg, CardBody, CardTitle, Col, Row, CardSubtitle } from "shards-react";

function numberToDate(number) {
  let date = new Date(number.toString().replace(/(\d{2})(?=\d)/g, "$1/"));
  return date.toDateString();
}

const Display = (props) => {
  return (
    <>
      <Row style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {props.images.map((item) => (
          <Col key={item} xs={12} sm={6} md={4}>
            <Card
              style={{
                minHeight: "300px",
                minWidth: "250px",
                maxWidth: "90vw",
                margin: "10px",
              }}
              onClick={() => {
                window.location.href = `/blog/post/${item.replace(/\.(png|jpe?g|svg)$/, "")}`;
              }}>
              <CardImg
                src={require("../public/blog/covers/" + item)}
                top
                style={{ objectFit: "cover", maxHeight: "200px" }}
              />
              <CardBody>
                <CardTitle style={{ marginBottom: "20px" }}>
                  {[
                    ...item
                      .replace(/\.(png|jpe?g|svg)$/, "")
                      .split(" ")
                      .slice(1),
                  ]}
                </CardTitle>
                <CardSubtitle>
                  {numberToDate(item.replace(/\.(png|jpe?g|svg)$/, "").split(" ")[0])}
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Display;
