
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
    color: "white",
    fontWeight: 'bold',
    fontSize: 18
};
const pstyle = {
    color: "white",
    fontSize: 14
};

export default function TampilanHome() {
    const router = useRouter()
    const supabase = createClientComponentClient()

    return (
        <div>
            <br></br>

            <h3 style={{ color: "black" }}>Pilih Produk Kami</h3>

            <br></br>
            <Flex style={boxStyle} justify={'space-around'} align={'center'}>

                <Card
                    hoverable
                    style={{
                        width: 240,
                        backgroundColor: '#001d52'
                    }}
                    cover={<img src="../../images/servis.jpg" alt="" />}
                >
                    <p style={p3style}>Jasa Service</p>
                    <p style={pstyle}>Rawatlah motormu agar selalu nyaman!</p>
                    <Button
                        style={{ marginTop: 10 }}
                        type="primary"
                        onClick={() => router.push('/menu/home')}
                    >
                        Booking
                    </Button>
                </Card>

                <Card
                    hoverable
                    style={{
                        width: 240,
                        backgroundColor: '#001d52'
                    }}
                    cover={<img src="../../images/sparepart.jpg" alt="" />}
                >
                    <p style={p3style}>Preorder Sparepart</p>
                    <p style={pstyle}>Anda dapat melakukan pemesanan part Xmax</p>
                    <Button
                        style={{ marginTop: 10 }}
                        type="primary"
                        onClick={() => router.push('/menu/home')}
                    >
                        Booking
                    </Button>
                </Card>
                <Card
                    hoverable
                    style={{
                        width: 240,
                        backgroundColor: '#001d52'
                    }}
                    cover={<img src="../../images/potoshoot.jpg" alt="" />}
                >
                    <p style={p3style}>Photoshoot</p>
                    <p style={pstyle}>Abadikan momen indahmu bersama Xmaxmu!</p>
                    <Button
                        style={{ marginTop: 10 }}
                        type="primary"
                        onClick={() => router.push('/menu/home')}
                    >
                        Booking
                    </Button>
                </Card>

            </Flex>
        </div>
    )
};