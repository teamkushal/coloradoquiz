import { TestBed } from '@angular/core/testing';

import { Experimental2248Service } from './experimental2248.service';

describe('Experimental2248Service', () => {
  let service: Experimental2248Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2248Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
