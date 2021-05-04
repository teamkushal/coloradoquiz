import { TestBed } from '@angular/core/testing';

import { Experimental243Service } from './experimental243.service';

describe('Experimental243Service', () => {
  let service: Experimental243Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental243Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
