import { TestBed } from '@angular/core/testing';

import { Experimental2962Service } from './experimental2962.service';

describe('Experimental2962Service', () => {
  let service: Experimental2962Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2962Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
