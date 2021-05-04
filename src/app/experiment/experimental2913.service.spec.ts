import { TestBed } from '@angular/core/testing';

import { Experimental2913Service } from './experimental2913.service';

describe('Experimental2913Service', () => {
  let service: Experimental2913Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2913Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
