import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent561Component } from './test-component561.component';

describe('TestComponent561Component', () => {
  let component: TestComponent561Component;
  let fixture: ComponentFixture<TestComponent561Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent561Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
