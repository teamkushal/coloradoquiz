import { TestBed } from '@angular/core/testing';

import { Experimental3010Service } from './experimental3010.service';

describe('Experimental3010Service', () => {
  let service: Experimental3010Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3010Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
