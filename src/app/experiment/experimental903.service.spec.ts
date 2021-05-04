import { TestBed } from '@angular/core/testing';

import { Experimental903Service } from './experimental903.service';

describe('Experimental903Service', () => {
  let service: Experimental903Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental903Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
