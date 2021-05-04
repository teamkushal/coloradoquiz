import { TestBed } from '@angular/core/testing';

import { Experimental1021Service } from './experimental1021.service';

describe('Experimental1021Service', () => {
  let service: Experimental1021Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1021Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
