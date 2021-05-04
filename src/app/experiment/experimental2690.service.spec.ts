import { TestBed } from '@angular/core/testing';

import { Experimental2690Service } from './experimental2690.service';

describe('Experimental2690Service', () => {
  let service: Experimental2690Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2690Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
