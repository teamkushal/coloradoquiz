import { TestBed } from '@angular/core/testing';

import { Experimental3889Service } from './experimental3889.service';

describe('Experimental3889Service', () => {
  let service: Experimental3889Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3889Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
