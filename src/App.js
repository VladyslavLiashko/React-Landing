
import './App.css';
import Header from './Components/Header/Header';
import Main from "./Components/Main/Main";
import Speakers from './Components/Speakers/Speakers';
import Events from './Components/Events/Events';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';

function App() {
  let obj = {


    header: {
      logo: "Convo",
      nav: {
        link1: "Solution",
        link2: "Pricing",
        link3: "Company",
        link4: "Help"
      },
      buttons:{
        login: "Log in",
        signup: "Sign up"
      }
    },


    main:{
      info:{
        h1: "Webinars",
        desc: "In our free time, we some times hold webinars with professionals centered around healing, friendships and family. Our users come to quality of the friendships in their lives. From learning how to find friends and ..."
      },
      description:{
        h1: "Strengthening Relationships",
        date: "Nov 27 2022",
        time: "5:30 PM",
        lastdesc: "This three part series will focus on strengthening your relationship with your partner. Topics will include managing stress, respite and taking time off to reconnect, and working together as a team",
        btn: "Get Ticked"
      }
    },


    speakers:{
      header:{
        h1: "Speakers",
        viewAll: "View all speakers"
      },
      info: "herapist share knowledge on building Friendships and and relationships with family.",
      students:{
        student1:{
          name:"Amaka Igwe",
          desc:"Student ambassador",
          place: "LA.NG"
        },
        student2:{
          name:"Debra Rowland",
          desc:"Family therapist",
          place: "LA.NG"
        }

      }
    },


    events:{
      title:"All events",
      desc:"Wiew all webinars",
      firstEvent:{
        h1:"Re-connting Family",
        date:"Nov 20th - 21st",
        info:"Learn more"
      },
      secondEvent:{
        h1:"Re-connting Family",
        date:"Nov 20th - 21st",
        info:"Learn more"
      },
      thirdEvent:{
        h1:"Re-connting Family",
        date:"Nov 20th - 21st",
        info:"Learn more"
      }
    },


    subscribe:{
      title:"Subscribe to our newsletter",
      desc:"Be notified about our events before everyone else"
    },


    footer:{
      logo:"Convo",
      linkTitles:{
        Company:"Company",
        Learn:"Learn",
        Legal:"Legal",
        Help:"Help",
        Socials:"Socials"
      },
      links:{
        firstBlock:{
          link1:"About us",
          link2:"Careers",
          link3:"Partners"
        },
        secondBlock:{
          link1:"How it works",
          link2:"Webinars",
          link3:"Works"
        },
        thirdBlock:{
          link1:"Privacy Policy",
          link2:"Terms & Conditions",
          link3:"Security"
        },
        fourthBlock:{
          link1:"FAQs",
          link2:"Custommer Support",
          link3:"Help Center"
        },
        fifthBlock:{
          link1:"Twitter",
          link2:"Facebook",
          link3:"Linkedin"
        }
      }
    }

  }
  return (
    <div>
      <Header data={obj} />
      <Main data ={obj} />
      <Speakers data = {obj} />
      <Events data={obj}/>
      <Subscribe data={obj}/>
      <Footer data ={obj}/>
    </div>
  );
}

export default App;
