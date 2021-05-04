import { TestBed } from '@angular/core/testing';

import { Experimental3144Service } from './experimental3144.service';

describe('Experimental3144Service', () => {
  let service: Experimental3144Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3144Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
