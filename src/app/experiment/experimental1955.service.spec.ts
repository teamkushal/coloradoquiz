import { TestBed } from '@angular/core/testing';

import { Experimental1955Service } from './experimental1955.service';

describe('Experimental1955Service', () => {
  let service: Experimental1955Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1955Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
