import { TestBed } from '@angular/core/testing';

import { Experimental223Service } from './experimental223.service';

describe('Experimental223Service', () => {
  let service: Experimental223Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental223Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
