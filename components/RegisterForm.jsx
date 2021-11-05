import { useState } from "react";

import { isEmail, minLength8 } from "../lib/validate";

import Button from "./button/Button";
import Form from "./forms/Form/Form";
import FormAction from "./forms/FormAction/FormAction";
import FormHeader from "./forms/FormHeader/FormHeader";
import FormInput from "./forms/FormInput/FormInput";
import FormItemRow from "./forms/FormItemRow/FormItemRow";
import FormLabel from "./forms/FormLabel/FormLabel";
import FormSelect from "./forms/FormSelect/FormSelect";
import FormSubHeader from "./forms/FormSubHeader/FormHeader";
import StyledLink from "./styled-link/StyledLink";

const provinces = {
    "Jawa Barat": ["Bandung", "Bekasi", "Bogor", "Depok", "Sukabumi"],
    "Sumatra Barat": ["Bukittinggi", "Padang", "Padang Panjang", "Pariaman", "Payakumbuh"]
}

const initialState = {
    "first-name": "",
    "last-name": "",
    email: "",
    password: ""
}

export default function RegisterForm(props){

    const [selectedProvince, setSelectedProvince] = useState("Jawa Barat");
    const [form, setForm] = useState(initialState)
    const [err, setErr] = useState(initialState)

    function onInputChange(e) {
        setForm(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    function onSubmit(e) {
        e.preventDefault()
        setErr(prev => ({ ...prev, "first-name": minLength8(form["first-name"])}))
        setErr(prev => ({ ...prev, "last-name": minLength8(form["last-name"])}))
        setErr(prev => ({ ...prev, email: isEmail(form.email)}))
        setErr(prev => ({ ...prev, password: minLength8(form.password)}))
    }

    function onReset(e) {
        setForm(initialState)
        setErr(initialState)
    }

    function onChangeProvince(e){
        setSelectedProvince(e.target.value)
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormHeader>Create New Account</FormHeader>
            <FormSubHeader>Before you can use our services, please create a new account</FormSubHeader>
            <FormItemRow error={err["first-name"]}>
                <FormLabel htmlFor="first-name">First Name</FormLabel>
                <FormInput
                    type="text"
                    id="first-name"
                    name="first-name"
                    placeholder="First name"
                    value={form["first-name"]}
                    onChange={onInputChange}
                />
            </FormItemRow>
            <FormItemRow error={err["last-name"]}>
                <FormLabel htmlFor="last-name">Last Name</FormLabel>
                <FormInput
                    type="text"
                    id="last-name"
                    name="last-name"
                    placeholder="Last name"
                    value={form["last-name"]}
                    onChange={onInputChange}
                />
            </FormItemRow>
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
            <FormItemRow>
                <FormLabel htmlFor="gender">Gender</FormLabel>
                <FormSelect>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </FormSelect>
            </FormItemRow>
            <FormItemRow>
                <FormLabel htmlFor="Province">Province</FormLabel>
                <FormSelect onChange={onChangeProvince}>
                    {Object.keys(provinces).map(province => {
                        return <option key={province} value={province}>{province}</option>
                    })}
                </FormSelect>
            </FormItemRow>
            <FormItemRow>
                <FormLabel htmlFor="City">City</FormLabel>
                <FormSelect>
                    {provinces[selectedProvince].map(city => {
                        return <option key={city} value={city}>{city}</option>
                    })}
                </FormSelect>
            </FormItemRow>
            <FormAction>
                <Button text="Reset" type="reset" onClick={onReset}/>
                <Button primary text="Register" type="submit" />
                <FormSubHeader>
                    Already have an account? {' '}
                    <StyledLink href="/login">Login here</StyledLink>
                </FormSubHeader>
            </FormAction>
        </Form>
    );
}