import { TestBed } from '@angular/core/testing';

import { Experimental1816Service } from './experimental1816.service';

describe('Experimental1816Service', () => {
  let service: Experimental1816Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1816Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
