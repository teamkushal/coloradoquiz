import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent108Component } from './test-component108.component';

describe('TestComponent108Component', () => {
  let component: TestComponent108Component;
  let fixture: ComponentFixture<TestComponent108Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent108Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
