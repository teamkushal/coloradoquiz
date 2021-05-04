import { TestBed } from '@angular/core/testing';

import { Experimental3443Service } from './experimental3443.service';

describe('Experimental3443Service', () => {
  let service: Experimental3443Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3443Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
