import { TestBed } from '@angular/core/testing';

import { Experimental58Service } from './experimental58.service';

describe('Experimental58Service', () => {
  let service: Experimental58Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental58Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
