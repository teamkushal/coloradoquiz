import { TestBed } from '@angular/core/testing';

import { Experimental2772Service } from './experimental2772.service';

describe('Experimental2772Service', () => {
  let service: Experimental2772Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2772Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
