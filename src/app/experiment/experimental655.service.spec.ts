import { TestBed } from '@angular/core/testing';

import { Experimental655Service } from './experimental655.service';

describe('Experimental655Service', () => {
  let service: Experimental655Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental655Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
