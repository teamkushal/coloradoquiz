import { TestBed } from '@angular/core/testing';

import { Experimental3994Service } from './experimental3994.service';

describe('Experimental3994Service', () => {
  let service: Experimental3994Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3994Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
