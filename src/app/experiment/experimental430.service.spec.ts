import { TestBed } from '@angular/core/testing';

import { Experimental430Service } from './experimental430.service';

describe('Experimental430Service', () => {
  let service: Experimental430Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental430Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
