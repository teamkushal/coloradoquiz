import { TestBed } from '@angular/core/testing';

import { Experimental885Service } from './experimental885.service';

describe('Experimental885Service', () => {
  let service: Experimental885Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental885Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
