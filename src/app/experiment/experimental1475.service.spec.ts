import { TestBed } from '@angular/core/testing';

import { Experimental1475Service } from './experimental1475.service';

describe('Experimental1475Service', () => {
  let service: Experimental1475Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1475Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
