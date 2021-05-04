import { TestBed } from '@angular/core/testing';

import { Experimental968Service } from './experimental968.service';

describe('Experimental968Service', () => {
  let service: Experimental968Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental968Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
