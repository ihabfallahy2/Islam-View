import React from 'react'
import { useState, useEffect } from "react";
import * as IAPI from './API/IslamicApi';
import * as WAPI from './API/WeatherApi';
//chakra ui imports

import { Tooltip } from '@chakra-ui/react'
import { GiNewShoot } from "react-icons/gi";
import { GoOctoface } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { Box, Heading, Button, Flex, Spacer, Icon, Image } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { BiAnalyse } from "react-icons/bi";
import {
  Stat,
  StatLabel,
  StatHelpText,
} from '@chakra-ui/react'
import { GiPrayerBeads } from "react-icons/gi";
import { Show, Hide } from '@chakra-ui/react'
//chakra ui imports

function App() {

  const [salat, setSalat] = useState([])

  useEffect(() => {

    IAPI.IslamPrayerActualTime("mula").then((data) => setSalat(data))

  }, []);

  const [current, setCurrent] = useState(0)
  const [currentCondition, setCurrentCondition] = useState(0)
  const [forecasting, setForecasting] = useState(0)
  const [forecastDate, setForecastDate] = useState(0)
  const [local, setLocation] = useState(0)

  useEffect(() => { WAPI.getWeather().then((data) => setCurrent(data.current)) }, []);
  useEffect(() => { WAPI.getWeather().then((data) => setCurrentCondition(data.current.condition)) }, []);

  useEffect(() => { WAPI.getForecast().then((data) => setForecasting(data.forecast)) }, []);
  useEffect(() => { WAPI.getForecast().then((data) => setForecastDate(data.date)) }, []);

  useEffect(() => { WAPI.getWeather().then((data) => setLocation(data.location)) }, []);
  const toast = useToast();
  const tp = {
    title: 'Weather & Prayer Times app is currently under development',
    variant: 'left-accent',
    description: "Version : 1.2.2",
    status: 'info',
    duration: 6000,
    isClosable: true,
    alternativeTitle: local.name + " " + local.region + " " + local.country,
  }

  const header = "#FBF9FF";
  const body = "#9395D3";
  const color = "#B3B7EE";
  const wcolor = "#B3B7EE";
  const footer = "#A2A3BB";

  const [width, setWidth] = useState("50%");

  return (
    <>
      <Box borderRadius="lg" justify="center" align="center" p={4} m={4} bg={footer} boxShadow='dark-lg'>
        <Flex align="center" ml={3} mr={2} >
          <Heading fontSize={{ base: '24px', md: '40px', lg: '45px' }}><Icon as={GiPrayerBeads} w={8} h={8} color="blue.20" /> Islam View</Heading>
          <Spacer />
          <Button bg={color} onClick={() => toast(tp)}> <Icon as={BiAnalyse} w={8} h={8} color="blue.20" /></Button>
        </Flex>
      </Box>
      <Box borderRadius="lg" justify="center" align="center" p={4} m={4} bg={body} boxShadow='dark-lg'>
        <Box bg={color} borderRadius="lg" justify="center" align="center" p={4} m={12} >
          <Heading as='h2' size='2xl'>Weather</Heading>
          <Image
            borderRadius='full'
            boxSize='100px'
            src={currentCondition.icon}
            alt='Dan Abramov'
          />
          <Stat mt={2}>
            <StatLabel>{currentCondition.text}</StatLabel>
            <StatHelpText>Updated {current.last_updated}</StatHelpText>
          </Stat>
        </Box>
        <Flex p={4} m={12} justify="center">

          <Box bg={wcolor} borderRadius="lg" justify="center" align="center" p={4} m={4} w={[300, 400, 500]} boxShadow='2xl'>
            <Hide above='md'>
              <Box><Icon as={GiNewShoot} w={8} h={8} color="blue.20" /></Box>
            </Hide>
            <Hide below='md'>
              <Heading>{forecastDate.uno}</Heading>
            </Hide>
            <Stat mt={2}>
              <StatLabel>{forecasting.uno}</StatLabel>
              <StatHelpText>Updated {forecastDate.uno}</StatHelpText>
            </Stat>
          </Box>
          <Hide below='596px'>

            <Box bg={wcolor} borderRadius="lg" justify="center" align="center" p={4} m={4} w={[300, 400, 500]} boxShadow='2xl'>
              <Hide above='md'>
                <Box><Icon as={GiNewShoot} w={8} h={8} color="blue.20" /></Box>
              </Hide>
              <Hide below='md'>
                <Heading>{forecastDate.dos}</Heading>
              </Hide>
              <Stat mt={2}>
                <StatLabel>{forecasting.dos}</StatLabel>
                <StatHelpText>Updated {forecastDate.dos}</StatHelpText>
              </Stat>
            </Box>
          </Hide>

          <Hide below='1024px'>

          <Box bg={wcolor} borderRadius="lg" justify="center" align="center" p={4} m={4} w={[300, 400, 500]} boxShadow='2xl'>
            <Hide above='md'>
              <Box><Icon as={GiNewShoot} w={8} h={8} color="blue.20" /></Box>
            </Hide>
            <Hide below='md'>
              <Heading>{forecastDate.tres}</Heading>
            </Hide>
            <Stat mt={2}>
              <StatLabel>{forecasting.tres}</StatLabel>
              <StatHelpText>Updated {forecastDate.tres}</StatHelpText>
            </Stat>
          </Box>
          </Hide>
        </Flex>

        <Box bg={color} borderRadius="lg" justify="center" align="center" p={4} m={12} boxShadow='2xl'>
          <Heading as='h2' fontSize={{ base: '24px', md: '40px', lg: '56px' }}>Prayer Times</Heading>
          <Stat mt={4}>
            <StatLabel>shurooq {salat.shurooq}</StatLabel>
            <StatLabel>dhuhr {salat.dhuhr}</StatLabel>
            <StatLabel>asr {salat.asr}</StatLabel>
            <StatLabel>maghrib {salat.maghrib}</StatLabel>
            <StatLabel>isha {salat.isha}</StatLabel>
            <StatHelpText mt={2}>Updated {current.last_updated}</StatHelpText>
          </Stat>
        </Box>
      </Box>
      <Box borderRadius="lg" justify="center" align="center" p={4} m={4} bg={footer} boxShadow='dark-lg'>
        <Flex ml={3} mr={2}>
          <Show below="sm" ><Icon as={GiPrayerBeads} w={8} h={8} color="blue.20" fontSize={{ base: '24px', md: '40px', lg: '45px' }} /></Show>
          <Hide below="sm"><Heading fontSize={{ base: '24px', md: '40px', lg: '45px' }}><Icon as={GiPrayerBeads} w={8} h={8} color="blue.20" /> Islam View</Heading></Hide>
          <Spacer />
          <Box>
            <Tooltip label='Github'>
              <Button colorScheme='blackAlpha' m={2} onClick={event => window.location.href = 'https://github.com/ihabfallahy2'}><Icon as={GoOctoface} w={8} h={8} color="blue.20" /></Button>
            </Tooltip>
            <Tooltip label='Linkedin'>
              <Button colorScheme='blackAlpha' m={2} onClick={event => window.location.href = 'https://www.linkedin.com/in/ihab-fallahy-aallam/'}><Icon as={FaLinkedinIn} w={8} h={8} color="blue.20" /></Button>
            </Tooltip>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default App
