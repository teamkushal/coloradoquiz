import { TestBed } from '@angular/core/testing';

import { Experimental255Service } from './experimental255.service';

describe('Experimental255Service', () => {
  let service: Experimental255Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental255Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
