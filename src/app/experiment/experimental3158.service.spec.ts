import { TestBed } from '@angular/core/testing';

import { Experimental3158Service } from './experimental3158.service';

describe('Experimental3158Service', () => {
  let service: Experimental3158Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3158Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
