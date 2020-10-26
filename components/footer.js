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
               
                <div className="flex gap-3 mr-6 ml-6">
                    <br />
                    
                    <a href="/invite">
                        <i className="fa fa-discord fa-2x" aria-hidden="true" />
                    </a>
                
                    <br />
                    
                    <a href="/github">
                        <i className="fa fa-github fa-2x" aria-hidden="true" />
                    </a>

                    <br />

                                        
                    <a href="/contact">
                        <i className="fa fa-address-book-o fa-2x" aria-hidden="true" />
                    </a>

                </div>
                </div>

                <br />
            </footer>

        </>
    )
}