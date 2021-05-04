import { TestBed } from '@angular/core/testing';

import { Experimental656Service } from './experimental656.service';

describe('Experimental656Service', () => {
  let service: Experimental656Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental656Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
