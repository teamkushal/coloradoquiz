import { TestBed } from '@angular/core/testing';

import { Experimental3755Service } from './experimental3755.service';

describe('Experimental3755Service', () => {
  let service: Experimental3755Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3755Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
