import { TestBed } from '@angular/core/testing';

import { Experimental3734Service } from './experimental3734.service';

describe('Experimental3734Service', () => {
  let service: Experimental3734Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3734Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
