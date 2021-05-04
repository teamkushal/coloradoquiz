import { TestBed } from '@angular/core/testing';

import { Experimental397Service } from './experimental397.service';

describe('Experimental397Service', () => {
  let service: Experimental397Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental397Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
