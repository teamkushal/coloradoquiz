import { TestBed } from '@angular/core/testing';

import { Experimental163Service } from './experimental163.service';

describe('Experimental163Service', () => {
  let service: Experimental163Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental163Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
