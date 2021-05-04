import { TestBed } from '@angular/core/testing';

import { Experimental2760Service } from './experimental2760.service';

describe('Experimental2760Service', () => {
  let service: Experimental2760Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2760Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
