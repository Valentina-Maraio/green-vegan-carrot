import React, { useState } from 'react'
import { Card, Grid, Row } from "@nextui-org/react";
import VegetableDetail from '../modal/VegetableDetail';


export default function VeganYear() {
  const list = [
    {
      title: "January",
      img: "/images/fruit-1.jpeg"
    },
    {
      title: "February",
      img: "/images/fruit-2.jpeg"
    },
    {
      title: "March",
      img: "/images/fruit-3.jpeg",
    },
    {
      title: "April",
      img: "/images/fruit-4.jpeg",
    },
    {
      title: "May",
      img: "/images/fruit-5.jpeg"
    },
    {
      title: "June",
      img: "/images/fruit-6.jpeg"
    },
    {
      title: "July",
      img: "/images/fruit-7.jpeg"
    },
    {
      title: "August",
      img: "/images/fruit-8.jpeg"
    },
    {
      title: "September",
      img: "/images/fruit-3.jpeg"
    },
    {
      title: "October",
      img: "/images/fruit-2.jpeg"
    },
    {
      title: "November",
      img: "/images/fruit-5.jpeg"
    },
    {
      title: "December",
      img: "/images/fruit-6.jpeg"
    },
  ];

  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Grid.Container gap={3} justify="center">
        {list.map((item, index, title) => (
          <Grid xs={6} sm={3} key={index}>
            <Card key={list.idex}>
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

                </Row>
                <Row wrap="wrap" justify="flex-end" align="center">
                  <VegetableDetail
                    onClose={() => setVisible(false)}
                    show={visible === title}
                    title={item.title}
                    img={"https://nextui.org" + item.img}
                  ></VegetableDetail>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
}
