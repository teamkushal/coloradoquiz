import { TestBed } from '@angular/core/testing';

import { Experimental706Service } from './experimental706.service';

describe('Experimental706Service', () => {
  let service: Experimental706Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental706Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
