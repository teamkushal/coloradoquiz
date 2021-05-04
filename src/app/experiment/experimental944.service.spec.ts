import { TestBed } from '@angular/core/testing';

import { Experimental944Service } from './experimental944.service';

describe('Experimental944Service', () => {
  let service: Experimental944Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental944Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
