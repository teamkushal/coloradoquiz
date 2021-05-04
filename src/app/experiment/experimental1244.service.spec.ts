import { TestBed } from '@angular/core/testing';

import { Experimental1244Service } from './experimental1244.service';

describe('Experimental1244Service', () => {
  let service: Experimental1244Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1244Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
