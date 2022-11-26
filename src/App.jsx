import React, {useState} from 'react'
// import { Home } from './components';
import {Button, Flex, FormControl, Heading, Input, Text, VStack} from '@chakra-ui/react';
 

const App = () => {
  const [count, setCount]= useState({
    name: 'Mark',
    school: '',
  });
  
  const { name, school } = count;

  const [first, setfirst] = useState(0);
const [isTrue, setIsTrue] = useState(false);

  const stateUpdateHandler = () => {
    setCount((count) => {
      return {
        name: 'Dave',
        school: 'FAANSS',
      };
    });
    setIsTrue((prev) => !prev);
      setfirst((prev) =>prev + 1);
  };
  return (
    <>
    <Flex  
    border={'1px solid blue'}
    minHeight={'100vh'}
    alignItems={'center'}
    justifyContent={'center'}>
      <VStack>
      <Heading> {first} {school}
       {isTrue && (<h1>Login Page</h1>)}
      </Heading>
      <Text>{name}Have an account? Login Here
      
      </Text>
      <FormControl>
        <Input />
      </FormControl>
      <Button colorScheme={'red'} width="10em" onClick={stateUpdateHandler}>
        Submit
      </Button>
      </VStack>
    </Flex>
    </>
  );
};

export default App

