import { TestBed } from '@angular/core/testing';

import { Experimental603Service } from './experimental603.service';

describe('Experimental603Service', () => {
  let service: Experimental603Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental603Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
