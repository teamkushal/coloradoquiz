import { TestBed } from '@angular/core/testing';

import { Experimental3936Service } from './experimental3936.service';

describe('Experimental3936Service', () => {
  let service: Experimental3936Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3936Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
