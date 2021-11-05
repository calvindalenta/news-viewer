import { useState } from "react";
import Button from "./button/Button";
import Form from "./forms/Form/Form";
import FormAction from "./forms/FormAction/FormAction";
import FormHeader from "./forms/FormHeader/FormHeader";
import FormInput from "./forms/FormInput/FormInput";
import FormItemRow from "./forms/FormItemRow/FormItemRow";
import FormLabel from "./forms/FormLabel/FormLabel";
import FormSelect from "./forms/FormSelect/FormSelect";
import FormSubHeader from "./forms/FormSubHeader/FormHeader";

const provinces = {
    "Jawa Barat": ["Bandung", "Bekasi", "Bogor", "Depok", "Sukabumi"],
    "Sumatra Barat": ["Bukittinggi", "Padang", "Padang Panjang", "Pariaman", "Payakumbuh"]
}

export default function RegisterForm(props){

    const [selectedProvince, setSelectedProvince] = useState("Jawa Barat");

    function onChangeProvince(e){
        setSelectedProvince(e.target.value)
    }

    return (
        <Form>
            <FormHeader>Create New Account</FormHeader>
            <FormSubHeader>Before you can use our services, please create a new account</FormSubHeader>
            <FormItemRow>
                <FormLabel htmlFor="first-name">First Name</FormLabel>
                <FormInput
                    type="text"
                    id="first-name"
                    name="first-name"
                    placeholder="First name"
                />
            </FormItemRow>
            <FormItemRow>
                <FormLabel htmlFor="last-name">Last Name</FormLabel>
                <FormInput
                    type="text"
                    id="last-name"
                    name="last-name"
                    placeholder="Last name"
                />
            </FormItemRow>
            <FormItemRow>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johndoe@yourmail.com"
                />
            </FormItemRow>
            <FormItemRow>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                    type="password"
                    id="password"
                    name="password"
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
                <Button text="Reset" type="reset" />
                <Button primary text="Register" type="button" />
            </FormAction>
        </Form>
    );
}