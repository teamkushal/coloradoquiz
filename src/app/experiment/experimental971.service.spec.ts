import { TestBed } from '@angular/core/testing';

import { Experimental971Service } from './experimental971.service';

describe('Experimental971Service', () => {
  let service: Experimental971Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental971Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
