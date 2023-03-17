import { Box, Heading, Button, Flex, Spacer, Icon, Show, Hide, Tooltip } from '@chakra-ui/react'
import { GoOctoface } from "react-icons/go";
import { GiPrayerBeads } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";



export function Footer(CONF) {
    function github() { window.open(CONF.configuration.github) }
    function linkedin() { window.open(CONF.configuration.linkedin) }
    return (
        <>
            <Box borderRadius="lg" justify="center" align="center" p={4} m={4} bg={CONF.styles.footer} boxShadow='dark-lg'>
                <Flex ml={3} mr={2}>
                    <Hide below="sm"><Heading fontSize={{ base: '24px', md: '40px', lg: '45px' }}><Icon as={GiPrayerBeads} w={8} h={8} color="blue.20" /> Islam View</Heading></Hide>
                    <Spacer />
                    <Box>
                        <Tooltip label='Github'>
                            <Button colorScheme='blackAlpha' m={2} onClick={github}><Icon as={GoOctoface} w={8} h={8} color="blue.20" /></Button>
                        </Tooltip>
                        <Tooltip label='Linkedin'>
                            <Button colorScheme='blackAlpha' m={2} onClick={linkedin}><Icon as={FaLinkedinIn} w={8} h={8} color="blue.20" /></Button>
                        </Tooltip>
                    </Box>
                    <Show below="sm">
                        <Spacer />
                    </Show>
                </Flex>
            </Box>
        </>
    )
}