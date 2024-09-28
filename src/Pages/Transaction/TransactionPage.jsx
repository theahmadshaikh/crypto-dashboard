import React from 'react'
import DashboardLayout from '../../Components/DashboardLayout'
import { Card, Text, Flex, Icon, Button, HStack } from '@chakra-ui/react'
import { MdOutlineFileDownload } from "react-icons/md";
import {
    Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator,
    Tag,
    InputGroup,
    InputLeftElement,
    Input
} from '@chakra-ui/react'
import TransactionTable from './Components/TransactionTable';
import { BsSearch } from 'react-icons/bs'

const TransactionPage = () => {
    const tabs = [
        {
            name: "All",
            count: 349,
        },
        {
            name: "Deposit",
            count: 114,
        },
        {
            name: "Widthdraw",
            count: 55,
        },
        {
            name: "Trade",
            count: 50,
        },
    ];
    return (
        <DashboardLayout title="Transaction">
            <Flex justify="end" mt="6" mb="3">
                <Button leftIcon={<Icon as={MdOutlineFileDownload} />}>Export CSV</Button>
            </Flex>
            <Card p="4" mb="6">
                <Tabs position='relative' variant='unstyled'>
                    <TabList
                        display="flex"
                        justifyContent="space-between"
                        pt="4">
                        <HStack>
                            {tabs.map(tab => (
                                <Tab key={tab.name} display="flex" gap="2" pb="4">
                                    {tab.name}{" "}
                                    <Tag colorScheme="gray" borderRadius="full">
                                        {tab.count}
                                    </Tag>
                                </Tab>
                            ))}
                        </HStack>


                        <InputGroup maxW="200px" pr="6">
                            <InputLeftElement pointerEvents='none'>
                                <Icon as={BsSearch} />
                            </InputLeftElement>
                            <Input type='text' placeholder='Search...' />
                        </InputGroup>
                    </TabList>

                    <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
                    <TabPanels>
                        <TabPanel>
                            <TransactionTable />
                        </TabPanel>
                        <TabPanel>
                            <TransactionTable />
                        </TabPanel>
                        <TabPanel>
                            <TransactionTable />
                        </TabPanel>
                        <TabPanel>
                            <TransactionTable />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Card>
        </DashboardLayout>
    )
}

export default TransactionPage