import Typed from 'react-typed';
import Description from './body'

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



export default function IndexPage() {


  return (
    <div>
              
      <div className="py-30">
<div className="flex justify-center">  <img src="https://cdn.discordapp.com/attachments/718205418723213382/733202847331647508/TDG.png" ></img></div>
     
        <h1 className="text-base text-5xl text-center">
        Need Help With
             <h1 className="gradient h-24 bg-gradient-to-r from-teal-400 to-blue-500">
                <TypedString />?
                <br />
   
            </h1>
            <a href="/invite" className="text-xl">https://discord.com/invite/xqUN8KY</a>
        </h1>
        <hr width="70%"></hr>
        <br />
        <br />

        <h1 className="txt-marg text-base text-4xl text-center">
          <div>
            <h1 className="text-3xl gradient text-2xl bg-gradient-to-r from-blue-400 to-red-500">Join the Developers Guild!</h1>
            <Description />
        </div>
      </h1>

    </div>
    </div>
  )
}
