import { TestBed } from '@angular/core/testing';

import { Experimental2038Service } from './experimental2038.service';

describe('Experimental2038Service', () => {
  let service: Experimental2038Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2038Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
