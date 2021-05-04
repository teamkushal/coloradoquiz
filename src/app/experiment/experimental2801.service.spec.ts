import { TestBed } from '@angular/core/testing';

import { Experimental2801Service } from './experimental2801.service';

describe('Experimental2801Service', () => {
  let service: Experimental2801Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2801Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
