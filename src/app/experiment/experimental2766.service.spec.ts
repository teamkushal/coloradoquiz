import { TestBed } from '@angular/core/testing';

import { Experimental2766Service } from './experimental2766.service';

describe('Experimental2766Service', () => {
  let service: Experimental2766Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2766Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
