import { TestBed } from '@angular/core/testing';

import { Experimental3991Service } from './experimental3991.service';

describe('Experimental3991Service', () => {
  let service: Experimental3991Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3991Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
