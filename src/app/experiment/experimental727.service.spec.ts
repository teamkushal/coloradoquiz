import { TestBed } from '@angular/core/testing';

import { Experimental727Service } from './experimental727.service';

describe('Experimental727Service', () => {
  let service: Experimental727Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental727Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
