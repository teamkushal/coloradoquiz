import { TestBed } from '@angular/core/testing';

import { Experimental492Service } from './experimental492.service';

describe('Experimental492Service', () => {
  let service: Experimental492Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experimental492Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
