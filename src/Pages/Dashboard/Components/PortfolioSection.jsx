import { Box, HStack, Text, Stack, Icon, Tag, Button } from '@chakra-ui/react'
import React from 'react'
import { IoInformationCircle } from "react-icons/io5";
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
const PortfolioSection = () => {
    return (
        <HStack bg="white" p="6" borderRadius="xl"
            justifyContent="space-between"
            align={{
                base:"start",
                xl:"center"
            }}
            flexDir={{
                base: "column",
                xl: "row"
            }}>
            <HStack spacing={{
                base: "2",
                lg: "16"
            }}
                flexDir={{
                    base: "column",
                    lg: "row"
                }}
                align={{
                    base: "start",
                    lg: "center"
                }}>
                <Stack spacing={{
                    base: "0"
                }} >
                    <HStack>
                        <Text fontSize="14px" color="black.80">Total Portfolio value</Text>
                        <Icon as={IoInformationCircle} />
                    </HStack>
                    <Text textStyle="h2" fontWeight="medium">
                        ₹ 112,312.24
                    </Text>
                </Stack>
                <Stack
                    spacing={{
                        base: "0"
                    }}>
                    <HStack>
                        <Text fontSize="14px" color="black.80">Wallet Balances</Text>
                    </HStack>
                    <HStack spacing="4">
                        <HStack>
                            <Text textStyle="h2" fontWeight="medium">
                                22.39401000
                            </Text>
                            <Tag colorScheme="gray" fontWeight="medium">
                                BTC
                            </Tag>
                        </HStack>
                        <HStack>
                            <Text textStyle="h2" fontWeight="medium">
                                ₹ 1,300.00
                            </Text>{" "}
                            <Tag colorScheme="gray">INR</Tag>
                        </HStack>
                    </HStack>
                </Stack>
            </HStack>
            <HStack>
                <Button leftIcon={<Icon as={AiOutlineArrowDown} />}>Deposite</Button>
                <Button leftIcon={<Icon as={AiOutlineArrowUp} />}>Widthdraw</Button>
            </HStack>
        </HStack>
    )
}

export default PortfolioSection