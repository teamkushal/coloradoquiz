import { TestBed } from '@angular/core/testing';

import { Experimental2432Service } from './experimental2432.service';

describe('Experimental2432Service', () => {
  let service: Experimental2432Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental2432Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
