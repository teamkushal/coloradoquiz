import { TestBed } from '@angular/core/testing';

import { Experimental611Service } from './experimental611.service';

describe('Experimental611Service', () => {
  let service: Experimental611Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental611Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
