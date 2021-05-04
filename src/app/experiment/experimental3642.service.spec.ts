import { TestBed } from '@angular/core/testing';

import { Experimental3642Service } from './experimental3642.service';

describe('Experimental3642Service', () => {
  let service: Experimental3642Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3642Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
