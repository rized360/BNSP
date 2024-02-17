
'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Image, Card, Flex } from 'antd';

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

            <h3 style={{ color: "black" }}>Visi Misi Xmax Society Indonesia</h3>

            <br></br>
            <Flex style={boxStyle} justify={'space-evenly'} align={'center'}>

                <Card
                    hoverable
                    style={{
                        width: 240,
                        backgroundColor: '#001d52'
                    }}
                    cover={<img src="../../images/visi.jpg" alt="" />}
                >
                    <p style={p3style}>Visi Perusahaan Kami</p>
                    <p style={pstyle}>Menempatkan pengguna Yamaha Xmax sebagai saudara kami dalam memberikan lingkungan pertemanan yang positif.</p>
                </Card>

                <Card
                    hoverable
                    style={{
                        width: 240,
                        backgroundColor: '#001d52'
                    }}
                    cover={<img src="../../images/misi.jpg" alt="" />}
                >
                    <p style={p3style}>Misi Perusahaan Kami</p>
                    <p style={pstyle}>Berkomitmen untuk ikut serta dalam membantu komunitas lain, khususnya pengembangan potensi bisnis usaha.</p>
                </Card>

            </Flex>
        </div>
    )
};