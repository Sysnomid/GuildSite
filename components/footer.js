let Year = new Date().getFullYear()

export default function Footer(){
    return (
        <>
            <br />
            <hr width="0"/>
            <footer className="h-auto bg-gray-800 bg-opacity-30">
                <br />
                <div className="txt-marg flex justify-center items-center mt-2 mb-2 text-1xl">
                &copy; Copyright The Developers Guild { Year }
               
                <div className="flex gap-5 mr-6 ml-6">
                    
                    <a href="https://discord.gg/xqUN8KY">
                        <i className="fa fa-discord fa-2x" aria-hidden="true" />
                    </a>
                     
                    <a href="https://github.com/The-Developers-Guild">
                        <i className="fa fa-github fa-2x" aria-hidden="true" />
                    </a>

                    <a href="/contact">
                        <i className="fa fa-address-book-o fa-2x" aria-hidden="true" />
                    </a>

                    <a href="/contact">
                        <i className="fa fa-envelope-o fa-2x" aria-hidden="true" />
                    </a>

                </div>
                </div>

                <br />
            </footer>

        </>
    )
}