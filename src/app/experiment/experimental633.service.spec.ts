import { TestBed } from '@angular/core/testing';

import { Experimental633Service } from './experimental633.service';

describe('Experimental633Service', () => {
  let service: Experimental633Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental633Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
