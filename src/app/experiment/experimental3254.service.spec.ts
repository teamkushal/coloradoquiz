import { TestBed } from '@angular/core/testing';

import { Experimental3254Service } from './experimental3254.service';

describe('Experimental3254Service', () => {
  let service: Experimental3254Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3254Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
