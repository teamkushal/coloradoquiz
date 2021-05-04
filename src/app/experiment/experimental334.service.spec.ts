import { TestBed } from '@angular/core/testing';

import { Experimental334Service } from './experimental334.service';

describe('Experimental334Service', () => {
  let service: Experimental334Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental334Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
