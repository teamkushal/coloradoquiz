import { TestBed } from '@angular/core/testing';

import { Experimental3739Service } from './experimental3739.service';

describe('Experimental3739Service', () => {
  let service: Experimental3739Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3739Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
