import { TestBed } from '@angular/core/testing';

import { Experimental3524Service } from './experimental3524.service';

describe('Experimental3524Service', () => {
  let service: Experimental3524Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3524Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
