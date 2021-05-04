import { TestBed } from '@angular/core/testing';

import { Experimental3856Service } from './experimental3856.service';

describe('Experimental3856Service', () => {
  let service: Experimental3856Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3856Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
