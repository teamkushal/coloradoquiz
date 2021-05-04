import { TestBed } from '@angular/core/testing';

import { Experimental214Service } from './experimental214.service';

describe('Experimental214Service', () => {
  let service: Experimental214Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental214Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
