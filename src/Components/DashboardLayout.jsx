import React, { Children } from 'react'
import { Flex, Box, Container } from '@chakra-ui/react'
import { Sidenav } from './Sidenav'
import TopNav from './TopNav'
import SideDrawer from './SideDrawer'
import { useDisclosure } from '@chakra-ui/react'
const DashboardLayout = ({ title, children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex>
            <Box>
                <Box display={{
                    base: "none",
                    lg: "flex",
                }}>
                    <Sidenav />
                    <SideDrawer isOpen={isOpen}
                        onOpen={onOpen}
                        onClose={onClose}
                    />
                </Box>
            </Box>

            <Box flexGrow={1}>
                <TopNav title={title} onOpen={onOpen} />
                <Container overflowX="hidden"
                    overflowY="auto"
                    h="calc(100vh - 88px)"
                    mt="6"
                    maxW="90rem">
                    {children}
                </Container>
            </Box>
        </Flex>
    )
}

export default DashboardLayout