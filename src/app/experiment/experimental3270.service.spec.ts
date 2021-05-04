import { TestBed } from '@angular/core/testing';

import { Experimental3270Service } from './experimental3270.service';

describe('Experimental3270Service', () => {
  let service: Experimental3270Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3270Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
