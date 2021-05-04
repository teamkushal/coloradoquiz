import { TestBed } from '@angular/core/testing';

import { Experimental3376Service } from './experimental3376.service';

describe('Experimental3376Service', () => {
  let service: Experimental3376Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3376Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
