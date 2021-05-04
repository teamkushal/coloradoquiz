import { TestBed } from '@angular/core/testing';

import { Experimental801Service } from './experimental801.service';

describe('Experimental801Service', () => {
  let service: Experimental801Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental801Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
