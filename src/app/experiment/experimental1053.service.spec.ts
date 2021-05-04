import { TestBed } from '@angular/core/testing';

import { Experimental1053Service } from './experimental1053.service';

describe('Experimental1053Service', () => {
  let service: Experimental1053Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1053Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
