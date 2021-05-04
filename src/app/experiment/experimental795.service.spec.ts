import { TestBed } from '@angular/core/testing';

import { Experimental795Service } from './experimental795.service';

describe('Experimental795Service', () => {
  let service: Experimental795Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental795Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
