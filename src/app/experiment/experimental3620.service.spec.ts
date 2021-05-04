import { TestBed } from '@angular/core/testing';

import { Experimental3620Service } from './experimental3620.service';

describe('Experimental3620Service', () => {
  let service: Experimental3620Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3620Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
