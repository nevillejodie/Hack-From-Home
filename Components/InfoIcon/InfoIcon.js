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
            Ani is your very own virtual pet and companion designed to take care
            of you. With Ani, you can do daily activities including eating
            meals, taking a wash, sleeping and doing exercise - and with Ani's
            company, you will never feel lonely again. As a caring empathic
            companion, Ani will also ask you about your overall feelings and
            happiness each day.
            <div>
              <strong>
                If you eat, so does Ani. If you sleep, so does Ani. And if you
                are happy, so is Ani!
              </strong>
            </div>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default InfoIcon;
