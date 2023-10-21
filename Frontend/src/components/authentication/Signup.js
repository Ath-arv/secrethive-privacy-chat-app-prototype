import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  InputRightElement,
  Button,
  InputGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [show, setShow] = useState();

  const handleClick = () => setShow(!show);
  const submitHandler = () => {};
  return (
    <div>
      <VStack spacing="5px">
        {/* name: */}
        <FormControl id="first-name" isRequired>
          <FormLabel>First Name</FormLabel>
          <Input
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

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

        {/* confirm password */}
        <FormControl id="password" isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder="Confirm password"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        {/* submit */}
        <Button
          mt="2.5rem"
          w="100%"
          onClick={submitHandler}
          colorScheme="green"
        >
          Sign up
        </Button>
      </VStack>
    </div>
  );
};

export default Signup;
