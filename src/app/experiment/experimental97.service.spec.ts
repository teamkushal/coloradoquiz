import { TestBed } from '@angular/core/testing';

import { Experimental97Service } from './experimental97.service';

describe('Experimental97Service', () => {
  let service: Experimental97Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental97Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
