import FormSelect from './FormSelect';

const meta = {
    title: 'Forms/FormSelect',
    component: FormSelect,
    argTypes: { onChange: { action: 'clicked' } },
}

export default meta

const Template = (args) => <FormSelect {...args} />;

const genders = [
    <option key="Male" value="Male">Male</option>,
    <option key="Female" value="Female">Female</option>
]

export const Gender = Template.bind({});
Gender.args = {
    children: genders
}

const provinces = [
    <option key="Jawa Barat" value="Jawa Barat">Jawa Barat</option>,
    <option key="Sumatra barat" value="Sumatra barat">Sumatra barat</option>
]

export const Province = Template.bind({});
Province.args = {
    children: provinces
}

const cities = [
    <option key="Bandung" value="Bandung">Bandung</option>,
    <option key="Bekasi" value="Bekasi">Bekasi</option>,
    <option key="Bogor" value="Bogor">Bogor</option>,
    <option key="Depok" value="Depok">Depok</option>,
    <option key="Sukabumi" value="Sukabumi">Sukabumi</option>,
]

export const City = Template.bind({});
City.args = {
    children: cities
}