import { TestBed } from '@angular/core/testing';

import { Experimental448Service } from './experimental448.service';

describe('Experimental448Service', () => {
  let service: Experimental448Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental448Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
