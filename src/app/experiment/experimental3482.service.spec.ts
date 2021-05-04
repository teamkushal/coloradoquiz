import { TestBed } from '@angular/core/testing';

import { Experimental3482Service } from './experimental3482.service';

describe('Experimental3482Service', () => {
  let service: Experimental3482Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3482Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
