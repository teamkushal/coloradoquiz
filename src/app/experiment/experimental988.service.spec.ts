import { TestBed } from '@angular/core/testing';

import { Experimental988Service } from './experimental988.service';

describe('Experimental988Service', () => {
  let service: Experimental988Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental988Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
