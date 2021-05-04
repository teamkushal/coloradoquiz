import { TestBed } from '@angular/core/testing';

import { Experimental3175Service } from './experimental3175.service';

describe('Experimental3175Service', () => {
  let service: Experimental3175Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3175Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
