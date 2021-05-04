import { TestBed } from '@angular/core/testing';

import { Experimental344Service } from './experimental344.service';

describe('Experimental344Service', () => {
  let service: Experimental344Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental344Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
