import { TestBed } from '@angular/core/testing';

import { Experimental3020Service } from './experimental3020.service';

describe('Experimental3020Service', () => {
  let service: Experimental3020Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3020Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
