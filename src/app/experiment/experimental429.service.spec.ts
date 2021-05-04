import { TestBed } from '@angular/core/testing';

import { Experimental429Service } from './experimental429.service';

describe('Experimental429Service', () => {
  let service: Experimental429Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental429Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
