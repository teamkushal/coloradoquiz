import { TestBed } from '@angular/core/testing';

import { Experimental3604Service } from './experimental3604.service';

describe('Experimental3604Service', () => {
  let service: Experimental3604Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3604Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
