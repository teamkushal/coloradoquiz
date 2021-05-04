import { TestBed } from '@angular/core/testing';

import { Experimental3748Service } from './experimental3748.service';

describe('Experimental3748Service', () => {
  let service: Experimental3748Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3748Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
