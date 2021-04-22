
import { AnimalType, Product,ProductsGetResponse } from 'src/app/interfaces/product';
import {HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import{HttpClient} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import {from} from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers:[
        {
        provide: ActivatedRoute,
        useValue: {
        params: from([{id: '123'}]),
        },
      }
  ],
     
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get product', () => {
    service.getProduct('ID1').subscribe(product => {
      expect(product.name).toEqual('Ração Seca');
    })

    const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/product/ID1');

    expect(req.request.method).toEqual('GET');

    // Se vocẽ tiver um produto declarado no escopo do serviço ou em um arquivo de mock utilize ele
    const product: Product = {
        name: 'Ração Seca',
        description: 'Ração para cachorro',
        value: 158.9,
        promotional_value: 143.07,
        featured_image: '',
        images: ["https://www.petlove.com.br/images/products/233621/large/Imagem5.png"],
        videos: [],
        rating_stars: 5,
        rating_count: 8,
        installment_available: true,
        installment_count: 3,
        featured: true,
        category: 'ração',
        subcategory: 'ração seca',
        status: 'active',
        animal_type: AnimalType.Dog,
        created_at: '2021-04-11 14:22:17.916440+00:00',
        id: 'ID1',
        url: ''
    }

    req.flush(product);
  });

  it('should test get list products', () => {
   
    service.getProducts().subscribe(products => {
    expect(products.products.length).toEqual(2);
    expect(products.products[0].id).toEqual("EJf7MU4hES59rlLMJrdH");
  })

  // Vamos conferir qual url foi chamada pelo metodo getProducts()
  const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/products');
  // Aqui verificamos se o protocolo chamado foi GET
  expect(req.request.method).toEqual('GET')
  const productsget: ProductsGetResponse = {
    cursor: '',
    products: [

      {
        name: "Product",
        description: "Product",
        value: 204.9,
        promotional_value: 184.41,
        featured_image: "image_url",
        images: [],
        videos: [],
        rating_stars: 5,
        rating_count: 424,
        installment_available: true,
        installment_count: 2,
        featured: true,
        category: "Medicina e Sa\u00fade",
        subcategory: "Antipulgas e Carrapatos",
        animal_type: AnimalType.Dog,
        url: "/url",
        created_at: "2021-04-12 21:28:35.881119+00:00",
        id: "EJf7MU4hES59rlLMJrdH",
        status: "dkfjaskfjaskjfasfasf"
      },
      {
        name: "Product2",
        description: "Product2",
        value: 204.9,
        promotional_value: 184.41,
        featured_image: "image_url",
        images: [],
        videos: [],
        rating_stars: 5,
        rating_count: 424,
        installment_available: true,
        installment_count: 2,
        featured: true,
        category: "Medicina e Sa\u00fade",
        subcategory: "Antipulgas e Carrapatos",
        animal_type: AnimalType.Dog,
        url: "/url",
        created_at: "2021-04-12 21:28:35.881119+00:00",
        id: "EJf7MU4hES59rlLMJrdH",
        status:"dnnafafaf"
      }
 
     
  ]
  }
  req.flush(productsget);
});
});
