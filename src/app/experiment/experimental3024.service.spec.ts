import { TestBed } from '@angular/core/testing';

import { Experimental3024Service } from './experimental3024.service';

describe('Experimental3024Service', () => {
  let service: Experimental3024Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3024Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
