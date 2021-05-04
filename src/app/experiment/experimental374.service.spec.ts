import { TestBed } from '@angular/core/testing';

import { Experimental374Service } from './experimental374.service';

describe('Experimental374Service', () => {
  let service: Experimental374Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental374Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
