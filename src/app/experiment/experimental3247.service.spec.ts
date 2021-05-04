import { TestBed } from '@angular/core/testing';

import { Experimental3247Service } from './experimental3247.service';

describe('Experimental3247Service', () => {
  let service: Experimental3247Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3247Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
