import React, {useState} from 'react'
import { Checkbox, Stack, CheckboxGroup } from "@chakra-ui/react";

const Stacks = ({onChange}) => {
  const [checkedStack, setCheckedStack] = useState([])
  
  
  const stacksArray = [
    "Rails",
    "Redux",
    "React",
    "PostgreSql",
    "Vue",
    "Python",
    "MongDB",
  ];
  
  const handleChange = (event) => {
    let isChecked = event.target.checked;
    let value = event.target.value;

    let currentCheckedStack = checkedStack;
    let valueInCheckedStack = currentCheckedStack.includes(value);

    if (isChecked && !valueInCheckedStack) {
      currentCheckedStack.push(value);
    } else if (!isChecked && valueInCheckedStack) {
      currentCheckedStack.pop(value);
    }

    setCheckedStack(currentCheckedStack)
   
    onChange(checkedStack)
  }
  return (
    <Stack  spacing={10} direction="row">
      {stacksArray.map((stack, index) => (
        <Checkbox key={index} colorScheme="green" value={stack} onChange={(event) => handleChange(event)} >
          {stack}
        </Checkbox>
      ))}
    </Stack>
  );
}

export default Stacks
