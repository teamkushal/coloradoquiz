import { TestBed } from '@angular/core/testing';

import { Experimental3418Service } from './experimental3418.service';

describe('Experimental3418Service', () => {
  let service: Experimental3418Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3418Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
