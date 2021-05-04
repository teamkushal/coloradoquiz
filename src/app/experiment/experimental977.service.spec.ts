import { TestBed } from '@angular/core/testing';

import { Experimental977Service } from './experimental977.service';

describe('Experimental977Service', () => {
  let service: Experimental977Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental977Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
