import { Category } from './../interfaces/category';
import {  Observable } from 'rxjs';


export class CategoriesServicesMock{


    
  getCategories(): Observable<Category[]> {
    return new Observable<Category[]>(observer => {

        
    observer.next(
    [{"name": "acessorios para alimenta\u00e7\u00e3o", "description": "Comedouros automaticos e outros", "subcategories": ["Alimentadores e Bebedouros Autom\u00e1ticos", "Comedouros e Bebedouros", "Porta Ra\u00e7\u00f5es e Acess\u00f3rios"], "url": "https://www.petlove.com.br/images/products/200127/large/Comedouro_The_Pets_Brasil_Inox_Patas_Relevo_para_C%C3%A3es_1963346.jpg", "id": "3PMsJERGEs4lveQj2DfX"},
    {"name": "higiene e limpeza", "description": "Higiene e limpeza", "subcategories": ["Tapetes Higi\u00eanicos", "Diversos"], "url": "https://www.petlove.com.br/images/products/233694/large/Limpador_Biodegrad%C3%A1vel_Weasy_Clean_2620849.jpg", "id": "B2EyA2JXIrDcZfr9IOwt"},
    {"name": "Medicina e sa\u00fade", "description": "Medicina e sa\u00fade", "subcategories": ["Antipulgas e Carrapatos", "Anti - Inflamat\u00f3rios", "Antiparasitas"], "url": "https://www.petlove.com.br/images/products/223614/large/Verm%C3%ADfugo_Biovet_Vermivet_Composto_600_mg_para_C%C3%A3es_e_Gatos_31017917-1.jpg", "id": "G4T8R4FbLyxrKFLCRrPS"}, 
    {"name": "brinquedos", "description": "Brinquedos para cachorros e gatos", "subcategories": ["Bichinhos de Pel\u00facia", "Bolas Diversas", "Bolinhas"], "url": "https://www.petlove.com.br/images/products/214323/large/Brinquedo_Jambo_Mordedor_Pel%C3%BAcia_Macaco_Kelev_Preto_1786685.jpg", "id": "G4f255Wh3FCRFmW2NieT"}, 
    {"name": "roupas", "description": "Roupas para cachorros e outros animais", "subcategories": ["Diversos", "Roupas Comemorativas", "Roupinhas de Inverno", "Roupinhas de Ver\u00e3o"], "url": "https://www.petlove.com.br/images/products/224940/large/Agasalho_Pickorruchos_Puppy_Azul_1907959_1.jpg", "id": "M2bD0fSRmCYi69AHoL36"}, 
    {"name": "ra\u00e7\u00e3o", "description": "Ra\u00e7\u00e3o seca e umida para cachorros e gatos", "subcategories": ["Ra\u00e7\u00e3o seca", "Ra\u00e7\u00e3o umida", "Ra\u00e7\u00e3o medicamentosa"], "url": "https://www.petlove.com.br/images/products/233621/large/Imagem5.png", "id": "vyEqTiLwC4Tb9nHKAcFR"}]);
    observer.complete()    
    });
  }
}