import { TestBed } from '@angular/core/testing';

import { Experimental1161Service } from './experimental1161.service';

describe('Experimental1161Service', () => {
  let service: Experimental1161Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1161Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
