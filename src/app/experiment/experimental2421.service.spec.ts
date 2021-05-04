import { TestBed } from '@angular/core/testing';

import { Experimental2421Service } from './experimental2421.service';

describe('Experimental2421Service', () => {
  let service: Experimental2421Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2421Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
