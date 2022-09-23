import { useState, useEffect } from "react";
import * as IAPI from './API/IslamicApi';
import * as WAPI from './API/WeatherApi';


//chakra ui imports
import { Box, Heading, Badge, Button, Flex, Spacer, Icon, Image } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { BiAnalyse } from "react-icons/bi";
import {
  Stat,
  StatLabel,
  StatHelpText,
} from '@chakra-ui/react'
import { Input, InputRightElement, InputGroup } from '@chakra-ui/react'
//chakra ui imports

function App() {

  let date = "16-09-2022";
  let location = "mula";
  let method = "5";

  let obj = {
    fecha: date,
    localizacion: location,
    metodo: method
  }


  const [salat, setSalat] = useState([])

  useEffect(() => {

    IAPI.IslamPrayerActualTime("mula").then((data) => setSalat(data))

  }, []);

  // const [extended, setExtended] = useState(0)

  // useEffect(() => {

  //   IAPI.IslamPrayerTimeExtended(obj).then((data) => setExtended(data))
  // }, []);

  const [current, setCurrent] = useState(0)
  const [currentCondition, setCurrentCondition] = useState(0)
  const [forecast, setForecast] = useState(0)
  const [forecasting, setForecasting] = useState(0)
  const [forecastDate, setForecastDate] = useState(0)
  const [local, setLocation] = useState(0)

  useEffect(() => { WAPI.getWeather().then((data) => setCurrent(data.current)) }, []);
  useEffect(() => { WAPI.getWeather().then((data) => setCurrentCondition(data.current.condition)) }, []);

  useEffect(() => { WAPI.getWeather().then((data) => setForecast(data.forecast)) }, []);
  useEffect(() => { WAPI.getForecast().then((data) => setForecasting(data.forecast)) }, []);
  useEffect(() => { WAPI.getForecast().then((data) => setForecastDate(data.date)) }, []);

  useEffect(() => { WAPI.getWeather().then((data) => setLocation(data.location)) }, []);
  const toast = useToast();
  const tp = {
    title: 'The Location for the Weather & Prayer Times is',
    variant: 'subtle',
    description: "Prayer: " + salat.address + " / Weather: " + local.name + ", " + local.region + ", " + local.country,
    status: 'info',
    duration: 9000,
    isClosable: true
  }
  console.log(salat)
  console.log(local)

  const header = "#FBF9FF";
  const body = "#9395D3";
  const color = "#B3B7EE";
  const wcolor = "#B3B7EE";
  const footer = "#A2A3BB";

  const [width , setWidth] = useState("32%");

  return (
    <>
        <Box borderRadius="lg" justify="center" align="center" p={4} m={4}  bg={header} boxShadow='inner'>
          <Flex align="center" ml={3} mr={2}>
            <Heading as='h2' size='2xl'>Islamic View</Heading>
            <Spacer />
            <Button bg="teal.100" onClick={() => toast(tp)}> <Icon as={BiAnalyse} w={8} h={8} color="blue.20" /></Button>
          </Flex>
        </Box>
      <Box borderRadius="lg" justify="center" align="center" p={4} m={4}  bg={body} boxShadow='dark-lg'>
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
        <Flex p={4} m={12}>

          <Box bg={wcolor} borderRadius="lg" justify="center" align="center" p={4} m={4} w={width} boxShadow='2xl'>
            <Heading>{forecastDate.uno}</Heading>
            <Stat mt={2}>
              <StatLabel>{forecasting.uno}</StatLabel>
              <StatHelpText>Updated {forecastDate.uno}</StatHelpText>
            </Stat>
          </Box>
          <Box bg={wcolor} borderRadius="lg" justify="center" align="center" p={4} m={4}  w={width} boxShadow='2xl'>
            <Heading>{forecastDate.dos}</Heading>
            <Stat mt={2}>
              <StatLabel>{forecasting.dos}</StatLabel>
              <StatHelpText>Updated {forecastDate.dos}</StatHelpText>
            </Stat>
          </Box>
          <Box bg={wcolor} borderRadius="lg" justify="center" align="center" p={4} m={4}  w={width} boxShadow='2xl'>
            <Heading>{forecastDate.tres}</Heading>
            <Stat mt={2}>
              <StatLabel>{forecasting.tres}</StatLabel>
              <StatHelpText>Updated {forecastDate.tres}</StatHelpText>
            </Stat>
          </Box>
        </Flex>
        <Box bg={color} borderRadius="lg" justify="center" align="center" p={4} m={12} boxShadow='2xl'>
          <Heading as='h2' size='2xl'>Prayer Times</Heading>
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
      <Box borderRadius="lg" justify="center" align="center" p={4} m={4}  bg={footer} boxShadow='dark-lg'>
        <Heading>Footer</Heading>
      </Box>
    </>
  )
}

export default App
