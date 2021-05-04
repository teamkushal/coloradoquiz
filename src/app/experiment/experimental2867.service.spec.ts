import { TestBed } from '@angular/core/testing';

import { Experimental2867Service } from './experimental2867.service';

describe('Experimental2867Service', () => {
  let service: Experimental2867Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2867Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
