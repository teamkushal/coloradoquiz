import { TestBed } from '@angular/core/testing';

import { Experimental912Service } from './experimental912.service';

describe('Experimental912Service', () => {
  let service: Experimental912Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental912Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
