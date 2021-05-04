import { TestBed } from '@angular/core/testing';

import { Experimental3599Service } from './experimental3599.service';

describe('Experimental3599Service', () => {
  let service: Experimental3599Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3599Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
