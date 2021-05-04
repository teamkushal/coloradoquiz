import { TestBed } from '@angular/core/testing';

import { Experimental3031Service } from './experimental3031.service';

describe('Experimental3031Service', () => {
  let service: Experimental3031Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3031Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
