import Header from "../components/header/header";
import Container from "../components/container/Container";
import CardsList from "../components/cards/CardsList/CardsList";

export default function Home(props){
    return (
        <>
            <Header nav={{to: "/login", text: "Login"}}/>
            <Container>
                <CardsList articles={sample.articles}/>
            </Container>
        </>
    );
}

const sample = {
    "status": "ok",
    "totalResults": 38,
    "articles": [
        {
            "source": {
                "id": "the-wall-street-journal",
                "name": "The Wall Street Journal"
            },
            "author": "Akane Otani",
            "title": "Stock Futures Rise Ahead of Jobs Report - The Wall Street Journal",
            "description": "Monthly employment report showed pace of hiring picked up in October",
            "url": "https://www.wsj.com/articles/global-stock-markets-dow-update-11-05-2021-11636101479",
            "urlToImage": "https://images.wsj.net/im-429812/social",
            "publishedAt": "2021-11-05T12:32:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Jeff Cox",
            "title": "Job creation roars back in October as payrolls rise by 531,000 - CNBC",
            "description": "Nonfarm payrolls were expected to increase by 450,000 in October, according to economists surveyed by Dow Jones.",
            "url": "https://www.cnbc.com/2021/11/05/jobs-report-november-2021.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106950843-16330923942021-10-01t124423z_1280140862_rc201q9ut9be_rtrmadp_0_usa-economy-spending.jpeg?v=1633092451",
            "publishedAt": "2021-11-05T12:31:18Z",
            "content": "The U.S. jobs market snapped back in October, with nonfarm payrolls rising more than expected while the unemployment rate fell to 4.6%, the Labor Department reported Friday.\r\nNonfarm payrolls increas… [+3518 chars]"
        }
    ]
}