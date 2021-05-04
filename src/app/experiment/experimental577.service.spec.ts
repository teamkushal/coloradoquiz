import { TestBed } from '@angular/core/testing';

import { Experimental577Service } from './experimental577.service';

describe('Experimental577Service', () => {
  let service: Experimental577Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental577Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
