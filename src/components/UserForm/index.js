import React, { Fragment } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Error,Form, Input,Title } from "./styles";
import { SubmitButton } from "../SubmitButton";
import { Layout } from "../Layout";

export const UserForm = ({ error,disabled,onSubmit,title }) => {

    //estados locales
    //const [email,setEmail] = useState('')
    //const [password,setPassword] = useState('')
    //con hook
    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = (event)=>{
        //evitar funcionamiento por defecto de formulario
        event.preventDefault()
        onSubmit({email:email.value,
            password:password.value})
    }

    //target referencia a campo
    /*value={email.value} onChange={email.onChange}*/
    return (
       <Layout title={title}>
           <Form disabled={disabled} onSubmit={handleSubmit}>
                {/*<Title>{title}</Title>*/}
                <Input disabled={disabled}  placeholder='Email'  {...email} />
                <Input disabled={disabled}  placeholder='Password' type='password' {...password} />
                <SubmitButton disabled={disabled} >{title}</SubmitButton>
            </Form>
    {error && <Error>{error}</Error>}
        </Layout>
    )

}