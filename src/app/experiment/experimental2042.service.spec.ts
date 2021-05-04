import { TestBed } from '@angular/core/testing';

import { Experimental2042Service } from './experimental2042.service';

describe('Experimental2042Service', () => {
  let service: Experimental2042Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2042Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
