import React from 'react'
import { CustomCard } from '../../../Chakra/CustomCard'
import { HStack, Stack, Text, Icon, Button, Flex, Image, Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react'
import { RiArrowRightUpLine } from "react-icons/ri";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";

export const PriceSection = () => {
  const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];
  return (
    <CustomCard>
      <Flex justifyContent="space-between" align="start">
        <Stack>
          <HStack>
            <Text fontSize="14px" color="black.80">Wallet Balances</Text>
          </HStack>
          <HStack>
            <Text textStyle="h2" fontWeight="medium">
              22.39401000
            </Text>{" "}
            <HStack fontWeight="medium" fontSize="sm" color="green.500">
              <Icon as={RiArrowRightUpLine} />
              <Text fontWeight="medium" fontSize="sm">22%</Text>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={FaCirclePlus} />}>Buy</Button>
          <Button leftIcon={<Icon as={FaCircleMinus} />}>Sell</Button>
        </HStack>

      </Flex>
      <Flex>

      </Flex>
      <Tabs variant='soft-rounded'>
        <Flex justifyContent="end">
          <TabList bg="black.5" p="3px">
          {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{ bg: "white" }}
                key={tab}
                fontSize="sm"
                p="6px"
                borderRadius="4"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>

        <TabPanels>
          <TabPanel>
            <Image w="100%" mt="3rem" src='./graph.svg' />
            <HStack justifyContent="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </CustomCard>
  )
}
