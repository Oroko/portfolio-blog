import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../actions/index";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";

const BlogInput = () => {
  const [post, setPost] = useState({
    title: '',
    content:''
  });
  
  const [isSaving, setSaving] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log(event.target.value)
    setPost({...post,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddPost = () => {
    //event.preventDefault();
    dispatch(addPost(post));
    onClose()
    setPost("");
  };
  return (
    <>
      <Button onClick={onOpen} alignItems="center" colorScheme="teal">
        Add new Post
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay >
          <ModalContent maxW="50rem" >
            <ModalHeader>Add new post</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Post title</FormLabel>
                <Input
                  type="text"
                  onChange={(event) => handleChange(event)}
                  name="title"
                />
                <FormLabel>Post Content</FormLabel>
                <Textarea
                  name="content"
                  onChange={(event) => handleChange(event)}
                  height="325px"
                />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <HStack spacing={4}>
                <Button onClick={onClose}>Close</Button>
                <Button
                  type="submit"
                  onClick={(event) => handleAddPost()}
                  colorScheme="blue"
                  isLoading={isSaving}
                >
                  Save
                </Button>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
     
    </>
  );
};

export default BlogInput;
