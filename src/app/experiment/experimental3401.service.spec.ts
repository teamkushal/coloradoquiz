import { TestBed } from '@angular/core/testing';

import { Experimental3401Service } from './experimental3401.service';

describe('Experimental3401Service', () => {
  let service: Experimental3401Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3401Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
