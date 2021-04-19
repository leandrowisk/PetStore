import { Observable } from 'rxjs';
import { Parameters } from './../interfaces/parameters';

export class ParametersServiceMock{


    parameter!: Parameters;

    getParameters(): Observable<Parameters> {
        return new Observable<Parameters>(observer => {
    
            
        observer.next(
        {"company_name": "Petstore LTDA", "trademark": "Petstore", "email": "contato@petstore-sp.com.br", 
        "address": "Avenida das Na\u00e7\u00f5es Unidas, 18801", "address_complement": "Nov\u00e1merica Office - Conj. 1010", 
        "city": "S\u00e3o Paulo", "state": "SP", "zip_code": "04795-100", "social_networks":
         [{"account": "imobzi", "name": "Facebook"}, 
        {"account": "showcase/imobzi", "name": "LinkedIn"}, {"account": "channel/UCJRRIxw4sdVgmMYCQuy8pug", 
        "name": "Youtube"}, 
        {"account": "explore/tags/imobzi/", "name": "Instagram"}], "phones": [{"type": "Principal", "number": "(11) 4063-4100", "country_code": "+55"}, 
        {"type": "whatsapp", "number": "(11) 94063-4100", "country_code": "+55"}]});
        observer.complete()    
        
       
        });

        
      }

    
}