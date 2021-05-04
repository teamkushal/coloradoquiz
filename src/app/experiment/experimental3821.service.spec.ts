import { TestBed } from '@angular/core/testing';

import { Experimental3821Service } from './experimental3821.service';

describe('Experimental3821Service', () => {
  let service: Experimental3821Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3821Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
