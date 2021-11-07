import CardsList from './CardsList';

const articles = [
    {
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
    },
    {
        "source": {
            "id": null,
            "name": "BuzzFeed News"
        },
        "author": "Leyla Mohammed",
        "title": "Kate Beckinsale Liked A Post About Her Ex Pete Davidson's Charm After People Questioned His Rumored Relationship With Kim Kardashian Following Their Dinner Dates - BuzzFeed News",
        "description": "Kate's subtle comment came hours after Kim and Pete were spotted out to dinner for the second time in a week.",
        "url": "https://www.buzzfeednews.com/article/leylamohammed/kate-beckinsale-likes-post-pete-davidson-kim-kardashian",
        "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2021-11/5/15/enhanced/00590a0f69b8/original-411-1636126503-25.jpg?crop=1243:651;7,0",
        "publishedAt": "2021-11-05T16:22:56Z",
        "content": null
    },
    {
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
]

const meta = {
    title: 'CardsList',
    component: CardsList,
}

export default meta

const Template = (args) => <CardsList {...args} />;

export const Default = Template.bind({});
Default.args = {
    articles: articles
}


