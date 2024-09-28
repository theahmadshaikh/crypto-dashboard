import { Box, Heading, HStack } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Icon
} from '@chakra-ui/react'
import { FaCircleUser } from "react-icons/fa6";
import React from 'react'
import { FaBars } from "react-icons/fa6";

const TopNav = ({title, onOpen}) => {
    return (
        <Box px="4" bg="white">
            <HStack 
            px="4"
            mx="auto"
            w="full"
            h="16"  
            justifyContent="space-between">
                <Icon as={FaBars} onClick={onOpen} display={{
                    base: "block",
                    lg: "none"
                }}/>
                <Heading 
                fontSize="28px"
                fontWeight="medium"
                >{title}</Heading>
                <Menu>
                    <MenuButton>
                        <Icon fontSize="24px" as={FaCircleUser}/>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Logout</MenuItem>
                        <MenuItem>Support</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Box>

    )
}

export default TopNav