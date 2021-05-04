import { TestBed } from '@angular/core/testing';

import { Experimental817Service } from './experimental817.service';

describe('Experimental817Service', () => {
  let service: Experimental817Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental817Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
