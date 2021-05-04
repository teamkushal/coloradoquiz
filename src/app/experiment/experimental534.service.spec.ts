import { TestBed } from '@angular/core/testing';

import { Experimental534Service } from './experimental534.service';

describe('Experimental534Service', () => {
  let service: Experimental534Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental534Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
