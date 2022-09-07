import React from 'react'
//import './style/VeganYear.css'
import { Card, Grid, Row, Text } from "@nextui-org/react";

export default function VeganYear() {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
    },
    {
      title: "Advocato",
      img: "/images/fruit-5.jpeg",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
    },
    {
      title: "Advocato",
      img: "/images/fruit-5.jpeg",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
    },
  ];

  return (
    <Grid.Container gap={2} justify="flex-start">
      {list.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={"https://nextui.org" + item.img}
                objectFit="cover"
                width="100%"
                height={140}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.title}</Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
}
