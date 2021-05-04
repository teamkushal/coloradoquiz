import { TestBed } from '@angular/core/testing';

import { Experimental2758Service } from './experimental2758.service';

describe('Experimental2758Service', () => {
  let service: Experimental2758Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2758Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
