import { TestBed } from '@angular/core/testing';

import { Experimental321Service } from './experimental321.service';

describe('Experimental321Service', () => {
  let service: Experimental321Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental321Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
