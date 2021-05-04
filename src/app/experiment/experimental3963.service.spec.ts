import { TestBed } from '@angular/core/testing';

import { Experimental3963Service } from './experimental3963.service';

describe('Experimental3963Service', () => {
  let service: Experimental3963Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3963Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
