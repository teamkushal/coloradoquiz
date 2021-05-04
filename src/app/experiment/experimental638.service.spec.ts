import { TestBed } from '@angular/core/testing';

import { Experimental638Service } from './experimental638.service';

describe('Experimental638Service', () => {
  let service: Experimental638Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental638Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
