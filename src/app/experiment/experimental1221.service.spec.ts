import { TestBed } from '@angular/core/testing';

import { Experimental1221Service } from './experimental1221.service';

describe('Experimental1221Service', () => {
  let service: Experimental1221Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1221Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
