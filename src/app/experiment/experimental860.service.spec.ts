import { TestBed } from '@angular/core/testing';

import { Experimental860Service } from './experimental860.service';

describe('Experimental860Service', () => {
  let service: Experimental860Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental860Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
