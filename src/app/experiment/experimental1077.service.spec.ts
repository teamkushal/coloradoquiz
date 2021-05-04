import { TestBed } from '@angular/core/testing';

import { Experimental1077Service } from './experimental1077.service';

describe('Experimental1077Service', () => {
  let service: Experimental1077Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1077Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
