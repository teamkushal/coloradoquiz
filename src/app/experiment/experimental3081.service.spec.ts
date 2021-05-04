import { TestBed } from '@angular/core/testing';

import { Experimental3081Service } from './experimental3081.service';

describe('Experimental3081Service', () => {
  let service: Experimental3081Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3081Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
