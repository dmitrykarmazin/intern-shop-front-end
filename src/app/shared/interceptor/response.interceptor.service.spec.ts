import { TestBed, inject } from '@angular/core/testing';

import { ResponseInterceptorService } from './response.interceptor.service';

describe('Response.InterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponseInterceptorService]
    });
  });

  it('should be created', inject([ResponseInterceptorService], (service: ResponseInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
