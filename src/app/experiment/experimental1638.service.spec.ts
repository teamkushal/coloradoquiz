import { TestBed } from '@angular/core/testing';

import { Experimental1638Service } from './experimental1638.service';

describe('Experimental1638Service', () => {
  let service: Experimental1638Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1638Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
