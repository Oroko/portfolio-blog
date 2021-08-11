import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addPost} from '../actions/index'
import {
  Button,
  FormControl,
  FormLabel,
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


const  BlogInput =() => {
  const [post, setPost] = useState('')
  const dispatch = useDispatch()
  const handleChange = (event) => {
    setPost({
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addPost(post))
    setPost('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Title</label>
          <input type="text" onChange={handleChange} name="title" />
        </p>
        <p>
          <label>Content</label>
          <textarea
            name="content"
            cols="30"
            onChange={handleChange}
            rows="10"
          />
        </p>

        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default BlogInput
