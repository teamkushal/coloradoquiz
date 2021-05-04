import { TestBed } from '@angular/core/testing';

import { Experimental2743Service } from './experimental2743.service';

describe('Experimental2743Service', () => {
  let service: Experimental2743Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2743Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
