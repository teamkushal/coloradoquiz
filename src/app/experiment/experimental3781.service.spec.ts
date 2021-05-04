import { TestBed } from '@angular/core/testing';

import { Experimental3781Service } from './experimental3781.service';

describe('Experimental3781Service', () => {
  let service: Experimental3781Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3781Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
