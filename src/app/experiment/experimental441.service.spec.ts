import { TestBed } from '@angular/core/testing';

import { Experimental441Service } from './experimental441.service';

describe('Experimental441Service', () => {
  let service: Experimental441Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental441Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
