import { useToast , Wrap ,Button} from '@chakra-ui/react'
import React from 'react'

export function ClosingToastExample(props) {
                    const toast = useToast()
                    const toastIdRef = React.useRef()
                
                    function addToast() {
                    toastIdRef.current = toast({ description: props.address })
                    }
  
    return (
      <Wrap>
        <Button onClick={addToast} type='button'>
          INFO
        </Button>
      </Wrap>
    )
  }