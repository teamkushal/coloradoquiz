import { TestBed } from '@angular/core/testing';

import { Experimental432Service } from './experimental432.service';

describe('Experimental432Service', () => {
  let service: Experimental432Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental432Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
