import { TestBed } from '@angular/core/testing';

import { Experimental1153Service } from './experimental1153.service';

describe('Experimental1153Service', () => {
  let service: Experimental1153Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1153Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
