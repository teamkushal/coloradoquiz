import { TestBed } from '@angular/core/testing';

import { Experimental189Service } from './experimental189.service';

describe('Experimental189Service', () => {
  let service: Experimental189Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental189Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
