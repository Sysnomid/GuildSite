import Typed from 'react-typed';

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
        <br />
        <br />
        <h1 className="text-base text-6xl text-center">
        Need Help With
             <h1 className="gradient h-24 bg-gradient-to-r from-teal-300 to-blue-500">
                <TypedString />?
            </h1>       
            <a href="/invite" className="text-blue-300 text-2xl break-words">https://discord.com/invite/xqUN8KY</a>
        </h1>


        <hr width="70%"></hr>
        <br />
        <br />

      <div className="txt-marg text-base text-2xl text-center">
        <h1 class="text-4xl text-teal-500"> Join The Developers Guild </h1>
        <br />
        The Developer's Guild is a coalition of about 700 very active student and professional developers. <br />

        <br />
        <br />

        Everything ranging from hobbyists building a lone application to decades-old professionals designing data flows for large scale enterprises. <br />
        <br />
        <br />

        Seek help cracking your latest hurdle or engage in the Feynman technique where you reinforce your knowledge by teaching. Share your latest project, find collaborators, or just chat with individuals in the industry! <br />

        <br />
        <br/>

        Whether you've written 0 lines of code or thousands we would love to have you. <br />
        <br />
      </div>
      </div>
  )
}

/*
<h1 className="txt-marg text-base text-4xl text-center">
<h1 className="text-4xl text-teal-500">
Join the Developers Guild!</h1>
The Developer's Guild is a coalition of about 700 very active student and professional developers. <br />

<br />
<br />

Everything ranging from hobbyists building a lone application to decades-old professionals designing data flows for large scale enterprises. <br />
<br />
<br />

Seek help cracking your latest hurdle or engage in the Feynman technique where you reinforce your knowledge by teaching. Share your latest project, find collaborators, or just chat with individuals in the industry! <br />

<br />
<br/>

Whether you've written 0 lines of code or thousands we would love to have you. <br />
<br />
</h1>
*/