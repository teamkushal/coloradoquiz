import { TestBed } from '@angular/core/testing';

import { Experimental2603Service } from './experimental2603.service';

describe('Experimental2603Service', () => {
  let service: Experimental2603Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2603Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
