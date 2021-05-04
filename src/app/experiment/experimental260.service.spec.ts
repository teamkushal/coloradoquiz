import { TestBed } from '@angular/core/testing';

import { Experimental260Service } from './experimental260.service';

describe('Experimental260Service', () => {
  let service: Experimental260Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental260Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
