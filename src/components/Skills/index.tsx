import React from "react";
import "./style.css";

import { List } from "antd";
import { Card } from "antd";
import { Rate } from "antd";

import c from "../../assets/c.png";
import django from "../../assets/django.jpg";
import express from "../../assets/express.png";
import flask from "../../assets/flask.png";
import mongo from "../../assets/mongo.png";
import react from "../../assets/react.svg";
import python from "../../assets/python.png";
import node from "../../assets/node.png";

export const Skills: React.FC = () => {
  const data = [
    {
      title: "C/C++",
      desp: (
        <Rate
          allowHalf
          disabled
          defaultValue={4.5}
          style={{ color: "orange" }}
        />
      ),
      avatar: c,
    },
    {
      title: "Python",
      desp: <Rate disabled defaultValue={4} style={{ color: "orange" }} />,
      avatar: python,
    },
    {
      title: "Flask",
      desp: (
        <Rate
          allowHalf
          disabled
          defaultValue={3.5}
          style={{ color: "orange" }}
        />
      ),
      avatar: flask,
    },
    {
      title: "Django",
      desp: (
        <Rate
          allowHalf
          disabled
          defaultValue={3.5}
          style={{ color: "orange" }}
        />
      ),
      avatar: django,
    },
    {
      title: "MongoDB",
      desp: <Rate disabled defaultValue={3} style={{ color: "orange" }} />,
      avatar: mongo,
    },
    {
      title: "ExpressJs",
      desp: <Rate disabled defaultValue={3} style={{ color: "orange" }} />,
      avatar: express,
    },
    {
      title: "NodeJs",
      desp: <Rate disabled defaultValue={3} style={{ color: "orange" }} />,
      avatar: node,
    },
    {
      title: "ReactJs",
      desp: <Rate disabled defaultValue={4} style={{ color: "orange" }} />,
      avatar: react,
    },
  ];

  return (
    <div>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card>
            <img src={item.avatar} alt="key"/>{item.desp} 
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
