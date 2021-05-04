import { TestBed } from '@angular/core/testing';

import { Experimental982Service } from './experimental982.service';

describe('Experimental982Service', () => {
  let service: Experimental982Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental982Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
