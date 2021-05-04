import { TestBed } from '@angular/core/testing';

import { Experimental2977Service } from './experimental2977.service';

describe('Experimental2977Service', () => {
  let service: Experimental2977Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2977Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
