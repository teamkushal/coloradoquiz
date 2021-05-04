import { TestBed } from '@angular/core/testing';

import { Experimental838Service } from './experimental838.service';

describe('Experimental838Service', () => {
  let service: Experimental838Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental838Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
