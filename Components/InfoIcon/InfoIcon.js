import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Image } from "react-native";
import i from "./infoIcon.svg";
import css from "./InfoIcon.module.css";

function InfoIcon() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Image
        source={i}
        style={{ width: 50, height: 50, marginTop: -50, marginLeft: 130 }}
        onClick={() => setShow(true)}
      />

      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="lgModal">Welcome to AniMate!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ani is your own virtual pet and companion designed to take care of
            you. With your Ani you can do daily activities together including
            eating meals, wash and exercise so you will never feel lonely again.
            As a caring empathic companion, Ani will also ask you about your
            overall feeling and happiness each day. You eat, so does Ani. You
            happy, so is Ani!
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default InfoIcon;
