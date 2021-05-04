import { TestBed } from '@angular/core/testing';

import { Experimental3929Service } from './experimental3929.service';

describe('Experimental3929Service', () => {
  let service: Experimental3929Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3929Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
