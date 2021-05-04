import { TestBed } from '@angular/core/testing';

import { Experimental2002Service } from './experimental2002.service';

describe('Experimental2002Service', () => {
  let service: Experimental2002Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2002Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
