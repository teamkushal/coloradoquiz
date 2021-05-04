import { TestBed } from '@angular/core/testing';

import { Experimental863Service } from './experimental863.service';

describe('Experimental863Service', () => {
  let service: Experimental863Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental863Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
