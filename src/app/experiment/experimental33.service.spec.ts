import { TestBed } from '@angular/core/testing';

import { Experimental33Service } from './experimental33.service';

describe('Experimental33Service', () => {
  let service: Experimental33Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental33Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
