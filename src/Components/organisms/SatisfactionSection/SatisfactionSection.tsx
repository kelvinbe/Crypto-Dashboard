import ReferalCard from '@/Components/atoms/cards/referalCard'
import SatisfactionCard from '@/Components/atoms/cards/satisfactionCard'
import { Flex } from '@chakra-ui/react'
import React from 'react'

const SatisfactionSection = () => {
  return (
    <Flex>
        <ReferalCard />
        <SatisfactionCard />
    </Flex>
  )
}

export default SatisfactionSection