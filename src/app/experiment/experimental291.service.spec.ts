import { TestBed } from '@angular/core/testing';

import { Experimental291Service } from './experimental291.service';

describe('Experimental291Service', () => {
  let service: Experimental291Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental291Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
