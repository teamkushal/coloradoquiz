import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent420Component } from './test-component420.component';

describe('TestComponent420Component', () => {
  let component: TestComponent420Component;
  let fixture: ComponentFixture<TestComponent420Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent420Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent420Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
