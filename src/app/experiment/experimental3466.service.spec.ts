import { TestBed } from '@angular/core/testing';

import { Experimental3466Service } from './experimental3466.service';

describe('Experimental3466Service', () => {
  let service: Experimental3466Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3466Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
