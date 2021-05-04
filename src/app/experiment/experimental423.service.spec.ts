import { TestBed } from '@angular/core/testing';

import { Experimental423Service } from './experimental423.service';

describe('Experimental423Service', () => {
  let service: Experimental423Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental423Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
