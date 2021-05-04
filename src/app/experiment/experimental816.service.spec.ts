import { TestBed } from '@angular/core/testing';

import { Experimental816Service } from './experimental816.service';

describe('Experimental816Service', () => {
  let service: Experimental816Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental816Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
