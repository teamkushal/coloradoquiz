import { TestBed } from '@angular/core/testing';

import { Experimental386Service } from './experimental386.service';

describe('Experimental386Service', () => {
  let service: Experimental386Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental386Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
