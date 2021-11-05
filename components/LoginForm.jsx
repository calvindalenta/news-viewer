import { useState } from "react";
import Link from "next/link";

import { isEmail, minLength8 } from "../lib/validate";

import Button from "./button/Button";
import Form from "./forms/Form/Form";
import FormAction from "./forms/FormAction/FormAction";
import FormHeader from "./forms/FormHeader/FormHeader";
import FormInput from "./forms/FormInput/FormInput";
import FormItemRow from "./forms/FormItemRow/FormItemRow";
import FormLabel from "./forms/FormLabel/FormLabel";
import FormSubHeader from "./forms/FormSubHeader/FormHeader";
import StyledLink from "./styled-link/StyledLink";

const initialState = { email: "", password: "" }

export default function LoginForm(props){

    const [form, setForm] = useState(initialState)
    const [err, setErr] = useState(initialState)

    function onInputChange(e){
        setForm(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    function onSubmit(e){
        e.preventDefault()
        setErr(prev => ({ ...prev, email: isEmail(form.email)}))
        setErr(prev => ({ ...prev, password: minLength8(form.password)}))
    }

    function onReset(e){
        setForm(initialState)
        setErr(initialState)
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormHeader>Login Account</FormHeader>
            <FormSubHeader>Please login to use our services</FormSubHeader>
            <FormItemRow error={err.email}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                    type="text"
                    id="email"
                    name="email"
                    placeholder="johndoe@yourmail.com"
                    value={form.email}
                    onChange={onInputChange}
                />
            </FormItemRow>
            <FormItemRow error={err.password}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={onInputChange}
                />
            </FormItemRow>
            <FormAction>
                <Button text="Reset" type="reset" onClick={onReset}/>
                <Button primary text="Register" type="submit" />
                <FormSubHeader>
                    Don&apos;t have an account yet? {' '}
                    <StyledLink href="/register">Register here</StyledLink>
                </FormSubHeader>
            </FormAction>
        </Form>
    );
}