import Article from './Article';

const article = {
    "source": {
        "id": "the-verge",
        "name": "The Verge"
    },
    "author": "Alice Newcome-Beill, Antonio G. Di Benedetto",
    "title": "The PS5 and Xbox Series X are available at Walmart today - The Verge",
    "description": "Walmart has announced restocks of the Playstation 5 and Xbox Series X, kicking off at 3PM ET / 12PM PT on its website. Availability is first come, first served, so you’ll have to act fast.",
    "url": "https://www.theverge.com/2021/11/5/22684674/sony-playstation-5-ps5-xbox-series-x-xsx-restock-availability",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/zjoaWgrNqqmCCoo00ypQtl4Itxc=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22509873/acastro_210511_1777_psRestock_0004.jpg",
    "publishedAt": "2021-11-05T15:39:16Z",
    "content": "Its not every day we see a restock of both hard-to-get consoles from one retailer\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nIllustration by … [+5594 chars]"
}

const meta = {
    title: 'Article',
    component: Article,
}

export default meta

const Template = (args) => <Article {...args} />;

export const Default = Template.bind({});
Default.args = {
    article
}