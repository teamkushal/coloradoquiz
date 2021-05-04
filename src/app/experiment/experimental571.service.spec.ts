import { TestBed } from '@angular/core/testing';

import { Experimental571Service } from './experimental571.service';

describe('Experimental571Service', () => {
  let service: Experimental571Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental571Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
