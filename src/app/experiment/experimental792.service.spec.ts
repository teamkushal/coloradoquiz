import { TestBed } from '@angular/core/testing';

import { Experimental792Service } from './experimental792.service';

describe('Experimental792Service', () => {
  let service: Experimental792Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental792Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
