import { TestBed } from '@angular/core/testing';

import { Experimental129Service } from './experimental129.service';

describe('Experimental129Service', () => {
  let service: Experimental129Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental129Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
