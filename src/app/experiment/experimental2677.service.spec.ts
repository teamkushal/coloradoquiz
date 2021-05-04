import { TestBed } from '@angular/core/testing';

import { Experimental2677Service } from './experimental2677.service';

describe('Experimental2677Service', () => {
  let service: Experimental2677Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2677Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
