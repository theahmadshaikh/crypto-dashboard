import React from 'react'
import { Flex, Box, Grid, GridItem } from '@chakra-ui/react'
import DashboardLayout from '../../Components/DashboardLayout'
import PortfolioSection from './Components/PortfolioSection'
import { PriceSection } from './Components/PriceSection'
import Transaction from './Components/Transaction'
import InfoCard from './Components/InfoCard'

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Box px="4" marginBlock="4">
        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            xl: "repeat(2, 1fr)",
          }}
          gap="6">
          <GridItem colSpan={{
            base: 1,
            xl: 2,
          }}>
            <PortfolioSection />
          </GridItem>
          <GridItem colSpan="1">
            <PriceSection />
          </GridItem>
          <GridItem colSpan="1">
            <Transaction />
          </GridItem>
          <GridItem colSpan="1">
            <InfoCard
              imgUrl="/dot_bg.svg"
              text=" Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it"
              tagText="Loan"
              inverted={false} />
          </GridItem>
          <GridItem colSpan="1">
            <InfoCard
              inverted={true}
              tagText="Contact"
              imgUrl="/grid_bg.svg"
              text="Learn more about our real estate, mortgage, and  corporate account services" />
          </GridItem>
        </Grid>
      </Box>
    </DashboardLayout>

  )
}

export default Dashboard