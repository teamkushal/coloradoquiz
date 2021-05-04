import { TestBed } from '@angular/core/testing';

import { Experimental774Service } from './experimental774.service';

describe('Experimental774Service', () => {
  let service: Experimental774Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental774Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
