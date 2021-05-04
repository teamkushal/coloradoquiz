import { TestBed } from '@angular/core/testing';

import { Experimental3522Service } from './experimental3522.service';

describe('Experimental3522Service', () => {
  let service: Experimental3522Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3522Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
