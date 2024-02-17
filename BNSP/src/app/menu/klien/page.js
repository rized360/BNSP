'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Table, Button, Image } from 'antd';
import { PlusOutlined, EditOutlined, UploadOutlined } from '@ant-design/icons';

export default function PeminjamanList() {
    const router = useRouter()
    const supabase = createClientComponentClient()

    //table column
    const dataSource = [
        {
            key: '1',
            klien: 'Dimas Setiawan',
            umur: '28',
            kendaraan: 'Xmax 2023 Merah',
        },
        {
            key: '2',
            klien: 'Fajar Hilman',
            umur: '25',
            kendaraan: 'Xmax 2018 Hijau',
        },
        {
            key: '3',
            klien: 'Ananda Meichel',
            umur: '33',
            kendaraan: 'Xmax 2021 Hitam',
        },
    ];

    const columns = [
        {
            title: 'Klien',
            dataIndex: 'klien',
            key: 'klien',
            fixed: 'left',
        },
        {
            title: 'Umur',
            dataIndex: 'umur',
            key: 'umur',
        },
        {
            title: 'Kendaraan',
            dataIndex: 'kendaraan',
            key: 'kendaraan',
        }
    ];


    return (
        <div>
            <br></br>

            <h3 style={{ color: "black" }}>List Klien Kami</h3>

            <br></br>

            <Table dataSource={dataSource} columns={columns} scroll={{ x: 1000 }} pagination={false} bordered />;
        </div>
    )
}