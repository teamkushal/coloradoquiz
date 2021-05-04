import { TestBed } from '@angular/core/testing';

import { Experimental3213Service } from './experimental3213.service';

describe('Experimental3213Service', () => {
  let service: Experimental3213Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3213Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
