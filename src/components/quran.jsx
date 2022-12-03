import React from 'react'
import { useState, useEffect } from "react";

import * as QUR from '../API/QuranApi';
import {Accord} from './accord'

import { Box } from '@chakra-ui/react'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon
} from '@chakra-ui/react'

export function Quran(CONF) {

    const [quran, setQuran] = useState([])
    useEffect(() => { QUR.getQuran().then((data) => setQuran(data)) }, []);

    return (
        <>
            <Box borderRadius="lg" justify="center" align="center" p={4} m={4} bg={CONF.styles.quran} boxShadow='dark-lg'>
                
                <Accordion>
                    {
                        quran.map((data) => (
                            <AccordionItem key={data.id}>
                                <h2>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            {data.total_verses + " - " + data.name + " - " + data.transliteration + " - " + data.translation}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <Accord {...{link : data.link}}/>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </Box>
        </>
    )
}