import { TestBed } from '@angular/core/testing';

import { Experimental543Service } from './experimental543.service';

describe('Experimental543Service', () => {
  let service: Experimental543Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental543Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
