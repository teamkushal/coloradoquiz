import { TestBed } from '@angular/core/testing';

import { Experimental2344Service } from './experimental2344.service';

describe('Experimental2344Service', () => {
  let service: Experimental2344Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2344Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
