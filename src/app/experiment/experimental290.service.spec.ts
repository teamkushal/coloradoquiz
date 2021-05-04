import { TestBed } from '@angular/core/testing';

import { Experimental290Service } from './experimental290.service';

describe('Experimental290Service', () => {
  let service: Experimental290Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental290Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
