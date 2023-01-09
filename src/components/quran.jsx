import React, { useState, useEffect } from 'react'

import { Link } from "react-router-dom";

import { Tooltip, Box, Text, Heading, Spacer, Icon, Flex } from '@chakra-ui/react'

import { MdKeyboardArrowRight } from "react-icons/md";
import { GoHome } from "react-icons/go";

export function Quran(CONF) {

    const ISLAM_CHAPTERS_API_URL = CONF.QURAN.en;

    const [quran, setQuran] = useState([])
    useEffect(() => { 
        (async function () {
            try {
                const response = await fetch(ISLAM_CHAPTERS_API_URL.endpoint);
                const data = await response.json();
                setQuran(data);

            } catch (err) {
                console.error(err);
            }
        })();
    }, []);

    return (
        <>
            <Box borderRadius="lg" justify="center" align="center" p={4} m={4} bg={CONF.styles.quran} boxShadow='dark-lg'>
                <Flex align="center" justify="center" ml={3} mr={2} >
                    <Link to={"/"}>
                        <Tooltip label='Home'>
                            <Box>
                                <Icon as={GoHome} w={7} h={7} color="blue.20" />
                            </Box>
                        </Tooltip>
                    </Link>
                    <Spacer />
                    <Heading>{"QURAN"}</Heading>
                    <Spacer />
                </Flex>
            </Box>
            <Box borderRadius="lg" justify="center" align="center" p={4} m={4} bg={CONF.styles.body} boxShadow='dark-lg'>
                {
                    quran.map((data) => (
                        <Link to={"chapter/" + data.id} key={data.id}>
                            <Box borderRadius="lg" justify="center" align="left" p={4} m={4} bg={CONF.styles.color} boxShadow='dark-lg'>
                                <Flex align="center">
                            <Text fontSize={{ base: '18px', md: '40px', lg: '45px' }}>
                                {data.transliteration} 
                            </Text>
                                <Spacer/> <Icon as={MdKeyboardArrowRight} color="blue.20" />
                                </Flex>
                            </Box>
                        </Link>
                    ))
                }
            </Box>
        </>
    )
}