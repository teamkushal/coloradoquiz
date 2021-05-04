import { TestBed } from '@angular/core/testing';

import { Experimental1321Service } from './experimental1321.service';

describe('Experimental1321Service', () => {
  let service: Experimental1321Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1321Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
