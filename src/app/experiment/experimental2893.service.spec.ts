import { TestBed } from '@angular/core/testing';

import { Experimental2893Service } from './experimental2893.service';

describe('Experimental2893Service', () => {
  let service: Experimental2893Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2893Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
