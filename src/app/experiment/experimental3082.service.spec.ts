import { TestBed } from '@angular/core/testing';

import { Experimental3082Service } from './experimental3082.service';

describe('Experimental3082Service', () => {
  let service: Experimental3082Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3082Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
