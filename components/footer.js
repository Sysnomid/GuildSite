let Year = new Date().getFullYear()

export default function Footer(){
    return (
        <>
            <br />
            <hr width="0"/>
            <footer className="h-auto bg-gray-800 bg-opacity-30">
                <br />
                <div className="txt-marg flex justify-center items-center">
                &copy; Copyright The Developers Guild { Year }
               
                <div className="flex gap-3">
                    <br />
                    
                    <a href="/invite">
                        <i className="fa fa-discord fa-1x" aria-hidden="true" />
                    </a>
                
                    <br />
                    
                    <a href="https://github.com/The-Developers-Guild">
                        <i className="fa fa-github fa-1x" aria-hidden="true" />
                    </a>

                </div>
                </div>

                <br />
            </footer>

        </>
    )
}