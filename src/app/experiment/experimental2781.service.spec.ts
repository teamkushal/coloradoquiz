import { TestBed } from '@angular/core/testing';

import { Experimental2781Service } from './experimental2781.service';

describe('Experimental2781Service', () => {
  let service: Experimental2781Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2781Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
