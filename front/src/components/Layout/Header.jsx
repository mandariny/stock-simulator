import React, { useState } from 'react';
import { Input } from '@material-ui/core'
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import classes from "./Header.module.css";

const Header = (props) => {

  const [user, setUser] = useState('user');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <header className={classes.header}>
      <h1>STOCK SIMULATOR</h1> 
      {user ? (
        <Button className={classes.button} variant="outline-light" onClick={props.onOpen}>로그인</Button>
        ) : (
          <Button className={classes.button} variant="outline-light" onClick={() => setUser(null)}>로그아웃</Button>
      )}
      <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>STOCK SIMULATOR</Modal.Title>
      </Modal.Header>
      <Modal.Body className={classes.modal__body}>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="로그인" >
          <Input
            className={classes.modal__body__tab}
            placeholder="이메일"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br/>

          <Input 
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br/><br/>

          <Button type='submit' variant="outline-dark" onClick={props.onClose}>
            로그인
          </Button>
        </Tab>

        <Tab eventKey="profile" title="회원가입">
          <div>
            <Input
              placeholder="닉네임"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            /><br/>
            <Input
              placeholder="이메일"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br/>
            <Input 
              placeholder="비밀번호"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /><br/><br/>
          </div>
          <Button type='submit' variant="outline-dark" onClick={props.onClose}>
            회원가입
          </Button>
        </Tab>
        <Modal.Footer>
          <Button type='submit' variant="outline-dark" onClick={props.onClose}>
            로그인
          </Button>
        </Modal.Footer>
      </Tabs>
      </Modal.Body>
    </Modal>
    </header>
  )
}


export default Header;
