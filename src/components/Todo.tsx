import { ComponentProps } from "react";

interface TodoProps extends ComponentProps<'li'>{
  children: string
}

const Todo = (props: TodoProps) => {
  return(
    <li {...props}>{props.children}</li>
  )
}

export default Todo;
