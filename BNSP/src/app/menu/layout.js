'use client'

import { useRouter } from 'next/navigation'
import { ConfigProvider, Layout, Space, Menu, Image, Typography } from 'antd';
import { HomeOutlined, SettingOutlined, UserOutlined, DesktopOutlined, DeploymentUnitOutlined, CaretRightFilled, ShopFilled } from '@ant-design/icons';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';


const { Title } = Typography;

//theme
const { Header, Sider, Content } = Layout;
const headerStyle = {
    height: 64,
    display: 'flex',
    backgroundColor: '#f5f5f5',
    fontWeight: 'bold',
    fontSize: 20

};
const contentStyle = {
    height: '100vh',
    padding: 10,
    backgroundColor: '#fff',
};
const siderStyle = {
    lineHeight: '120px',
    backgroundColor: '#f5f5f5',
};
const titleStyle = {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 50,
    marginTop: 18,
    color: "#001d52"

};

//menu item
const menuItem = [
    {
        label: 'Home',
        key: 'menu/home',
        icon: <HomeOutlined />,
    },
    {
        label: 'Artikel',
        key: 'menu/artikel',
        icon: <DesktopOutlined />,
    },
    {
        label: 'Event',
        key: 'menu/event',
        icon: <DeploymentUnitOutlined />,
    },
    {
        label: 'Galeri Foto',
        key: 'menu/galeri',
        icon: <ShopFilled />,
    },
    {
        label: 'Klien Kami',
        key: 'menu/klien',
        icon: <UserOutlined />,
    },
    {
        label: 'Login',
        key: 'login',
        icon: <SettingOutlined />,
        children: [
            {
                label: 'Sign Up',
                key: 'signin/',
                icon: <CaretRightFilled />,
            }
        ],
    }
];

const menuHead = [
    {
        label: 'Visi Misi',
        key: 'menu/visimisi',
    },
    {
        label: 'Produk Kami',
        key: 'menu/produkkami',
    },
    {
        label: 'Kontak Kami',
        key: 'menu/kontakkami',
    },
    {
        label: 'About',
        key: 'menu/about',
    }
]

export default function RootLayout({ children }) {
    const supabase = createClientComponentClient()
    const router = useRouter();

    const onClick = (menuData) => {
        let page = menuData.key;
        router.push('/' + page);
    };

    const onSignOut = async () => {
        await supabase.auth.signOut()
        router.push('/signin')
    }

    return (
        <ConfigProvider
            theme={{
                token: {
                    // colorPrimary: 'green',
                }
            }}
        >
            <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
                <Layout>
                    <Header style={headerStyle}>
                        <Image src="../../images/xmax.png" alt="" width={100} />
                        <Title style={titleStyle}>Xmax Society Indonesia</Title>
                        <Menu
                            onClick={onClick}
                            mode="horizontal"
                            items={menuHead}
                            style={{ backgroundColor: '#f5f5f5', color: '#001d52', flex: 1, minWidth: 0, justifyContent: 'flex-end' }}
                        />
                    </Header>
                    <Layout>
                        <Sider style={siderStyle}>
                            <Menu
                                onClick={onClick}
                                defaultOpenKeys={['menu/home']}
                                defaultSelectedKeys={['menu/home']}
                                mode="inline"
                                items={menuItem}
                                style={{ backgroundColor: '#f5f5f5', }}
                            />
                        </Sider>
                        <Content style={contentStyle}>{children}</Content>
                    </Layout>
                </Layout>
            </Space>
        </ConfigProvider>
    )
}