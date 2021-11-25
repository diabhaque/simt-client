import React, { useState } from "react";
import { Card, message, Button, Spin, Input } from "antd";
import PhotoUpload from "../utils/PhotoUpload";
import axios from "axios";

const { TextArea } = Input;

const ShowAndTell = () => {
  const [image, setImage] = useState(undefined);
  const [text, setText] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(undefined);

  const generateCaption = () => {
    if (image && text) {
      setLoading(true);
      setFetched(undefined);

      const data = {
        text,
        image,
      };

      axios
        .post("http://localhost:5000/translate/cnmt", data, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((res) => {
          setLoading(false);
          console.log(res)
          setFetched(res.data.result);
        })
        .catch((err) => {
          message.error("There's been an error");
          console.log(err)
          setLoading(false);
        });
    } else {
      message.error("Please upload both an image and a text.");
    }
  };
  return (
    <>
      <Card
        title="Try Uploading An Image"
        style={{
          width: "40%",
          minWidth: 400,
          border: "1px solid black",
          borderBottom: "0px",
        }}
        headStyle={{ display: "flex", justifyContent: "center" }}
        bodyStyle={{ padding: "0px" }}
        cover={<PhotoUpload image={image} setImage={setImage} />}
      ></Card>
      <br />
      <br />

      <Card
        title="Type in the text to Translate"
        style={{
          width: "40%",
          minWidth: 400,
          border: "1px solid black",
          borderBottom: "0px",
        }}
        headStyle={{ display: "flex", justifyContent: "center" }}
        bodyStyle={{ padding: "0px" }}
        cover={
          <TextArea
            onChange={(e) => setText(e.target.value)}
            style={{
              border: "1px solid black",
            }}
          />
        }
      ></Card>

      <br />
      {loading ? (
        <Spin />
      ) : (
        <Button onClick={generateCaption} style={{ border: "1px solid black" }}>
          Generate Caption!
        </Button>
      )}
      <br />
      <br />
      {fetched ? (
        <>
          <Card
            style={{
              width: "40%",
              minWidth: 400,
              display: "flex",
              justifyContent: "center",
              border: "1px solid black",
            }}
          >
            {fetched}
          </Card>
          <br />
          <br />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ShowAndTell;
