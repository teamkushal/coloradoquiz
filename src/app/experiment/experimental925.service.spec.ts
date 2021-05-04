import { TestBed } from '@angular/core/testing';

import { Experimental925Service } from './experimental925.service';

describe('Experimental925Service', () => {
  let service: Experimental925Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental925Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
