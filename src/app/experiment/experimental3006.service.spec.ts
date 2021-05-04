import { TestBed } from '@angular/core/testing';

import { Experimental3006Service } from './experimental3006.service';

describe('Experimental3006Service', () => {
  let service: Experimental3006Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3006Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
