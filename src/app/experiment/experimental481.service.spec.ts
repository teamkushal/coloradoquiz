import { TestBed } from '@angular/core/testing';

import { Experimental481Service } from './experimental481.service';

describe('Experimental481Service', () => {
  let service: Experimental481Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental481Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
