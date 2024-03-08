import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import VissionCard from '@/Components/atoms/about-cards/vissionCard'
import { data } from '@/app/about/data'

const VissionSection = () => {
  return (
    <Box>
        <VissionCard title='Our Vission' info={data.vision} aos="fade-up" />
  </Box>
  )
}

export default VissionSection