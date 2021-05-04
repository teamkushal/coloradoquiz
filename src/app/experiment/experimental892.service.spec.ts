import { TestBed } from '@angular/core/testing';

import { Experimental892Service } from './experimental892.service';

describe('Experimental892Service', () => {
  let service: Experimental892Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental892Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
