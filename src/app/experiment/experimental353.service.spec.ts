import { TestBed } from '@angular/core/testing';

import { Experimental353Service } from './experimental353.service';

describe('Experimental353Service', () => {
  let service: Experimental353Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental353Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
