import { TestBed } from '@angular/core/testing';

import { Experimental3981Service } from './experimental3981.service';

describe('Experimental3981Service', () => {
  let service: Experimental3981Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3981Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
