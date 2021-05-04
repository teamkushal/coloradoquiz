import { TestBed } from '@angular/core/testing';

import { Experimental3107Service } from './experimental3107.service';

describe('Experimental3107Service', () => {
  let service: Experimental3107Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3107Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
