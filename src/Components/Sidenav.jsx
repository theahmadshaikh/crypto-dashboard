import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { HStack, Icon, Stack, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom'

export const Sidenav = () => {

  const location = useLocation();

  // console.log(location);

  const isActiveLink = (link) => {
    return location.pathname === link;
  };


  const navlinks = [{
    icon: RxDashboard,
    text: "Dashboard",
    link: "/"
  },
  {
    icon: BsArrowDownUp,
    text: "Transaction",
    link: "/Transaction"
  }]
  return (
    <Stack
      bg="white"
      w={{
        base: "Full",
        lg: "250px"
      }}
      textAlign="center"
      boxShadow={{
        base: "none",
        lg: "lg"
      }}
      h="100vh"
      justifyContent="space-between">
      <Box>
        <Heading as="h1" fontSize="24px" pt="56px">Crypto</Heading>
        <Box mx="3" pt="6">
          {
            navlinks.map((nav) => (
              <Link to={nav.link} key={nav.text}>
                <HStack
                  bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                  color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
                  borderRadius="10px"
                  py="3"
                  px="4"
                  color="#797E82"
                  _hover={{
                    bg: "#F3F3F7",
                    color: "#171717"
                  }}
                  >
                  <Icon as={nav.icon} />
                  <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
                </HStack>
              </Link>

            ))
          }
        </Box>
      </Box>

      <Box mx="3" pt="6" mb="6">
        <Link to="/Support">
        <HStack
          borderRadius="10px"
          py="3"
          px="4"
          bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "#797E82"}
          _hover={{
            bg: "#F3F3F7",
            color: "#171717"
          }}
          color="#797E82"
        >
          <Icon as={BiSupport} />
          <Text fontSize="14px" fontWeight="medium">Support</Text>
        </HStack>
        </Link>
        
      </Box>

    </Stack>
  )
}
