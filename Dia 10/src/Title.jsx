export default function Title({text}){
    const textArray = text.split("");
    return(
        <>
        {
            textArray.map((letra,index)=>{
                return(index %2 !== 0 
                    ? <span className="text-cyan-300">{letra}</span>
                    : <span>{letra}</span>
                    )
                
            })
            
        }
        </>
    )
}