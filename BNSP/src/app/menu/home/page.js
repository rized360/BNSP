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
        width: '70%',
        padding: 10,
        border: '1px solid #40a9ff',
        backgroundColor: '#001d52'
    };
    const p3style = {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    };

    return (
        <div>

            <br></br>

            <h2 style={{ color: "black" }}>Beranda</h2>

            <br></br>

            <Flex style={boxStyle} align={'center'}>
                <img src="../../images/foto.jpg" alt="" style={{ height: 250, marginRight: 20 }} />
                <h4 style={p3style}>Pengalaman Komunitas Motor: Merasakan semangat persaudaraan dan kebersamaan dalam setiap perjalanan bersama, merayakan kebebasan dan kegembiraan berkendara bersama sesama penggemar motor, dan membangun hubungan yang erat melalui berbagai acara sosial dan pertemuan rutin.</h4>
            </Flex>
            <Flex style={boxStyle} align={'center'}>
                <img src="../../images/foto2.jpg" alt="" style={{ height: 250, marginRight: 20 }} />
                <h4 style={p3style}>Kelebihan Bergabung dalam Komunitas Motor:
                    "Bergabung dalam komunitas motor tidak hanya tentang berkendara, tetapi juga tentang menjadi bagian dari sebuah keluarga yang saling mendukung. Dengan bergabung dalam komunitas motor, Anda akan memiliki akses ke pengalaman berkendara yang menyenangkan, kesempatan untuk belajar dan bertukar informasi dengan para penggemar motor lainnya, serta mendapatkan dukungan dan persahabatan yang tidak tergantikan."</h4>
            </Flex>
        </div>
    )
}