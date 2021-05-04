import { TestBed } from '@angular/core/testing';

import { Experimental3054Service } from './experimental3054.service';

describe('Experimental3054Service', () => {
  let service: Experimental3054Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3054Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
