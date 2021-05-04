import { TestBed } from '@angular/core/testing';

import { Experimental348Service } from './experimental348.service';

describe('Experimental348Service', () => {
  let service: Experimental348Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental348Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
