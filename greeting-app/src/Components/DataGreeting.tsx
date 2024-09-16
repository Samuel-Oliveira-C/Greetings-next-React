const Horario = () =>{
    const hour = new Date();
    const data = hour.getFullYear();
    const month = hour.getMonth();
    const day = hour.getDay();
    
    const mes = `${day}/${month+1}/${data}`;

    const hora = hour.getHours();
    const minutes = hour.getMinutes();
    const horario = `${hora}:${minutes}`


    
    if(hora > 5 && hora < 12){
        return(
            <div className="flex flex-col gap-5">
                <div className="text-5xl text-pink-50">{mes}</div> 
                <br />
                <div className="text-3xl text-pink-50">{horario}</div>
                <br />
                <div className= "font-bold text-lg">{`Bom dia`}</div>
            </div>
        )
    }
    else if(hora >= 12 && hora < 18){
        return(
            <div className="flex flex-col gap-5">
                <div className="text-5xl text-pink-50">{mes} </div> 
                
                <div className="text-3xl text-pink-50">{horario}</div>
                
                <div className= "font-bold text-lg">{`Boa Tarde`}</div>
            </div>
        )
    }
    else{
        return(
            <div className="flex flex-col gap-5">
                <div className="text-5xl text-pink-50">{mes} </div> 
                
                <div className="text-3xl text-pink-50">{horario}</div>
                
                <div className= "font-bold text-lg">{`Boa Noite`}</div>
            </div>
        )
    }
}

export {Horario}