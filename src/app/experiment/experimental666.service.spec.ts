import { TestBed } from '@angular/core/testing';

import { Experimental666Service } from './experimental666.service';

describe('Experimental666Service', () => {
  let service: Experimental666Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental666Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
