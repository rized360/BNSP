
'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Table, Button, Image, Card, Flex } from 'antd';
const { Meta } = Card;


const cardStyle = {
    display: "flex"
};

const boxStyle = {
    width: '100%',
    padding: 10
};
const p3style = {
    color: "black",
    fontWeight: 'bold',
    fontSize: 18
};
const pstyle = {
    color: "grey",
    fontSize: 14
};

export default function TampilanHome() {
    const router = useRouter()
    const supabase = createClientComponentClient()

    return (
        <div>
            <br></br>

            <h3 style={{ color: "black" }}>Galeri Foto Pengguna Yamaha Xmax</h3>

            <br></br>
            <Flex style={boxStyle} justify={'space-around'} align={'center'}>

                <Card
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<Image src="../../images/Xmax_Rolling-11.jpg" alt="" />}
                >
                    <p style={p3style}>Touring Ciletuh</p>
                    <p style={pstyle}>Perjalanan ke Ciletuh selama 3 hari</p>
                </Card>

                <Card
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<Image src="../../images/Meichel-8.jpg" alt="" />}
                >
                    <p style={p3style}>Motor Iman = Bersih</p>
                    <p style={pstyle}>Hari Jumat saatnya motor bersih!</p>
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 240,
                    }}
                    cover={<Image src="../../images/Jay-PIK-35.jpg" alt="" />}
                >
                    {/* <Meta title={'Pantai Indah Kapuk'} description={'Sore-sore Foto Bareng Motor Kesayangan!'} /> */}
                    <p style={p3style}>Pantai Indah Kapuk</p>
                    <p style={pstyle}>Sore-sore Foto Bareng Motor Kesayangan!</p>
                </Card>

            </Flex>
        </div>
    )
};