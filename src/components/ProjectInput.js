
import React, {useState,} from 'react'
import { useDispatch } from "react-redux";
import { addProject } from '../actions/index'
import Stacks from '../components/Stacks'
import { IconButton } from "@chakra-ui/button";
import { FaPlus } from "react-icons/fa";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
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

const  ProjectInput = () => {
  const [project, setProject] = useState({
    title: '',
    image_url: '',
    github_url: '',
    description: '',
    stacks: []
  })
  
  const [isSaving, setSaving] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    console.log(event.target.value);
    setProject({ ...project, [event.target.name]: event.target.value });
  };
  
  const handleStackChange = (selectedStacks) => {
    console.log(selectedStacks)
    setProject({ ...project, stacks: selectedStacks });
  }

  const handleAddProject = () => {
    //event.preventDefault();
    dispatch(addProject(project));
    onClose();
    setProject("");
  };
  return (
    <>
      <IconButton
        icon={<FaPlus/>}
        onClick={onOpen}
        alignItems="center"
        colorScheme="teal"
        variant="outline"
        mb="10px"
      />
        
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay>
          <ModalContent maxW="50rem">
            <ModalHeader>Add new project</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Project Title</FormLabel>
                <Input
                  type="text"
                  onChange={(event) => handleChange(event)}
                  name="title"
                />
                <FormLabel>Project ImageUrl</FormLabel>
                <Input
                  name="image_url"
                  onChange={(event) => handleChange(event)}
                />
                <FormLabel>Project GithubUrl</FormLabel>
                <Input
                  name="github_url"
                  onChange={(event) => handleChange(event)}
                />
                <FormLabel>Project Description</FormLabel>
                <Textarea
                  name="description"
                  onChange={(event) => handleChange(event)}
                  height="200px"
                />
                <FormLabel>Project Stacks</FormLabel>
                <Stacks onChange={handleStackChange} />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <HStack spacing={4}>
                <Button onClick={onClose}>Close</Button>
                <Button
                  type="submit"
                  onClick={(event) => handleAddProject()}
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
}

export default ProjectInput
