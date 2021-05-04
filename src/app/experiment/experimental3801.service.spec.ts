import { TestBed } from '@angular/core/testing';

import { Experimental3801Service } from './experimental3801.service';

describe('Experimental3801Service', () => {
  let service: Experimental3801Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3801Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
