import { TestBed } from '@angular/core/testing';

import { Experimental3354Service } from './experimental3354.service';

describe('Experimental3354Service', () => {
  let service: Experimental3354Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3354Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
