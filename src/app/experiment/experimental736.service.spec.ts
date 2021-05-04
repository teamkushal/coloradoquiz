import { TestBed } from '@angular/core/testing';

import { Experimental736Service } from './experimental736.service';

describe('Experimental736Service', () => {
  let service: Experimental736Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental736Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
