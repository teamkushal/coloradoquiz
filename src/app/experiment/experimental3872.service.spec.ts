import { TestBed } from '@angular/core/testing';

import { Experimental3872Service } from './experimental3872.service';

describe('Experimental3872Service', () => {
  let service: Experimental3872Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3872Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
