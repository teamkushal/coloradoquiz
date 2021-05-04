import { TestBed } from '@angular/core/testing';

import { Experimental1093Service } from './experimental1093.service';

describe('Experimental1093Service', () => {
  let service: Experimental1093Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1093Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
