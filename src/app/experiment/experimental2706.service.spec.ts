import { TestBed } from '@angular/core/testing';

import { Experimental2706Service } from './experimental2706.service';

describe('Experimental2706Service', () => {
  let service: Experimental2706Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2706Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
