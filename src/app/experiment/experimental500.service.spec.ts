import { TestBed } from '@angular/core/testing';

import { Experimental500Service } from './experimental500.service';

describe('Experimental500Service', () => {
  let service: Experimental500Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental500Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
