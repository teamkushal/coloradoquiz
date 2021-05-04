import { TestBed } from '@angular/core/testing';

import { Experimental3921Service } from './experimental3921.service';

describe('Experimental3921Service', () => {
  let service: Experimental3921Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3921Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
