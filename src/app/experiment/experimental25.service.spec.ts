import { TestBed } from '@angular/core/testing';

import { Experimental25Service } from './experimental25.service';

describe('Experimental25Service', () => {
  let service: Experimental25Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental25Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
