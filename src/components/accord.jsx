import {
    AccordionPanel
} from '@chakra-ui/react'

import { useState, useEffect } from "react";
import { Divider } from '@chakra-ui/react'
import {
    List,
    ListItem,
    ListIcon,
} from '@chakra-ui/react'

import { MdCrop32 } from "react-icons/md";

import * as QUR from '../API/QuranApi';

export function Accord(props) {

    const [chapter, setChapter] = useState([])
    useEffect(() => { QUR.getChapter(props.link).then((data) => setChapter(data)) }, []);

    return (
        <>
            {chapter.map((data) => (
                <AccordionPanel pb={4} key={data.id}>
                    <List spacing={3} justify="left" align="left">
                        <>
                            <ListItem key={data.id}>
                                <ListIcon as={MdCrop32} color='green.500' />
                                {data.text}
                                <Divider />
                                <ListIcon as={MdCrop32} color='green.500' />
                                {data.translation}
                                <Divider />
                                <ListIcon as={MdCrop32} color='green.500' />
                                {data.transliteration}
                            </ListItem>
                            <Divider />
                        </>
                    </List>
                </AccordionPanel>
            ))}
        </>
    )

}