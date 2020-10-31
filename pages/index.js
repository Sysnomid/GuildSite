import Typed from 'react-typed';
import CountUp from 'react-countup';

class TypedString extends React.Component {
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
        <div id="sec1" className="bg-blue-900">
          <br />
          <br />

          <h1 className="text-base text-5xl text-center break-words font-bold">
              Need Help With
              <h1 className="font-bold gradient h-24 bg-gradient-to-r from-teal-300 to-blue-500 break-words">
              <TypedString />?
          </h1>       

            <a href="https://discord.gg/xqUN8KY" className="mb-20">  
              <button className="text-xl font-bold break-word bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                <i class="fa fa-discord fa-2x mb-2" /> <br /> 
                  <strong>Discord Invite</strong>
              </button>
            </a>

          <br />
          <br />

          </h1>

        </div>
    </>
  )
}

function Description(){
  return (
    <>
      <div id="sec2" className="bg-gray-900 text-center">        
        <br />
        <br />
       
        <h1 class="text-4xl text-teal-500 mb-10"><b>Join The Developers Guild!</b></h1>     

       <div className="txt-marg text-base">     
 
              <div id="statement" className="flex-col justify-center flex text-2xl">
                
                  <div className="mb-6">
                  The Developer's Guild is a community of about <strong className="font-bold">1000</strong> very active student and professional developers. 
                  </div>

                  <div className="mb-6">
                  Everything ranging from hobbyists building a lone application to decades-old professionals designing data flows for large scale enterprises. 
                  </div>

                  <div className="mb-6">
                  Seek help cracking your latest hurdle or engage in the Feynman technique where you reinforce your knowledge by teaching. Share your latest project, find collaborators, or just chat with individuals in the industry! <br />
                  </div>

                  <div className="mb-20">
                  Whether you've written 0 lines of code or thousands we would love to have you. 
                  </div>
                  
              </div>

      
      </div>


 
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
