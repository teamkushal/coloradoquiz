import { TestBed } from '@angular/core/testing';

import { Experimental213Service } from './experimental213.service';

describe('Experimental213Service', () => {
  let service: Experimental213Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental213Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
