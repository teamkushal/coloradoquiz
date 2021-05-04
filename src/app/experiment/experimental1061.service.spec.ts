import { TestBed } from '@angular/core/testing';

import { Experimental1061Service } from './experimental1061.service';

describe('Experimental1061Service', () => {
  let service: Experimental1061Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1061Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
