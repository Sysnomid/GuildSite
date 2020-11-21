import Typed from 'react-typed';
import Description from './description'
import { Component } from 'react'

class TypedString extends Component {
  render(){
    return (
      <Typed
        strings={
              ["SQL",
              "Python",
              "Javascript",
              "Web Design",
              ".NET",
              "Rust",
              "C",
              "C++",
              "Java",
              "Bash",
              "Powershell",
              "Devops",
              "Angular",
              "React",
              "Vue"]
        }
        typeSpeed={70}
        backSpeed={70}
        loop
    />
    )
  }
}

function HomeHeader(){
  return (
    <>  
        <div id="sec1" className="bg-blue-900 pt-10 pb-10">
          
          <h1 className="text-base text-5xl text-center break-words font-bold">
              Need Help With
              <h1 className="font-bold gradient h-24 bg-gradient-to-r from-teal-300 to-blue-500 break-words">
              <TypedString />?
          </h1>       

           <a href="https://discord.gg/xqUN8KY" className="mb-20">  
              <button className="text-xl font-bold break-word bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                 <i className="fa fa-discord fa-2x"></i>
                 <br /> 
                  <strong>Discord Invite</strong>
              </button>
           </a>

          </h1>
        </div>
    </>
  )
}


export default function Home() {
  return (
    <>
    <div>
        <HomeHeader />
        <Description />
    </div>
    </>
  )
}
