import { TestBed } from '@angular/core/testing';

import { Experimental814Service } from './experimental814.service';

describe('Experimental814Service', () => {
  let service: Experimental814Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental814Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
