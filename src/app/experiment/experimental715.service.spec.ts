import { TestBed } from '@angular/core/testing';

import { Experimental715Service } from './experimental715.service';

describe('Experimental715Service', () => {
  let service: Experimental715Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental715Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
