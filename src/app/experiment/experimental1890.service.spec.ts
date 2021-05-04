import { TestBed } from '@angular/core/testing';

import { Experimental1890Service } from './experimental1890.service';

describe('Experimental1890Service', () => {
  let service: Experimental1890Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental1890Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
