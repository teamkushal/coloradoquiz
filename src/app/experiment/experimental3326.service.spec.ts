import { TestBed } from '@angular/core/testing';

import { Experimental3326Service } from './experimental3326.service';

describe('Experimental3326Service', () => {
  let service: Experimental3326Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3326Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
