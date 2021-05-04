import { TestBed } from '@angular/core/testing';

import { Experimental3362Service } from './experimental3362.service';

describe('Experimental3362Service', () => {
  let service: Experimental3362Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3362Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
