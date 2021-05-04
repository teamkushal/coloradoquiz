import { TestBed } from '@angular/core/testing';

import { Experimental3614Service } from './experimental3614.service';

describe('Experimental3614Service', () => {
  let service: Experimental3614Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3614Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
