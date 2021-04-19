import { ParametersService } from 'src/app/services/parameters.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';


describe('ParametersService', () => {
  let service: ParametersService;
  

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(ParametersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('verify if method not throw a error', () => {
     
    const metodo=service.getParameters();
    expect(metodo).not.toThrow;
  
  });

});
