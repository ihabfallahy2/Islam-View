import React from 'react'
import { useState, useEffect } from "react";
import { Tooltip } from '@chakra-ui/react'
import { Box, Hide, Button, Heading, Spacer, Icon, Flex } from '@chakra-ui/react'
import { Link } from "react-router-dom";

import * as QUR from '../API/QuranApi';

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'

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
                                <Icon as={MdKeyboardArrowLeft} w={10} h={10} color="blue.20" />
                            </Box>
                        </Tooltip>
                    </Link>
                    <Spacer />
                    <Heading>{"QURAN"}</Heading>
                    <Spacer />
                    <Link to={"/quran"}>
                        <Tooltip label='Quran'>
                            <Box>
                                <Icon as={MdKeyboardArrowRight} w={8} h={8} color="blue.20" />
                            </Box>
                        </Tooltip>
                    </Link>
                </Flex>
            </Box>
            <Box borderRadius="lg" justify="center" align="center" p={4} m={4} bg={CONF.styles.quran} boxShadow='dark-lg'>
                <TableContainer>
                    <Table size='md'>
                        <Thead>
                            <Tr>
                                <Hide below="600px">
                                    <Th>name</Th>
                                </Hide>
                                <Th>transliteration</Th>
                                <Hide below="600px">
                                    <Th>translation</Th>
                                </Hide>
                                <Th></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                quran.map((data) => (
                                    <Tr key={data.id}>
                                        <Hide below="600px">
                                            <Td>
                                                <Link to={"chapter/" + data.id}>
                                                    {data.name}
                                                </Link>
                                            </Td>
                                        </Hide >
                                        <Td>
                                            <Link to={"chapter/" + data.id}>
                                                {data.transliteration}
                                            </Link>
                                        </Td>
                                        <Hide below="600px">
                                            <Td>
                                                <Link to={"chapter/" + data.id}>
                                                    {data.translation}
                                                </Link>
                                            </Td>
                                        </Hide>
                                        <Spacer />
                                        <Td>
                                            <Link to={"chapter/" + data.id}>
                                                <Tooltip label={data.transliteration}>
                                                    <Icon as={MdKeyboardArrowRight} color="blue.20" />
                                                </Tooltip>
                                            </Link>
                                        </Td>
                                    </Tr>
                                ))
                            }

                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th>name</Th>
                                <Th>transliteration</Th>
                                <Th>translation</Th>
                                <Th></Th>
                            </Tr>
                        </Tfoot>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}