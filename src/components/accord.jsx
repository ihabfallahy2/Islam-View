import { useState, useEffect } from "react";

import ScrollToTop from "react-scroll-to-top";

import { Text, Box, Heading, Tooltip, Icon, Spacer, List, ListItem, ListIcon, Flex , Button} from '@chakra-ui/react'

import { Link, useParams } from "react-router-dom";

/**
*import react icons
*/
import { GoHome } from "react-icons/go";
import { FaQuran , FaChevronLeft, FaChevronRight} from "react-icons/fa";
import { MdCrop32 } from "react-icons/md";

import * as QUR from '../API/QuranApi';

export function Accord(CONF) {

    let { id } = useParams();
    const [chapter, setChapter] = useState([])
    useEffect(() => { QUR.getChapter(id).then((data) => setChapter(data)) }, []);

    const [chapterInfo, setChapterInfo] = useState([])
    useEffect(() => { QUR.getChapterInfo(id).then((data) => setChapterInfo(data)) }, []);

    return (
        <>
        <ScrollToTop smooth color={CONF.COLORS.green} width="40" height="20"/>
            <Box borderRadius="lg" justify="center" align="center" p={4} m={4} bg={CONF.styles.quran} boxShadow='dark-lg'>

                <Flex align="center" justify="center" ml={3} mr={2} >

                    <Link to={"/quran"}>
                        <Tooltip label='Quran'>
                            <Box>
                                <Icon as={FaQuran} w={8} h={8} color="blue.20" />
                            </Box>
                        </Tooltip>
                    </Link>
                    <Spacer />
                    <Heading>{chapterInfo.transliteration}</Heading>
                    <Spacer />
                    <Link to={"/"}>
                        <Tooltip label='Home'>
                            <Box>
                                <Icon as={GoHome} w={8} h={8} color="blue.20" />
                            </Box>
                        </Tooltip>
                    </Link>
                </Flex>
            </Box>
            <Box borderRadius="lg" justify="center" align="center" p={2} m={4} bg={CONF.styles.body} boxShadow='dark-lg'>
                {chapter.map((data) => (
                    <List spacing={3} justify="left" align="left" key={data.id}>
                        <>
                        <Box borderRadius="lg" justify="center" align="left" p={2} m={3} bg={CONF.styles.color} boxShadow='dark-lg' key={data.id}>
                            <ListItem key={data.id}>
                                <Text fontSize={{ base: '18px', md: '40px', lg: '45px' }}>
                                <ListIcon as={MdCrop32} color='green.500' />
                                {data.text}
                                </Text>
                                <br />
                                <br />
                                <Text fontSize={{ base: '18px', md: '40px', lg: '45px' }}>
                                <ListIcon as={MdCrop32} color='green.500' />
                                {data.transliteration}
                                </Text>
                            </ListItem>
                        </Box>
                        </>
                    </List>
                ))}
            </Box>
        </>
    )

}