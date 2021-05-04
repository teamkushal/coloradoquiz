import { TestBed } from '@angular/core/testing';

import { Experimental327Service } from './experimental327.service';

describe('Experimental327Service', () => {
  let service: Experimental327Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental327Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
