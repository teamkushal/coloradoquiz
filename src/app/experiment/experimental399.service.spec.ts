import { TestBed } from '@angular/core/testing';

import { Experimental399Service } from './experimental399.service';

describe('Experimental399Service', () => {
  let service: Experimental399Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental399Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
