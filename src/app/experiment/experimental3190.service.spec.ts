import { TestBed } from '@angular/core/testing';

import { Experimental3190Service } from './experimental3190.service';

describe('Experimental3190Service', () => {
  let service: Experimental3190Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3190Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
