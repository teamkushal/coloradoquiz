import { TestBed } from '@angular/core/testing';

import { Experimental3521Service } from './experimental3521.service';

describe('Experimental3521Service', () => {
  let service: Experimental3521Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3521Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
