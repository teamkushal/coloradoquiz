import { TestBed } from '@angular/core/testing';

import { Experimental2222Service } from './experimental2222.service';

describe('Experimental2222Service', () => {
  let service: Experimental2222Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2222Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
