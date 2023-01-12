import Title  from "./Title";

export default function App (){
    return(
        <>
        <body className="bg-amber-50 w-screen h-screen flex flex-col  align-middle"> 

            <header className="flex justify-center">
                <h1 className="text-rose-500 text-5xl text-center p-7">CHRISTMAS            
                <br/> 
                <Title text = "WISH"/> <Title text = "LIST"/>
                </h1>
            </header>

            <main className="w-72 h-72 bg-slate-500 flex justify-center align-middle">
                <article className="">
                    
                </article>
            </main>

        </body>
        </>
    );
}


