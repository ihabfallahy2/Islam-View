import { useState, useEffect } from "react";

import { ScrollToTop } from './ScrollToTop'


import { Text, Box, Heading, Tooltip, Icon, Spacer, List, ListItem, ListIcon, Flex } from '@chakra-ui/react'

import { Link, useParams } from "react-router-dom";


/**
 *import react icons
 */
import { GoHome } from "react-icons/go";
import { FaQuran, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdCrop32 } from "react-icons/md";


export function Accord(CONF) {
    const ISLAM_CHAPTER_API_URL = CONF.QURAN.chapter;
    let { id } = useParams();

    const [chapter, setChapter] = useState([])
    useEffect(() => {
        (async function () {
            try {
                let url = ISLAM_CHAPTER_API_URL.replace("{}", id);
                const response = await fetch(url);
                const data = await response.json();
                setChapter(data.verses);

            } catch (err) {
                console.error(err);
            }
        })();
    }, [id]);

    const [chapterInfo, setChapterInfo] = useState([])
    useEffect(() => {
        (async function () {
            try {
                let url = ISLAM_CHAPTER_API_URL.replace("{}", id);
                const response = await fetch(url);
                const data = await response.json();
                setChapterInfo(data);

            } catch (err) {
                console.error(err);
            }
        })();
    }, [id]);

    function menos(id) {
        let num = Number(id) - 1;
        return num
    }

    function mas(id) {
        let num = Number(id) + 1;
        return num
    }

    function onScrollEnd() {
        console.log('Scroll ended')
    }

    function onScrolling(offsetTop) {
        console.log(offsetTop)

    }

    return (
        <>
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
                <Box borderRadius="lg" justify="center" align="center" p={2} m={3} bg={CONF.styles.color} boxShadow='dark-lg'>
                    <Flex align="center" justify="center" ml={3} mr={2} >
                        <Link to={`/quran/chapter/${id > 1 ? menos(id) : 1}`}>
                            <Box>
                                <Icon as={FaChevronLeft} w={8} h={8} color="blue.20" />
                            </Box>
                        </Link>

                        <Spacer />

                        <Link to={`/quran/chapter/${mas(id)}`}>
                            <Box>
                                <Icon as={FaChevronRight} w={8} h={8} color="blue.20" />
                            </Box>
                        </Link>
                    </Flex>
                </Box>
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
            <ScrollToTop onScrollEnd={onScrollEnd} onScrolling={onScrolling} />
        </>
    )

}