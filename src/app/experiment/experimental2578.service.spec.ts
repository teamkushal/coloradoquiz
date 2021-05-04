import { TestBed } from '@angular/core/testing';

import { Experimental2578Service } from './experimental2578.service';

describe('Experimental2578Service', () => {
  let service: Experimental2578Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2578Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
