import { TestBed } from '@angular/core/testing';

import { Experimental3539Service } from './experimental3539.service';

describe('Experimental3539Service', () => {
  let service: Experimental3539Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3539Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
