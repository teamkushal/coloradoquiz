import { TestBed } from '@angular/core/testing';

import { Experimental28Service } from './experimental28.service';

describe('Experimental28Service', () => {
  let service: Experimental28Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental28Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
