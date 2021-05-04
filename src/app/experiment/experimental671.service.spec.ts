import { TestBed } from '@angular/core/testing';

import { Experimental671Service } from './experimental671.service';

describe('Experimental671Service', () => {
  let service: Experimental671Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental671Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
