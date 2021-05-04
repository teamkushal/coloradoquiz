import { TestBed } from '@angular/core/testing';

import { Experimental1656Service } from './experimental1656.service';

describe('Experimental1656Service', () => {
  let service: Experimental1656Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1656Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
