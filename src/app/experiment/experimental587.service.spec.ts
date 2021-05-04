import { TestBed } from '@angular/core/testing';

import { Experimental587Service } from './experimental587.service';

describe('Experimental587Service', () => {
  let service: Experimental587Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental587Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
