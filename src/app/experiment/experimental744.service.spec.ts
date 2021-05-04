import { TestBed } from '@angular/core/testing';

import { Experimental744Service } from './experimental744.service';

describe('Experimental744Service', () => {
  let service: Experimental744Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental744Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
