import { TestBed } from '@angular/core/testing';

import { Experimental1667Service } from './experimental1667.service';

describe('Experimental1667Service', () => {
  let service: Experimental1667Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1667Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
