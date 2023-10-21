import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  InputRightElement,
  Button,
  InputGroup,
} from "@chakra-ui/react";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState();

  const handleClick = () => setShow(!show);
  const submitHandler = () => {};
  return (
    <div>
      <VStack spacing="5px">
        {/* email */}
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter your email id"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        {/* password */}
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Enter your password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        {/* submit */}
        <FormControl>
          <Button
            mt="2.5rem"
            w="100%"
            onClick={submitHandler}
            colorScheme="blue"
          >
            Login
          </Button>

          {/* get guest Credentials button */}
          <Button
            variant={"solid"}
            colorScheme="red"
            w="100%"
            mt="15"
            onClick={() => {
              setEmail("guest@example.com");
              setPassword("123456");
            }}
          >
            Get guest user Credentials
          </Button>
        </FormControl>
      </VStack>
    </div>
  );
};

export default Login;
