import Form from "./Form";
import Title  from "./Title";

export default function App (){
    return(
        <>
        

            <header className="h-50 min-h-fit flex justify-center">
                <h1 className="text-rose-500 text-6xl text-center p-4">CHRISTMAS            
                <br/> 
                <Title text="WISH"/> <Title text="LIST"/>
                </h1>
            </header>

            <main className="w-[30rem] h-[40rem] bg-[url('./src/assets/container-bg.png')] rounded-3xl p-8">
                <article className="w-full h-full bg-white rounded-xl flex flex-col items-center">
                    <Form></Form>   
                </article>
            </main>

    
        </>
    );
}


