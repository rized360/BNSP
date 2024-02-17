'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Table, Button, Image, Flex } from 'antd';
import { PlusOutlined, EditOutlined, UploadOutlined } from '@ant-design/icons';

export default function PeminjamanList() {
    const router = useRouter()
    const supabase = createClientComponentClient()

    const boxStyle = {
        width: '50%',
        padding: 10,
        border: '1px solid #40a9ff',
        backgroundColor: '#001d52'
    };
    const p3style = {
        marginLeft: 100,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    };

    return (
        <div>
            <br></br>

            <h2 style={{ color: "black" }}>Kontak Kami</h2>

            <br></br>

            <Flex style={boxStyle} justify={'space-evenly'} align={'center'}>
                <h4 style={p3style}>Ingin menjadi bagian dari Xmax Society Indonesia? Kami siap membantu dengan senang hati! Hubungi atau kirim pertanyaan Anda ke</h4>

            </Flex>
            <Flex style={boxStyle} justify={'space-evenly'} align={'center'}>
                <h5>Whatsapp : 1234-5678-91011</h5>
                <h5>Instagram : xmax_society_indonesia</h5>
            </Flex>
        </div>
    )
}