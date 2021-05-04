import { TestBed } from '@angular/core/testing';

import { Experimental2611Service } from './experimental2611.service';

describe('Experimental2611Service', () => {
  let service: Experimental2611Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2611Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
