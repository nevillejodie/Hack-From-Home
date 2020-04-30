import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import i from "../../../Hack-From-Home/SVGs/infoIcon.svg";
import css from "./InfoIcon.module.css";

function InfoIcon() {
  const [show, setShow] = useState(false);
  const img = <img src={i} alt="more info" className={css.infoBtn}></img>;

  return (
    <>
      <Button onClick={() => setShow(true)}>{img}</Button>
      <img
        src={i}
        alt="more info"
        className={css.infoBtn}
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
