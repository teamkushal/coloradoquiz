import { TestBed } from '@angular/core/testing';

import { Experimental1989Service } from './experimental1989.service';

describe('Experimental1989Service', () => {
  let service: Experimental1989Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1989Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
