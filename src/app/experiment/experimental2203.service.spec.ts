import { TestBed } from '@angular/core/testing';

import { Experimental2203Service } from './experimental2203.service';

describe('Experimental2203Service', () => {
  let service: Experimental2203Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2203Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
