import { TestBed } from '@angular/core/testing';

import { Experimental589Service } from './experimental589.service';

describe('Experimental589Service', () => {
  let service: Experimental589Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental589Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
