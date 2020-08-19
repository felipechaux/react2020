import React, { Fragment } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Form, Input, Button,Title } from "./styles";

export const UserForm = ({ onSubmit,title }) => {

    //estados locales
    //const [email,setEmail] = useState('')
    //const [password,setPassword] = useState('')
    //con hook
    const email = useInputValue('')
    const password = useInputValue('')


    //target referencia a campo
    /*value={email.value} onChange={email.onChange}*/
    return (
        <Fragment>
           <Title>{title}</Title>
           <Form onSubmit={onSubmit}>
                <Input placeholder='Email'  {...email} />
                <Input placeholder='Password' type='password' {...password} />
                <Button>{title}</Button>
            </Form>
        </Fragment>
    )

}