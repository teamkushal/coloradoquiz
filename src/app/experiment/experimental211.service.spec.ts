import { TestBed } from '@angular/core/testing';

import { Experimental211Service } from './experimental211.service';

describe('Experimental211Service', () => {
  let service: Experimental211Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental211Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
