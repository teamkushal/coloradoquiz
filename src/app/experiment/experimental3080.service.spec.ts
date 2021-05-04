import { TestBed } from '@angular/core/testing';

import { Experimental3080Service } from './experimental3080.service';

describe('Experimental3080Service', () => {
  let service: Experimental3080Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3080Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
