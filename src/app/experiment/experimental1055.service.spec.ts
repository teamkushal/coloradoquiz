import { TestBed } from '@angular/core/testing';

import { Experimental1055Service } from './experimental1055.service';

describe('Experimental1055Service', () => {
  let service: Experimental1055Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1055Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
