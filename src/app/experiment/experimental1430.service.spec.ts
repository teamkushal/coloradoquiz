import { TestBed } from '@angular/core/testing';

import { Experimental1430Service } from './experimental1430.service';

describe('Experimental1430Service', () => {
  let service: Experimental1430Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1430Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
