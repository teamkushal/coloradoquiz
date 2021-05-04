import { TestBed } from '@angular/core/testing';

import { Experimental1262Service } from './experimental1262.service';

describe('Experimental1262Service', () => {
  let service: Experimental1262Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1262Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
