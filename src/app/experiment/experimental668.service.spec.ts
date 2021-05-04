import { TestBed } from '@angular/core/testing';

import { Experimental668Service } from './experimental668.service';

describe('Experimental668Service', () => {
  let service: Experimental668Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental668Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
