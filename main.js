let t = prompt('Scegli la temperatura');


if(t >=0 && t <= 19){
    console.log('Non ci sono più le mezze stagioni');
}else if(t >= 30){
    console.log('lu Mare, lu sole, lu ientu');
}else if(t >= 20 && t <= 29){
    console.log('Mi dia una peroni seduta');
}else if(t < 0 && t < -10){
    console.log("non è tanto il freddo quanto l'umidità");
}else if(t < -10){
    console.log('copriti...ancora ti raffreddi');
}



let tp = prompt('asaa');

switch(true){
    case tp >= 0 && tp <= 19 : console.log('Non ci sono più le mezze stagioni');
    break;

    case tp >= 20 && tp <= 29 : console.log('Mi dia una peroni seduta');
    break;

    case tp >= 30 : console.log('lu Mare, lu sole, lu ientu');
    break;

    case tp < 0 && tp < -10 :  console.log("non è tanto il freddo quanto l'umidità");
    break;

    case tp < -10 :   console.log('copriti...ancora ti raffreddi');
    break;
    
    default: 
        console.log('Temperatura non pervenuta');
}