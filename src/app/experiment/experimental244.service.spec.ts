import { TestBed } from '@angular/core/testing';

import { Experimental244Service } from './experimental244.service';

describe('Experimental244Service', () => {
  let service: Experimental244Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental244Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
