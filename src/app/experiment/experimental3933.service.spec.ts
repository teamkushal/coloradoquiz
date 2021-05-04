import { TestBed } from '@angular/core/testing';

import { Experimental3933Service } from './experimental3933.service';

describe('Experimental3933Service', () => {
  let service: Experimental3933Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3933Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
