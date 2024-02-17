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

            <h2 style={{ color: "black" }}>About</h2>

            <br></br>

            <Flex style={boxStyle} justify={'space-evenly'} align={'center'}>
                <h4 style={p3style}>Didirikan pada tahun 2017, Komunitas Otomotif Xmax Society Indonesia dimulai sebagai kelompok kecil penggemar pengguna Yamaha Xmax yang berkumpul secara informal untuk berbagi minat mereka dalam industri otomotif yang berkembang pesat. Awalnya hanya beberapa teman yang berbagi ketertarikan yang sama, namun semangat mereka segera menarik minat lebih banyak individu yang berbagi cinta untuk dunia otomotif.</h4>

            </Flex>
        </div>
    )
}