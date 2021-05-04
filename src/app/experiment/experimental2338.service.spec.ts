import { TestBed } from '@angular/core/testing';

import { Experimental2338Service } from './experimental2338.service';

describe('Experimental2338Service', () => {
  let service: Experimental2338Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2338Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
