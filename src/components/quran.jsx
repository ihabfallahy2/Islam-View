import React from 'react'
import { useState, useEffect } from "react";
import { Tooltip } from '@chakra-ui/react'
import { Box, Text, Heading, Spacer, Icon, Flex } from '@chakra-ui/react'
import { Link } from "react-router-dom";

import * as QUR from '../API/QuranApi';

import { MdKeyboardArrowRight } from "react-icons/md";

import { GoHome } from "react-icons/go";


export function Quran(CONF) {

    const [quran, setQuran] = useState([])
    useEffect(() => { QUR.getQuran().then((data) => setQuran(data)) }, []);

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
                        <Link to={"chapter/" + data.id}>
                            <Box borderRadius="lg" justify="center" align="left" p={4} m={4} bg={CONF.styles.color} boxShadow='dark-lg' key={data.id}>
                            <Text fontSize='4xl'>
                                <Flex>
                                {data.transliteration} <Spacer/> <Icon as={MdKeyboardArrowRight} color="blue.20" />
                                </Flex>
                            </Text>
                            </Box>
                        </Link>

                    ))
                }
            </Box>
        </>
    )
}