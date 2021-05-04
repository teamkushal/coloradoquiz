import { TestBed } from '@angular/core/testing';

import { Experimental913Service } from './experimental913.service';

describe('Experimental913Service', () => {
  let service: Experimental913Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental913Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
