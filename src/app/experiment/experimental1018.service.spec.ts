import { TestBed } from '@angular/core/testing';

import { Experimental1018Service } from './experimental1018.service';

describe('Experimental1018Service', () => {
  let service: Experimental1018Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1018Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
