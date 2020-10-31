import Image from 'next/image'

function Card(props){
    return (
        <>
            <div className="bg-blue-900 text-teal-500 p-6 ml-6 mb-6 mr-6 rounded-2xl">
                <img class="h-40 w-40 rounded-full  mx-auto" src={props.ImgLink}/>
                <h1 className="text-3xl">
                    <br />{props.Name}
                    <h1 className="text-2xl text-gray-400 mb-5">
                        {props.Tag}
                    </h1>
                    <h1 className="text-2xl text-gray-400">
                        {props.Email}
                    </h1>
                </h1>
            </div>
        </>
    )
}

export default function Contact(){
    return (
        <>

        <div className="txt-marg text-base mt-5 text-center break-words">
            
            <h1 className="text-5xl">
                <b>Contact Us</b>
            </h1>
                
            <br />
    
            <div className="break-words">
                <h1 className="text-4xl mb-2">
                    Main Email:
                </h1>
                <a href="mailto:trustee@thedevsguild.com" className="text-2xl">
                    <i className="fa fa-envelope-o fa-2x"></i>
                    <p className="text-blue-500">trustee@thedevsguild.com</p>
                </a> 
                <br />
            </div>

            <p className="txt-marg mb-5 text-3xl break-words"><b>Trustee Discord & Email</b></p>
                <div id="contactList" className="flex mb-20 ml-30 mr-30 flex-wrap justify-center">
                    <Card Name="Sysnomid" Tag="#8167" Email="sysnomid@protonmail.com" ImgLink="https://media.discordapp.net/attachments/724975874520383519/724981072370204762/sysnomid.png"/>
                    <Card Name="Imbaker1234" Email="lmbaker1234@gmail.com" Tag="#0903" ImgLink="https://cdn.discordapp.com/avatars/244517532906684416/bc2e4e13e2cff3f691e45b8ad4882bb6.png"/>
                    <Card Name="[object Object]" Tag="#0001" Email="object@objectobject.ca" ImgLink="https://avatars3.githubusercontent.com/u/37044997?s=400&u=45f88d8a6b531b27ae25b74cd18e278aa8a42bdc&v=4"/>
                </div>
        </div>
        </>
    )
}
