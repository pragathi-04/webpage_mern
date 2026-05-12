import React from 'react'
import { useSelector } from 'react-redux';
import { Container, Stack, Avatar, Text, Center, Loader } from '@mantine/core';
import { getIsLoggedIn } from '../../redux/slices/User';
export default function ProfilePage() {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const user = useSelector((state) => state.user);
    if (!isLoggedIn) {
        return <div>Redirecting...</div>;
    }

    if (!user || !user.name) {
        return (
            <Center style={{ height: '100vh', width: '100%' }}>
                <Loader size="xl" />
            </Center>
        );
    }

    return (
        <Container size="sm" py="xl">
            <Stack
                h={300}
                bg="var(--mantine-color-body)"
                align="center"
                justify="center"
                gap="lg"
            >
                <Avatar src={user.avatar} size={150} radius={150} alt="Profile avatar" />
                <Text>{user.name}</Text>
                <Text>{user.email}</Text>
                {user.createdAt && <Text>{new Date(user.createdAt).toLocaleDateString()}</Text>}
            </Stack>
        </Container>
    )
}