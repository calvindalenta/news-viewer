import Card from './Card';

const meta = {
    title: 'Card',
    component: Card,
}

const data = {
    "source": {
        "id": "cnn",
        "name": "CNN"
    },
    "author": "Veronica Stracqualursi, CNN",
    "title": "Dignitaries gather at Washington National Cathedral for Colin Powell's funeral - CNN",
    "description": "The casket of the late Gen. Colin Powell has arrived at Washington National Cathedral, where former presidents, dignitaries and friends have gathered for the funeral service of the former secretary of state and chairman of the Joint Chiefs of Staff.",
    "url": "https://www.cnn.com/2021/11/05/politics/colin-powell-funeral/index.html",
    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211105115159-04-powell-funeral-super-tease.jpg",
    "publishedAt": "2021-11-05T16:40:12Z",
    "content": "(CNN)The casket of the late Gen. Colin Powell has arrived at Washington National Cathedral, where former presidents, dignitaries and friends have gathered for the funeral service of the former secret… [+3477 chars]"
}

export default meta

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
    data
}
