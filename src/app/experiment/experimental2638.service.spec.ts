import { TestBed } from '@angular/core/testing';

import { Experimental2638Service } from './experimental2638.service';

describe('Experimental2638Service', () => {
  let service: Experimental2638Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2638Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
