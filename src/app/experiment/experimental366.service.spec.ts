import { TestBed } from '@angular/core/testing';

import { Experimental366Service } from './experimental366.service';

describe('Experimental366Service', () => {
  let service: Experimental366Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental366Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
