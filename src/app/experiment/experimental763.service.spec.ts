import { TestBed } from '@angular/core/testing';

import { Experimental763Service } from './experimental763.service';

describe('Experimental763Service', () => {
  let service: Experimental763Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental763Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
