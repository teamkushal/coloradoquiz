import { TestBed } from '@angular/core/testing';

import { Experimental128Service } from './experimental128.service';

describe('Experimental128Service', () => {
  let service: Experimental128Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental128Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
