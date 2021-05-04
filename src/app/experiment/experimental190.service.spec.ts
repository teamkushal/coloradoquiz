import { TestBed } from '@angular/core/testing';

import { Experimental190Service } from './experimental190.service';

describe('Experimental190Service', () => {
  let service: Experimental190Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental190Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
