import { TestBed } from '@angular/core/testing';

import { Experimental3799Service } from './experimental3799.service';

describe('Experimental3799Service', () => {
  let service: Experimental3799Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3799Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
