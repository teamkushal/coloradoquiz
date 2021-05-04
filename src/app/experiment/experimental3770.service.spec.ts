import { TestBed } from '@angular/core/testing';

import { Experimental3770Service } from './experimental3770.service';

describe('Experimental3770Service', () => {
  let service: Experimental3770Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3770Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
