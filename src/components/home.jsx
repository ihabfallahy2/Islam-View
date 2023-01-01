import React from 'react'
import { useState, useEffect } from "react";
import { Tooltip } from '@chakra-ui/react'
/**
*This function is used to import Islamic & weather Api.
*This function is used to import the config map.
*/
import * as IAPI from '../API/IslamicApi';
import * as WAPI from '../API/WeatherApi';

/**
*import chakra ui react components
*/
import { Hide, Show } from '@chakra-ui/react'
import { Stat, StatLabel, StatHelpText } from '@chakra-ui/react'
import { Box, Heading, Flex, Image, Button, Icon } from '@chakra-ui/react'

import { Link } from "react-router-dom";
import { FaQuran } from "react-icons/fa";

export function Home(CONF) {

    /**
    *Returns the current state of the function.
    */
    const [salat, setSalat] = useState([])

    const [current, setCurrent] = useState({})
    const [currentCondition, setCurrentCondition] = useState({})

    const [forecasting, setForecasting] = useState({})
    const [forecastDate, setForecastDate] = useState({})
    const [forecastIcon, setForecastIcon] = useState({})

    /**
    *Will be used in the future to show the location setup
    */
    const [local, setLocation] = useState({})

    /**
     *This is a function that sets the weather current & currentCondition & location.
     *This is a function that sets the forecast general & date.
     */
    useEffect(() => { IAPI.IslamPrayerActualTime("mula").then((data) => setSalat(data)) }, []);

    useEffect(() => { WAPI.getWeather().then((data) => setCurrent(data)) }, []);
    useEffect(() => { WAPI.getWeather().then((data) => setCurrentCondition(data.current.condition)) }, []);
    useEffect(() => { WAPI.getWeather().then((data) => setLocation(data.location)) }, []);

    useEffect(() => { WAPI.getForecast().then((data) => setForecasting(data.forecast)) }, []);
    useEffect(() => { WAPI.getForecast().then((data) => setForecastDate(data.date)) }, []);
    useEffect(() => { WAPI.getForecast().then((data) => setForecastIcon(data.icon)) }, []);


    // console.log(window.screen.availWidth)
    return (
        <>
            <Box borderRadius="lg" justify="center" align="center" p={4} m={4} bg={CONF.styles.body} boxShadow='dark-lg'>
                <Box bg={CONF.styles.color} borderRadius="lg" justify="center" align="center" p={4} m={12} >
                    <Image
                        borderRadius='3xl'
                        boxSize='100px'
                        src={currentCondition.icon}
                        alt='Dan Abramov'
                    />
                    <Heading as='h2' size='2xl' fontSize={{ base: '24px', md: '40px', lg: '45px' }} m={2}>Today</Heading>
                    <Stat mt={2}>
                        <StatLabel>{currentCondition.text}</StatLabel>
                        <StatHelpText>{current.last_updated}</StatHelpText>
                    </Stat>
                </Box>

                <Hide below="598px">
                    <Flex p={4} m={12} justify="center">

                        <Box bg={CONF.styles.wcolor} borderRadius="lg" justify="center" align="center" p={4} m={4} w={[300, 400, 500]} boxShadow='2xl'>
                            <Image
                                borderRadius='3xl'
                                boxSize={{ base: '35px', md: '45px', lg: '50px', xl: '100px' }}
                                src={forecastIcon.uno}
                                alt='Dan Abramov' />

                            <Hide below='md'>
                                <Heading>{forecastDate.uno}</Heading>
                            </Hide>
                            <Stat mt={2}>
                                <Hide below='380px'>
                                    <StatLabel>{forecasting.uno}</StatLabel>
                                </Hide>
                                <Hide below='330px'>
                                    <StatHelpText> {forecastDate.uno}</StatHelpText>
                                </Hide>
                            </Stat>
                        </Box>
                        <Hide below='596px'>

                            <Box bg={CONF.styles.wcolor} borderRadius="lg" justify="center" align="center" p={4} m={4} w={[300, 400, 500]} boxShadow='2xl'>
                                <Image
                                    borderRadius='3xl'
                                    boxSize={{ base: '35px', md: '45px', lg: '50px', xl: '100px' }}
                                    src={forecastIcon.dos}
                                    alt='Dan Abramov' />

                                <Hide below='md'>
                                    <Heading>{forecastDate.dos}</Heading>
                                </Hide>
                                <Stat mt={2}>
                                    <Hide below='380px'>
                                        <StatLabel>{forecasting.dos}</StatLabel>
                                    </Hide>
                                    <Hide below='330px'>
                                        <StatHelpText> {forecastDate.dos}</StatHelpText>
                                    </Hide>
                                </Stat>
                            </Box>
                        </Hide>

                        <Hide below='1024px'>

                            <Box bg={CONF.styles.wcolor} borderRadius="lg" justify="center" align="center" p={4} m={4} w={[300, 400, 500]} boxShadow='2xl'>
                                <Image
                                    borderRadius='3xl'
                                    boxSize={{ base: '35px', md: '45px', lg: '50px', xl: '100px' }}
                                    src={forecastIcon.tres}
                                    alt='Dan Abramov' />

                                <Hide below='md'>
                                    <Heading>{forecastDate.tres}</Heading>
                                </Hide>
                                <Stat mt={2}>
                                    <Hide below='380px'>
                                        <StatLabel>{forecasting.tres}</StatLabel>
                                    </Hide>
                                    <Hide below='330px'>
                                        <StatHelpText> {forecastDate.tres}</StatHelpText>
                                    </Hide>
                                </Stat>
                            </Box>
                        </Hide>
                    </Flex>
                </Hide>

                <Show below="590px">
                    <Flex p={4} m={12} justify="center" flexWrap='wrap'>

                        <Box bg={CONF.styles.wcolor} borderRadius="lg" justify="center" align="center" p={4} m={4} w={[300, 400, 500]} boxShadow='2xl'>
                            <Image
                                borderRadius='3xl'
                                boxSize={{ base: '35px', md: '45px', lg: '50px', xl: '100px' }}
                                src={forecastIcon.uno}
                                alt='Dan Abramov' />

                            <Hide below='md'>
                                <Heading>{forecastDate.uno}</Heading>
                            </Hide>
                            <Stat mt={2}>
                                <Hide below='380px'>
                                    <StatLabel>{forecasting.uno}</StatLabel>
                                </Hide>
                                <Hide below='330px'>
                                    <StatHelpText> {forecastDate.uno}</StatHelpText>
                                </Hide>
                            </Stat>
                        </Box>

                        <Box bg={CONF.styles.wcolor} borderRadius="lg" justify="center" align="center" p={4} m={4} w={[300, 400, 500]} boxShadow='2xl'>
                            <Image
                                borderRadius='3xl'
                                boxSize={{ base: '35px', md: '45px', lg: '50px', xl: '100px' }}
                                src={forecastIcon.dos}
                                alt='Dan Abramov' />

                            <Hide below='md'>
                                <Heading>{forecastDate.dos}</Heading>
                            </Hide>
                            <Stat mt={2}>
                                <Hide below='380px'>
                                    <StatLabel>{forecasting.dos}</StatLabel>
                                </Hide>
                                <Hide below='330px'>
                                    <StatHelpText> {forecastDate.dos}</StatHelpText>
                                </Hide>
                            </Stat>
                        </Box>


                        <Box bg={CONF.styles.wcolor} borderRadius="lg" justify="center" align="center" p={4} m={4} w={[300, 400, 500]} boxShadow='2xl'>
                            <Image
                                borderRadius='3xl'
                                boxSize={{ base: '35px', md: '45px', lg: '50px', xl: '100px' }}
                                src={forecastIcon.tres}
                                alt='Dan Abramov' />

                            <Hide below='md'>
                                <Heading>{forecastDate.tres}</Heading>
                            </Hide>
                            <Stat mt={2}>
                                <Hide below='380px'>
                                    <StatLabel>{forecasting.tres}</StatLabel>
                                </Hide>
                                <Hide below='330px'>
                                    <StatHelpText> {forecastDate.tres}</StatHelpText>
                                </Hide>
                            </Stat>
                        </Box>
                    </Flex>
                </Show>
                <Tooltip label='Quran'>
                    <Link to={"quran"}>
                        <Box bg={CONF.styles.color} borderRadius="lg" justify="center" align="center" p={2} m={20} boxShadow='2xl'>
                            <Button bg={CONF.styles.color}><Icon as={FaQuran} w={8} h={8} color="blue.20" /></Button>
                        </Box>
                    </Link>
                </Tooltip>

                <Box bg={CONF.styles.color} borderRadius="lg" justify="center" align="center" p={4} m={12} boxShadow='2xl'>
                    <Heading as='h2' fontSize={{ base: '24px', md: '40px', lg: '56px' }}>Prayer Times</Heading>
                    <Stat mt={4}>
                        <StatLabel>shurooq {salat.shurooq}</StatLabel>
                        <StatLabel>dhuhr {salat.dhuhr}</StatLabel>
                        <StatLabel>asr {salat.asr}</StatLabel>
                        <StatLabel>maghrib {salat.maghrib}</StatLabel>
                        <StatLabel>isha {salat.isha}</StatLabel>
                        <StatHelpText mt={2}> {current.last_updated}</StatHelpText>
                    </Stat>
                </Box>

            </Box>
        </>
    )
}