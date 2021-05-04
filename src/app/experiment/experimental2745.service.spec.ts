import { TestBed } from '@angular/core/testing';

import { Experimental2745Service } from './experimental2745.service';

describe('Experimental2745Service', () => {
  let service: Experimental2745Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2745Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
