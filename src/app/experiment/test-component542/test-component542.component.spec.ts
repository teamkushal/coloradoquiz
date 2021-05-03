import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent542Component } from './test-component542.component';

describe('TestComponent542Component', () => {
  let component: TestComponent542Component;
  let fixture: ComponentFixture<TestComponent542Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent542Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
