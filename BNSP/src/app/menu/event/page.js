
'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Button, Card, Flex, Typography } from 'antd';
const { Meta } = Card;


const cardStyle = {
    width: 500,
};
const imgStyle = {
    display: 'block',
    width: 173,
};
const boxStyle = {
    width: '100%',
    padding: 10
};

export default function TampilanHome() {
    const router = useRouter()
    const supabase = createClientComponentClient()

    return (
        <div>
            <br></br>

            <h3 style={{ color: "black" }}>Kegiatan Perusahaan</h3>

            <br></br>
            <Flex style={boxStyle} justify={'space-around'} align={'center'}>

                <Card
                    hoverable
                    style={cardStyle}
                    styles={{
                        body: {
                            padding: 0,
                            overflow: 'hidden',
                        },
                    }}
                >
                    <Flex justify="space-between">
                        <img
                            alt="avatar"
                            src="../../images/Poles.jpg"
                            style={imgStyle}
                        />
                        <Flex
                            vertical
                            align="flex-end"
                            justify="space-between"
                            style={{
                                padding: 32,
                            }}
                        >
                            <Typography.Title level={5}>
                                “Kegiatan polish motor kami adakan sebagai hadiah dalam suatu acara satu bulan sekali untuk 3 motor”
                            </Typography.Title>

                        </Flex>
                    </Flex>
                </Card>

                <br></br>

                <Card
                    hoverable
                    style={cardStyle}
                    styles={{
                        body: {
                            padding: 0,
                            overflow: 'hidden',
                        },
                    }}
                >
                    <Flex justify="space-between">
                        <img
                            alt="avatar"
                            src="../../images/foto.jpg"
                            style={imgStyle}
                        />
                        <Flex
                            vertical
                            align="flex-end"
                            justify="space-between"
                            style={{
                                padding: 32,
                            }}
                        >
                            <Typography.Title level={5}>
                                “Kegiatan jalan-jalan malam keliling jakarta setiap malam Sabtu, Titik kumpul di Senayan City pada jam 20.00”
                            </Typography.Title>

                        </Flex>
                    </Flex>
                </Card>
            </Flex>
        </div>
    )
};