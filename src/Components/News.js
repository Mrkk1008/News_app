import React, { Component } from "react";
import NewsItems from "./NewsItems";
//import PropTypes from 'prop-types'

class News extends Component {
  articles = [
    {
      source: { id: null, name: "News18" },
      author: "Bharvi Dasson",
      title:
        "Coronavirus LIVE Updates: India Clocks 27,176 Fresh Cases in 24 Hrs; No New Cases in 60 UP Dists, Says CM - News18",
      description:
        "Coronavirus LIVE Updates: In the past 24 hours, India recorded 27,1776 cases, as per the health ministry's data.",
      url: "https://www.news18.com/news/india/coronavirus-live-updates-india-worlds-misinformation-covid-joe-biden-jabbing-70-world-mizoram-kerala-positivity-rate-4204247.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2021/09/dharavi-slum-covid-163155854916x9.jpg",
      publishedAt: "2021-09-15T04:31:32Z",
      content:
        "Today's Data Highlights \r\n- 27.18k new cases, 284 new deaths, 38.01k new recoveries, 11.1k dip in active cases\r\n- Deaths below 400 for the 13th consecutive day. 7-day-moving average of new deaths (29… [+981 chars]",
    },
    {
      source: { id: null, name: "News18" },
      author: "News18",
      title:
        "Dream Home on Red planet? Scientists Develop Cosmic Concrete to Build House on Mars - News18",
      description:
        "Planning to build a house on Mars may now be easy as scientists have created a concrete-like material made of extraterrestrial dust along with the blood, sweat and tears of astronauts.",
      url: "https://www.news18.com/news/buzz/dream-home-on-red-planet-scientists-develop-cosmic-concrete-to-build-house-on-mars-4204457.html",
      urlToImage:
        "https://images.news18.com/ibnlive/uploads/2021/09/house-on-mars-163167787416x9.png",
      publishedAt: "2021-09-15T03:55:51Z",
      content:
        "Planning to build a house on Mars may now be easy as scientists have created a concrete-like material made of extraterrestrial dust along with the blood, sweat and tears of astronauts. Transporting e… [+2390 chars]",
    },
    {
      source: { id: null, name: "Livemint" },
      author: "Livemint",
      title:
        "Dengue outbreak: From Uttar Pradesh to MP, viral fever wreaks havoc across India - Mint",
      description:
        "In Firozabad, 60 children have died due to dengue, and 465 children are still admitted to the child ward of the medical college in the district",
      url: "https://www.livemint.com/news/india/dengue-outbreak-from-uttar-pradesh-to-mp-viral-fever-wreaks-havoc-across-india-11631671439168.html",
      urlToImage:
        "https://images.livemint.com/img/2021/09/15/600x338/20210908-DLI-SKH-MN-Fumigation-3-0_1631677106766_1631677142328.jpg",
      publishedAt: "2021-09-15T03:47:35Z",
      content:
        "Several states in the country are grappling with an outbreak of dengue fever. However, Uttar Pradesh is the worst-affected state from dengue. On Wednesday, the northern state's Prayagraj district rep… [+3730 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "iPhone 13 and 13 Mini, New iPad Mini, 9th Gen iPad, Watch Series 7 Launched |Apple Event Latest News - CNN-News18",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9UlhlemhCX2t4cjjSAQA?oc=5",
      urlToImage: null,
      publishedAt: "2021-09-15T03:42:34Z",
      content: null,
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "Thousands Of Covid-Like Infections Show Risk Of Next Pandemic - NDTV",
      description:
        "Hundreds of thousands of people may be infected annually by animals carrying coronaviruses related to the one that causes Covid-19 each year in China and Southeast Asia, according to a study emphasizing the ongoing pandemic threat from spillover even",
      url: "https://www.ndtv.com/world-news/thousands-of-covid-like-infections-show-risk-of-next-pandemic-2541223",
      urlToImage:
        "https://c.ndtvimg.com/2021-09/rqid1ldo_risk-of-next-pandemic-bloomberg-_625x300_15_September_21.jpg",
      publishedAt: "2021-09-15T03:27:56Z",
      content:
        "No evidence supporting the coronavirus lab-leak theory has emerged.\r\nHundreds of thousands of people may be infected annually by animals carrying coronaviruses related to the one that causes Covid-19… [+4063 chars]",
    },
    {
      source: { id: null, name: "GSMArena.com" },
      author: "Ricky",
      title:
        "Nintendo Switch lineup updated to enable Bluetooth audio - GSMArena.com news - GSMArena.com",
      description:
        "After more than four years since its release, the Switch gains a feature it should have launched with. There are some limitations, though.",
      url: "https://www.gsmarena.com/nintendo_switch_lineup_updated_to_enable_bluetooth_audio-news-50944.php",
      urlToImage:
        "https://fdn.gsmarena.com/imgroot/news/21/09/nintendo-switch-gets-bluetooth-audio-streaming/-476x249w4/gsmarena_000.jpg",
      publishedAt: "2021-09-15T03:01:58Z",
      content:
        "On Tuesday, Nintendo pushed an OTA update to both Nintendo Switch and Nintendo Lite that enable a widely-requested feature. Bluetooth Audio streaming will now be possible with the handheld console th… [+1520 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "hindustantimes.com",
      title:
        "Afghanistan on brink of collapse, Taliban fighters surviving on donation: Report - Hindustan Times",
      description:
        'The United Nations said on Tuesday that four million Afghans are facing "a food emergency" and the majority live in rural areas where $36 million is urgently needed for the coming months to ensure the planting of winter wheat, feed for livestock, and cash ass…',
      url: "https://www.hindustantimes.com/world-news/afghanistan-on-brink-of-collapse-taliban-fighters-surviving-on-donation-report-101631674655395.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2021/09/15/1600x900/Queue_outside_a_bank_in_Afghanistan_1631674737730_1631674737837.JPG",
      publishedAt: "2021-09-15T03:00:45Z",
      content:
        "Since its takeover by the Taliban, Afghanistan has been facing cash crunch, with global aids freezing and daily limits set on withdrawal from bank accounts. Now, a report in New York Post has claimed… [+2484 chars]",
    },
    {
      source: { id: null, name: "Livemint" },
      author: "Ravi Prakash Kumar",
      title:
        "Ola electric scooter sale starts. Here is a guide to complete your booking - Mint",
      description:
        "Customers who have reserved a scooter can convert that to a purchase by paying the remaining amount",
      url: "https://www.livemint.com/auto-news/ola-electric-scooter-sale-today-4-step-guide-to-complete-your-booking-11631672327812.html",
      urlToImage:
        "https://images.livemint.com/img/2021/09/15/600x338/Screenshot_(333)_1626960072612_1631673071691.png",
      publishedAt: "2021-09-15T02:52:00Z",
      content:
        "Ola electric scooters will finally go on sale Wednesday, a week after the company postponed its sale due to technical difficulties in making the official website for purchases live for customers. Ola… [+2447 chars]",
    },
    {
      source: { id: null, name: "The Sentinel Assam" },
      author: "Sentinel Digital Desk",
      title:
        "SpaceX launches 51 Starlink internet satellites since May - Sentinelassam - The Sentinel Assam",
      description:
        "SpaceX on Tuesday launched its first full stack of 51 Starlink broadband satellites since May, the...",
      url: "https://www.sentinelassam.com/international/spacex-launches-51-starlink-internet-satellites-since-may-554866",
      urlToImage:
        "https://assets.sentinelassam.com/h-upload/2021/09/15/254751-space.jpg",
      publishedAt: "2021-09-15T02:36:37Z",
      content:
        "SAN FRANCISCO: SpaceX on Tuesday launched its first full stack of 51 Starlink broadband satellites since May, the media reported.\r\nThe satellites blasted off on a Falcon 9 rocket from Space Launch Co… [+1866 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title:
        "Buzzing Stocks: Zee Entertainment Enterprises, Ami Organics, Esab India, and other stocks in news today - Moneycontrol.com",
      description:
        "Stocks In the News: Check out the companies making the biggest headlines before the opening bell.",
      url: "https://www.moneycontrol.com/news/photos/business/stocks/buzzing-stocks-zee-entertainment-enterprises-ami-organics-esab-india-and-other-stocks-in-news-today-7467021.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2021/03/BUZZING-STOCKS-770x433.jpg",
      publishedAt: "2021-09-15T02:32:27Z",
      content: null,
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "hindustantimes.com",
      title:
        "‘He’ll play a bigger role in the future’: Balaji names ‘once-in-a-generation fast bowler’ of Team India - Hindustan Times",
      description:
        "Former India pacer Laxmipathy Balaji spoke highly of Jasprit Bumrah and heaped praise on the latter's skillset to take up a leadership role in the bowling attack. | Cricket",
      url: "https://www.hindustantimes.com/cricket/hell-play-a-bigger-role-in-the-future-balaji-names-once-in-a-generation-fast-bowler-of-team-india-101631672561664.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2021/09/15/1600x900/LAH6m0PR_1621738444061_1631672927370.jpg",
      publishedAt: "2021-09-15T02:30:29Z",
      content:
        "Former India pacer Laxmipathy Balaji has lauded Jasprit Bumrahs bowling ability in all three formats of the game. The latter has evolved as one of the finest fast bowlers in the Indian set-up after m… [+2424 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: null,
      title: "Top 10 things to know before the market opens - Moneycontrol.com",
      description:
        "Trends on SGX Nifty indicate a cautious opening for the index in India with a 17-points gain.",
      url: "https://www.moneycontrol.com/news/business/markets/top-10-things-to-know-before-the-market-opens-111-7467271.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2017/08/sensex_NSE_BSE_Stocks_Stock_market_sensex1-770x433.jpg",
      publishedAt: "2021-09-15T02:28:56Z",
      content:
        "The Indian stock market is expected to open on a cautious note. Trends on SGX Nifty indicate a positive opening for the index in India with a 17-point gain.\r\nThe BSE Sensex rose 69.33 points to 58,24… [+5128 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Arani Basu",
      title:
        "Wrong to think about India selection while playing IPL: Sanju Samson - Times of India",
      description:
        "Cricket News: Every time the IPL comes around, the spotlight falls on Sanju Samson. Each edition raises his stock. It's taken eight seasons for Samson to know how t",
      url: "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/wrong-to-think-about-india-selection-while-playing-ipl-sanju-samson/articleshow/86219138.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-86219127,width-1070,height-580,imgsize-59656,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2021-09-15T02:25:00Z",
      content:
        "Wrong to think about India selection while playing IPL: Sanju Samson",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Reuters",
      title:
        "US top general secretly called China over fears Trump could spark war, says new book - The Indian Express",
      description:
        'Former US president Donald Trump, in a statement, cast doubt in the story, calling it "fabricated."',
      url: "https://indianexpress.com/article/world/us-top-general-secretly-called-china-over-fears-trump-could-spark-war-says-book-7509547/",
      urlToImage: "https://images.indianexpress.com/2021/09/trump-.jpg",
      publishedAt: "2021-09-15T02:16:28Z",
      content:
        "The top US general secretly called his Chinese counterpart twice over concerns then-President Donald Trump could spark a war with China as his potential election loss loomed and in its aftermath, the… [+2459 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Neha Banka",
      title:
        "Explained: The importance of North Korea’s first ‘strategic’ cruise missile test - The Indian Express",
      description:
        'According to a Popular Science report from 2013, cruise missiles “are fast-moving, guided bombs that soar at a very low trajectory, parallel to the ground".',
      url: "https://indianexpress.com/article/explained/explained-importance-of-north-korea-first-strategic-cruise-missile-tests-7508564/",
      urlToImage:
        "https://images.indianexpress.com/2021/09/2021-09-13T182709Z_1602088617_RC26PP9OP2Z0_RTRMADP_3_USA-WHITE-HOUSE-NORTH-KOREA.jpg",
      publishedAt: "2021-09-15T01:48:35Z",
      content:
        "There is nothing unusual about this test, but what we need to understand is that the North Koreans have tested a long-range cruise missile which is of strategic relevance for a particular region, sai… [+3207 chars]",
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title: "iPhone 13 Apple Event | The leaks were wrong - Digital Trends",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9em5OSjFVR09MTTTSAQA?oc=5",
      urlToImage: null,
      publishedAt: "2021-09-15T01:45:03Z",
      content: null,
    },
    {
      source: { id: null, name: "India.com" },
      author: "Reuters",
      title:
        "Economic crisis in Afghanistan: One month after fall of Kabul, Taliban face challenges - Zee News",
      description:
        "A month after seizing Kabul, the Taliban face daunting problems as they seek to convert their lightning military victory into a durable peacetime government.",
      url: "https://zeenews.india.com/india/economic-crisis-in-afghanistan-one-month-after-fall-of-kabul-taliban-face-challenges-2394003.html",
      urlToImage:
        "https://english.cdn.zeenews.com/sites/default/files/2021/09/15/970636-talibanblockairport-reuters.jpg",
      publishedAt: "2021-09-15T01:42:05Z",
      content:
        "Kabul: A month after seizing Kabul, the Taliban face daunting problems as they seek to convert their lightning military victory into a durable peacetime government. After four decades of war and the … [+3473 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "TIMESOFINDIA.COM",
      title:
        "Bigg Boss OTT: Nishant Bhatt questions Neha Bhasin about her relationship with Pratik Sehajpal; she says, - Times of India",
      description:
        "Nishant Bhat threw the same question at Pratik Sehajpal who refused to answer it then and walked away. After a whil",
      url: "https://timesofindia.indiatimes.com/tv/news/hindi/bigg-boss-ott-nishant-bhatt-questions-neha-bhasin-about-her-relationship-with-pratik-sehajpal-she-says-i-would-have-dated-him-if-we-met-when-i-wasnt-married/articleshow/86211523.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-86211479,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-36152/86211479.jpg",
      publishedAt: "2021-09-15T01:30:00Z",
      content: null,
    },
    {
      source: { id: null, name: "India.com" },
      author: "Zee Media Bureau",
      title:
        "JEE Main Results 2021 declared on jeemain.nta.nic.in; meet all rank 1 holders - Zee News",
      description:
        "After much delay, the Joint Entrance Exam - JEE Main results 2021 for the fourth and last session was declared late on Tuesday.",
      url: "https://zeenews.india.com/india/jee-main-results-2021-declared-on-jeemain-nta-nic-in-meet-all-rank-1-holders-2394002.html",
      urlToImage:
        "https://english.cdn.zeenews.com/sites/default/files/2021/09/15/970635-results-4.gif",
      publishedAt: "2021-09-15T01:29:14Z",
      content:
        "NEW DELHI: After much delay, the Joint Entrance Exam - JEE Main results 2021 for the fourth and last session was declared late on Tuesday. A record-high number of 44 students have obtained 100 percen… [+1860 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "Liz Mathew",
      title:
        "Choice of CMs shows BJP now sticking to caste calculations - The Indian Express",
      description:
        "After Uttarakhand and Karnataka, the most recent example is Gujarat, where the BJP went with a Patidar, bowing to a long-standing demand of the dominant community, in place of Vijay Rupani.",
      url: "https://indianexpress.com/article/india/choice-of-cms-shows-bjp-now-sticking-to-caste-calculations-7509426/",
      urlToImage: "https://images.indianexpress.com/2021/09/BJP-CMs.jpg",
      publishedAt: "2021-09-15T01:26:58Z",
      content:
        "HAVING once pointedly chosen leaders from non-dominant castes in states as its chief ministers, the BJP appears to have had a change of heart. Ahead of several Assembly elections, it has brought in n… [+4207 chars]",
    },
  ];

  constructor() {
    super();
    console.log("Hello i am constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1e5c31851ba1418d865b8564faa9d3ec";
    let data = await  fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({articles: parseData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsHunt - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItems
                title={element.title?element.title.slice(0,40):""}
                description={element.description?element.description.slice(0, 80):""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>;
          })}
        </div>
      </div>
    );
  }
}

export default News;
