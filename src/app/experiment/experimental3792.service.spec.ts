import { TestBed } from '@angular/core/testing';

import { Experimental3792Service } from './experimental3792.service';

describe('Experimental3792Service', () => {
  let service: Experimental3792Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3792Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
