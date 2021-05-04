import { TestBed } from '@angular/core/testing';

import { Experimental759Service } from './experimental759.service';

describe('Experimental759Service', () => {
  let service: Experimental759Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental759Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
