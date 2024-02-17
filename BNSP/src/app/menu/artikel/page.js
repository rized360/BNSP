'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Image, Card, Flex } from 'antd';
const { Meta } = Card;


const cardStyle = {
    display: "flex"
};

const boxStyle = {
    width: '100%',
    padding: 10
};

const h3style = {
    color: "black",
};

const pstyle = {
    color: "grey",
    fontSize: 14
};

export default function TampilanHome() {
    const router = useRouter()

    return (
        <div>
            <br></br>

            <h2 style={{ color: "black" }}>Artikel</h2>

            <br></br>
            <Flex style={boxStyle} justify={'space-around'} align={'center'}>

                <Card
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<Image src="../../images/Artikel.jpg" alt="" />}
                >
                    <h3 style={h3style}>Acara Honda Super CUB</h3>
                    <p style={pstyle}>Menghadiri acaranya Honda Cub untuk meramaikan acara bersama komunitas dan memperluas persaudaraan.</p>

                </Card>

                <Card
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<Image src="../../images/Panca-Bekasi-14.jpg" alt="" />}
                >
                    <h3 style={h3style}>Peresmian Panca Garage</h3>
                    <p style={pstyle}>Peresmian tempat treatment motor sudah hadir di Bekasi! Kamu juga bisa ikutan lho! Yuk datang sekarang!</p>

                </Card>

                <Card
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<Image src="../../images/artis.jpg" alt="" />}
                >
                    <h3 style={h3style}>Riding Para Komika</h3>
                    <p style={pstyle}>Komika Indonesia mengadakan jalan-jalan keliling kota Jakarta dalam rangka perayaan 17 Agustus!</p>

                </Card>
            </Flex>
        </div>
    )
};