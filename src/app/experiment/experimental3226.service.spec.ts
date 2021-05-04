import { TestBed } from '@angular/core/testing';

import { Experimental3226Service } from './experimental3226.service';

describe('Experimental3226Service', () => {
  let service: Experimental3226Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3226Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
