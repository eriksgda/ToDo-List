import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'>{

}

const InputTasks = (props: InputProps) => {
  return(
      <input {...props}/>
  )
};

export default InputTasks;