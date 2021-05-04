import { TestBed } from '@angular/core/testing';

import { Experimental737Service } from './experimental737.service';

describe('Experimental737Service', () => {
  let service: Experimental737Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental737Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
