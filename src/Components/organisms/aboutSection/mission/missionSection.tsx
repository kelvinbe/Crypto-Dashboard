import React from 'react'
import { Flex, useMediaQuery } from '@chakra-ui/react'
import MissionCard from '@/Components/atoms/about-cards/missionCards'
import { data } from '@/app/about/data'

const MissionSection = () => {

    const [isSmallScreen] = useMediaQuery('(max-width: 480px)');

  return (
    <Flex flexDirection={isSmallScreen ? 'column': 'row'}>
    <MissionCard  aos="fade-right" title='Our Mission' info={data.mission} />
    <MissionCard aos="fade-left" title='Why you can trust us' info={data.trust}/>
    </Flex>
  )
}

export default MissionSection