import { TestBed } from '@angular/core/testing';

import { Experimental3790Service } from './experimental3790.service';

describe('Experimental3790Service', () => {
  let service: Experimental3790Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3790Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
