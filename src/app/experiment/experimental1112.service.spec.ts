import { TestBed } from '@angular/core/testing';

import { Experimental1112Service } from './experimental1112.service';

describe('Experimental1112Service', () => {
  let service: Experimental1112Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1112Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
