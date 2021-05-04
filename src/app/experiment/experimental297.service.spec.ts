import { TestBed } from '@angular/core/testing';

import { Experimental297Service } from './experimental297.service';

describe('Experimental297Service', () => {
  let service: Experimental297Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental297Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
