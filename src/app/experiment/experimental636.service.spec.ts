import { TestBed } from '@angular/core/testing';

import { Experimental636Service } from './experimental636.service';

describe('Experimental636Service', () => {
  let service: Experimental636Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental636Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
