import { TestBed } from '@angular/core/testing';

import { Experimental356Service } from './experimental356.service';

describe('Experimental356Service', () => {
  let service: Experimental356Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental356Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
