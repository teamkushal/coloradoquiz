import { TestBed } from '@angular/core/testing';

import { Experimental3677Service } from './experimental3677.service';

describe('Experimental3677Service', () => {
  let service: Experimental3677Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental3677Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
