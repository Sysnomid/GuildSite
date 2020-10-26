
function Card(props){
    return (
        <>
            <div className="bg-blue-900 text-teal-500 p-6 ml-6 mb-6 mr-6 rounded-2xl">
                <img class="h-40 w-40 rounded-full  mx-auto" src={props.ImgLink}/>
                <h1 className="text-3xl">
                    <br />{props.Name}
                    <h1 className="text-2xl text-black">
                        {props.Tag}
                    </h1>
                </h1>
            </div>
        </>
    )
}

export default function Contact(){
    return (
        <>

        <br />
        <div className="text-base text-4xl text-center break-words">
        <h1><b>Contact Us</b></h1>
        <p className="txt-marg text-xl">Discord Usernames & Tags of our Trustees</p>
        <br />

        <div id="contactList" className="flex flex-wrap justify-center">
            <Card Name="Sysnomid" Tag="#8167" ImgLink="https://media.discordapp.net/attachments/724975874520383519/724981072370204762/sysnomid.png"/>
            <Card Name="Imbaker1234" Tag="#0903" ImgLink="https://cdn.discordapp.com/avatars/244517532906684416/bc2e4e13e2cff3f691e45b8ad4882bb6.png"/>
            <Card Name="[object Object]" Tag="#0001" ImgLink="https://avatars3.githubusercontent.com/u/37044997?s=400&u=45f88d8a6b531b27ae25b74cd18e278aa8a42bdc&v=4"/>
            <Card Name="Bluenix" Tag="#7543" ImgLink="https://media.discordapp.net/attachments/718727259489304656/734524135723761765/bluephoenixkrita.png"/>
        </div>
        
        </div>
        </>
    )
}