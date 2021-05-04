import { TestBed } from '@angular/core/testing';

import { Experimental3990Service } from './experimental3990.service';

describe('Experimental3990Service', () => {
  let service: Experimental3990Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3990Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
